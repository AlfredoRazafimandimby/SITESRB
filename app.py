import logging
import os
import re
import smtplib
from email.message import EmailMessage

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, "email.env"))


GMAIL_USER = os.environ.get("GMAIL_USER")
GMAIL_PASSWORD = (os.environ.get("GMAIL_PASSWORD") or "").replace(" ", "")
MODE_TEST = os.environ.get("MODE_TEST", "1") == "1"

if not GMAIL_USER or not GMAIL_PASSWORD:
    raise RuntimeError(
        "GMAIL_USER et GMAIL_PASSWORD doivent être définis dans email.env "
        "(ou comme variables d'environnement) avant de lancer le serveur."
    )


DESTINATAIRES = {
    "programmation": GMAIL_USER,  # TODO : remplacer par l'adresse réelle de la division
    "execution": "razafimandimbialfredo@gamil.com",
    "recettes": "razafimandimbialfredo@gmail.com",
    "controle": "razafimandimbialfredo@gmail.com",
    "secretariat": "razafimandimbialfredo@gmail.com",
}

app = Flask(__name__)
CORS(app) 
logging.basicConfig(level=logging.INFO)

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def une_ligne(texte, max_len=150):
    """Retire les retours à la ligne (injection d'en-têtes) et limite la longueur."""
    return re.sub(r"[\r\n]+", " ", (texte or "")).strip()[:max_len]


def envoyer(msg):
    """Essaie Gmail par le port 587 (STARTTLS), puis par le port 465 (SSL) si le 587 est bloqué."""
    try:
        with smtplib.SMTP("smtp.gmail.com", 587, timeout=20) as smtp:
            smtp.starttls()
            smtp.login(GMAIL_USER, GMAIL_PASSWORD)
            smtp.send_message(msg)
    except smtplib.SMTPAuthenticationError:
        raise
    except (OSError, smtplib.SMTPException) as e:
        app.logger.warning("Port 587 impossible (%r), essai du port 465", e)
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, timeout=20) as smtp:
            smtp.login(GMAIL_USER, GMAIL_PASSWORD)
            smtp.send_message(msg)


# --- Route -------------------------------------------------------------------
@app.route("/send-mail", methods=["POST"])
def send_mail():
    division = (request.form.get("division") or "").strip()
    nom = une_ligne(request.form.get("nom"), 100)
    email_expediteur = une_ligne(request.form.get("email"), 120)
    objet = une_ligne(request.form.get("objet"), 150)
    message_texte = (request.form.get("message") or "").strip()[:5000]

    if division not in DESTINATAIRES:
        return jsonify({"error": "Division inconnue"}), 400
    if not nom or not message_texte:
        return jsonify({"error": "Nom et message obligatoires"}), 400
    if not EMAIL_RE.match(email_expediteur):
        return jsonify({"error": "Adresse e-mail invalide"}), 400

    destinataire = GMAIL_USER if MODE_TEST else DESTINATAIRES[division]

    msg = EmailMessage()
    msg["Subject"] = f"[{division}] {objet or 'Nouveau message de contact'} — {nom}"
    msg["From"] = GMAIL_USER
    msg["To"] = destinataire
    msg["Reply-To"] = email_expediteur  # « Répondre » écrit au visiteur
    msg.set_content(
        f"De : {nom} ({email_expediteur})\n"
        f"Division : {division}\n"
        f"Objet : {objet}\n\n"
        f"Message :\n{message_texte}\n"
    )

    try:
        envoyer(msg)
        return jsonify({"success": True, "message": "E-mail envoyé avec succès !"})

    except smtplib.SMTPAuthenticationError:
        app.logger.exception("Gmail a refusé l'identifiant / le mot de passe d'application")
        return jsonify({"error": "Gmail a refusé la connexion (mot de passe d'application ?)"}), 500
    except Exception as e:
        app.logger.exception("Échec de l'envoi")
        return jsonify({"error": f"Impossible de joindre Gmail ({type(e).__name__}). "
                                 "Voir le terminal ; vérifiez antivirus / pare-feu / connexion."}), 500


if __name__ == "__main__":
    app.run(debug=os.environ.get("FLASK_DEBUG", "1") == "1", port=5000)