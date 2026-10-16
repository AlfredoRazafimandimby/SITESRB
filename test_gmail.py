"""
Test de connexion à Gmail. Ne modifie AUCUN fichier et n'affiche JAMAIS le mot de passe.
Placez ce fichier à côté de app.py et email.env, puis lancez :   python test_gmail.py
"""
import os
import platform
import smtplib
import ssl
import sys
from email.message import EmailMessage

from dotenv import load_dotenv

BASE = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE, "email.env"))
USER = os.environ.get("GMAIL_USER") or ""
PWD = (os.environ.get("GMAIL_PASSWORD") or "").replace(" ", "")

print("Python :", sys.version.split()[0], "|", platform.platform())
print("Dossier :", BASE)
print("Fichier email.env trouvé :", os.path.exists(os.path.join(BASE, "email.env")))
print("Compte :", USER or "(vide !)")
print("Longueur du mot de passe :", len(PWD), "(un mot de passe d'application Google fait 16)")
if len(PWD) != 16:
    print("\n>>> ATTENTION : le mot de passe de email.env n'est PAS un mot de passe d'application "
          "valide (16 caractères attendus). Gmail le refusera.\n")
for v in ("HTTP_PROXY", "HTTPS_PROXY", "ALL_PROXY"):
    if os.environ.get(v):
        print(f"Variable {v} définie :", os.environ[v])


def emetteur_certificat(sock):
    """Qui a signé le certificat reçu ? Google normalement ; un antivirus s'il intercepte."""
    try:
        cert = sock.getpeercert()
        issuer = dict(x[0] for x in cert["issuer"])
        return issuer.get("organizationName") or issuer.get("commonName") or str(issuer)
    except Exception as e:  # noqa: BLE001
        return f"illisible ({e!r})"


def test(nom, port, ssl_direct):
    print(f"\n=== {nom} (port {port}) ===")
    ctx = ssl.create_default_context()
    s = None
    try:
        s = (smtplib.SMTP_SSL("smtp.gmail.com", port, context=ctx, timeout=30) if ssl_direct
             else smtplib.SMTP("smtp.gmail.com", port, timeout=30))
        print("1. Connexion à Gmail :        OK")
        s.ehlo()
        if not ssl_direct:
            s.starttls(context=ctx)
            s.ehlo()
        print("2. Chiffrement TLS :          OK | certificat signé par :", emetteur_certificat(s.sock))
        print("   Méthodes de login proposées :", s.esmtp_features.get("auth", "?"))
    except Exception as e:  # noqa: BLE001
        print("   ÉCHEC avant le login :", type(e).__name__, "-", e)
        return None

    try:
        s.login(USER, PWD)
        print("3. Login :                    OK")
        return s
    except smtplib.SMTPAuthenticationError as e:
        print("3. Login : REFUSÉ par Gmail ->", e.smtp_code, e.smtp_error.decode(errors="replace")[:200])
    except smtplib.SMTPServerDisconnected as e:
        print("3. Login : Gmail (ou un programme sur votre PC) a COUPÉ la connexion ->", e)
    except Exception as e:  # noqa: BLE001
        print("3. Login : ÉCHEC", type(e).__name__, "-", e)
    try:
        s.close()
    except Exception:  # noqa: BLE001
        pass
    return None


ok = test("STARTTLS", 587, False) or test("SSL direct", 465, True)

if ok:
    msg = EmailMessage()
    msg["Subject"] = "Test du site SRB"
    msg["From"] = USER
    msg["To"] = USER
    msg.set_content("Si vous lisez ceci, l'envoi depuis Python fonctionne.")
    try:
        ok.send_message(msg)
        print("\n>>> E-mail de test ENVOYÉ à", USER, "- regardez votre boîte de réception (et les spams).")
    except Exception as e:  # noqa: BLE001
        print("\n>>> Login OK mais envoi impossible :", type(e).__name__, "-", e)
    ok.quit()
else:
    print("\n>>> Aucun envoi possible. Copiez tout ce texte et envoyez-le moi.")