
const SITE_DATA = {
  divisions: [
    {
      id: "programmation",
      name: "Division chagée de l'Execution budgetaire &amp;Remboursement des Frais Médicaux",
      short: "Execution budgetaire &amp;Remboursement des Frais Médicaux",
      eyebrow: "Division 01",
      lead: "Élabore le cadre budgétaire annuel et pluriannuel de la région, en cohérence avec les priorités de développement territorial.",
      band: "La division traduit les orientations politiques régionales en enveloppes budgétaires chiffrées. Elle anime le dialogue de gestion avec les directions sectorielles, arbitre les demandes de crédits et prépare les documents soumis à l'Assemblée régionale.",
      missions: [
        { title: "Cadrage macro-budgétaire", text: "Fixe les plafonds de dépenses par secteur en fonction des recettes prévisionnelles et des priorités régionales." },
        { title: "Dialogue de gestion", text: "Anime les échanges annuels avec chaque direction pour arbitrer et consolider les demandes de crédits." },
        { title: "Documents budgétaires", text: "Prépare le budget primitif, les budgets rectificatifs et les rapports d'orientation présentés en session." }
      ],
      resources: [
        { title: "Guide de préparation budgétaire 2027", type: "PDF · 2,1 Mo" },
        { title: "Calendrier des arbitrages sectoriels", type: "PDF · 480 Ko" },
        { title: "Note de cadrage macro-budgétaire", type: "PDF · 1,4 Mo" }
      ],
      stats: [
        { value: "18", label: "Programmes cadrés pour 2027" },
        { value: "23", label: "Directions consultées" },
        { value: "45 j", label: "Durée du dialogue de gestion" }
      ],
      contact: ["Bâtiment A, 2ᵉ étage", "razafimandimbialfredo@gmail.com"],
      teamIds: ["rasoa", "hery", "toky"]
    },
    {
      id: "execution",
      name: "Division chargée  de la gestion  Patrimoine de l'Etat",
      short: " Patrimoine de l'Etat",
      eyebrow: "Division 02",
      lead: "Pilote l'engagement, la liquidation et le paiement des dépenses régionales, et suit en continu le rythme d'exécution des programmes.",
      band: "La division assure la bonne exécution du budget voté : validation des engagements, suivi des délais de paiement et publication d'un tableau de bord trimestriel partagé avec les directions.",
      missions: [
        { title: "Validation des engagements", text: "Contrôle la disponibilité des crédits avant tout engagement de dépense par les directions." },
        { title: "Suivi de trésorerie", text: "Ajuste le plan de décaissement mensuel selon les encaissements réels de recettes." },
        { title: "Tableau de bord trimestriel", text: "Publie un état d'avancement de l'exécution par programme, partagé avec les élus et les directions." }
      ],
      resources: [
        { title: "Tableau de bord d'exécution — T2 2026", type: "PDF · 3,0 Mo" },
        { title: "Procédure d'engagement des dépenses", type: "PDF · 620 Ko" },
        { title: "Modèle de demande de virement de crédits", type: "DOCX · 90 Ko" }
      ],
      stats: [
        { value: "58%", label: "Taux d'exécution à mi-parcours" },
        { value: "27 j", label: "Délai moyen de paiement" },
        { value: "312", label: "Engagements traités ce trimestre" }
      ],
      contact: ["Bâtiment A, 1ᵉʳ étage", "execution@budget-regional.mg", "+261 20 22 000 02"],
      teamIds: ["fara", "andry", "tojo"]
    },
    {
      id: "recettes",
      name: " Division chagée  de la  Finance Local et Tutelles des EPN ",
      short: " Finance Local et Tutelles des EPN",
      eyebrow: "Division 03",
      lead: "Optimise la mobilisation des ressources propres de la région et accompagne les communes dans le recouvrement de la fiscalité locale.",
      band: "La division identifie les gisements de recettes propres, fiabilise les prévisions de recouvrement et appuie les communes dans la modernisation de leurs outils de collecte.",
      missions: [
        { title: "Prévision des recettes", text: "Consolide les prévisions de recettes fiscales et non fiscales pour chaque exercice budgétaire." },
        { title: "Appui aux communes", text: "Accompagne les communes dans la mise à jour des rôles fiscaux et l'informatisation du recouvrement." },
        { title: "Recouvrement des redevances", text: "Suit le recouvrement des redevances régionales et propose des mesures de relance." }
      ],
      resources: [
        { title: "Rapport annuel sur la fiscalité locale", type: "PDF · 2,7 Mo" },
        { title: "Barème des redevances régionales 2026", type: "PDF · 350 Ko" },
        { title: "Guide d'informatisation du recouvrement communal", type: "PDF · 1,1 Mo" }
      ],
      stats: [
        { value: "71%", label: "Taux de recouvrement régional" },
        { value: "38", label: "Communes accompagnées" },
        { value: "+12%", label: "Recettes propres vs 2025" }
      ],
      contact: ["Bâtiment B, rez-de-chaussée", "recettes@budget-regional.mg", "+261 20 22 000 03"],
      teamIds: ["voahangy", "mamy", "lova"]
    },
    {
      id: "controle",
      name: "  Division de la Centre Informatique Régional",
      short: "Centre Informatique Régional",
      eyebrow: "Division 04",
      lead: "Vérifie la régularité des opérations budgétaires et comptables et recommande les mesures correctives nécessaires.",
      band: "La division réalise des missions de contrôle a posteriori sur les directions et les entités rattachées, produit des recommandations et en suit la mise en œuvre.",
      missions: [
        { title: "Missions d'audit interne", text: "Planifie et conduit des audits réguliers sur les processus budgétaires et comptables des directions." },
        { title: "Suivi des recommandations", text: "Vérifie la mise en œuvre des recommandations issues des missions précédentes." },
        { title: "Cartographie des risques", text: "Met à jour la cartographie des risques budgétaires et propose des dispositifs de maîtrise." }
      ],
      resources: [
        { title: "Rapport annuel d'audit interne", type: "PDF · 4,2 Mo" },
        { title: "Charte de l'audit interne", type: "PDF · 210 Ko" },
        { title: "Cartographie des risques budgétaires 2026", type: "PDF · 980 Ko" }
      ],
      stats: [
        { value: "12", label: "Missions d'audit menées en 2025" },
        { value: "82%", label: "Recommandations mises en œuvre" },
        { value: "4", label: "Risques majeurs sous surveillance" }
      ],
      contact: ["Bâtiment B, 1ᵉʳ étage", "controle@budget-regional.mg", "+261 20 22 000 04"],
      teamIds: ["ny", "sitraka", "hasina"]
    }
  ],
  team: [
    { id: "rasoa", name: "Rasoa Andrianina", role: "Chef du Service Régional du Budget", img: "picsrb/BDC.png" },
    { id: "hery", name: "Hery Ramanantsoa", role: "Chef de la Division Programmation", img: "" },
    { id: "toky", name: "Toky Rakotoson", role: "Analyste budgétaire", img: "" },
    { id: "fara", name: "Fara Rasolofomanana", role: "Chef de la Division Exécution", img: "" },
    { id: "andry", name: "Andry Randrianja", role: "Gestionnaire de crédits", img: "" },
    { id: "tojo", name: "Tojo Andriamampianina", role: "Chargé du suivi de trésorerie", img: "" },
    { id: "voahangy", name: "Voahangy Rabe", role: "Cheffe de la Division Recettes", img: "h" },
    { id: "mamy", name: "Mamy Randriamanantena", role: "Chargée de la fiscalité locale", img: "" },
    { id: "lova", name: "Lova Andriatsimialona", role: "Analyste des recettes", img: "" },
    { id: "ny", name: "Ny Aina Rakotomalala", role: "Chef de la Division Contrôle", img: "" },
    { id: "sitraka", name: "Sitraka Randriamora", role: "Auditeur interne", img: "" },
    { id: "hasina", name: "Hasina Ravelojaona", role: "Chargée de la cartographie des risques", img: "" }
  ],
  actualites: [
    { id: "a1", cat: "Communiqué", date: "28 août 2026", title: "Distribution du livre 'Le Budget des Citoyens'", excerpt: "Les directions sectorielles sont invitées à soumettre leurs propositions budgétaires avant le 30 septembre.", img: "picsrb/BDC.png" },
    { id: "a2", cat: "Rapport", date: "15 août 2026", title: "Publication du tableau de bord d'exécution T2", excerpt: "Le taux d'exécution des dépenses d'investissement atteint 58 % à mi-parcours de l'exercice.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
    { id: "a3", cat: "Formation", date: "2 août 2026", title: "Loi de Finances 2027 : le Ministère de l’Économie et des Finances à l’écoute du secteur privé", excerpt: "Trente agents des directions ont suivi la formation animée par la division Programmation.", img: "picsrb/LF.png" },
    { id: "a4", cat: "Événement", date: "20 juillet 2026", title: "Comité régional de suivi budgétaire", excerpt: "Élus et directeurs se sont réunis pour arbitrer les demandes de crédits complémentaires.", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" }
  ],
  dossiers: [
    { id: "d1", cat: "Investissement", title: "Le financement des routes rurales", excerpt: "Comment la région combine ressources propres et transferts de l'État pour désenclaver les zones rurales.", img: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=900&q=80", big: true },
    { id: "d2", cat: "Fiscalité", title: "Fiscalité locale : la marge de manœuvre des communes", excerpt: "Panorama des leviers fiscaux disponibles pour les communes de la région.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
    { id: "d3", cat: "Exécution", title: "Conférence Régional du Budget", excerpt: "Scéance de prise en compte des réels besoin de la société à Fianarantsoa et ses alentours avec le Prefet de Fianarantsoa,le Directeur su Service Régional du Budget et tous les chefs administatifs de la région Haute Matsiatra.", img: "picsrb/CRB.jpeg" }
  ]
};

/* =====================================================================
   APPLICATION JS
   ===================================================================== */
(function(){
  "use strict";

  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ------------------------------------------------------------------
     0. MODE SOMBRE / CLAIR (GÉRATION DU THÈME)
     ------------------------------------------------------------------ */
  const themeToggleBtn = $("#themeToggleBtn");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    if (newTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });

  /* ------------------------------------------------------------------
     1. BURGER MENU / TIROIR
     ------------------------------------------------------------------ */
  const burgerBtn   = $("#burgerBtn");
  const drawer       = $("#drawer");
  const drawerScrim  = $("#drawerScrim");
  const drawerClose  = $("#drawerClose");

  function openDrawer(){
    drawer.classList.add("is-open");
    drawerScrim.classList.add("is-open");
    burgerBtn.classList.add("burger--close");
    burgerBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
  }
  function closeDrawer(){
    drawer.classList.remove("is-open");
    drawerScrim.classList.remove("is-open");
    burgerBtn.classList.remove("burger--close");
    burgerBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
  }
  burgerBtn.addEventListener("click", () => drawer.classList.contains("is-open") ? closeDrawer() : openDrawer());
  drawerClose.addEventListener("click", closeDrawer);
  drawerScrim.addEventListener("click", closeDrawer);
  $$(".drawer-nav a").forEach(a => a.addEventListener("click", closeDrawer));

  /* ------------------------------------------------------------------
     1bis. ANCRAGES INTERNES (SOUS-NAVIGATION)
     ------------------------------------------------------------------ */
  document.addEventListener("click", e => {
    const link = e.target.closest("[data-anchor]");
    if (!link) return;
    e.preventDefault();
    const page = link.closest(".page");
    const target = page && page.querySelector('[data-anchor-target="' + link.dataset.anchor + '"]');
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ------------------------------------------------------------------
     2. GABARIT DIVISIONS (AVEC ENVOI DU FORMULAIRE VERS PYTHON/FLASK)
     ------------------------------------------------------------------ */
  const tpl = $("#division-template");
  const mount = $("#divisionMount");

  SITE_DATA.divisions.forEach(div => {
    const node = tpl.content.cloneNode(true);
    const section = node.querySelector(".page");
    section.id = "page-division-" + div.id;
    section.dataset.page = "division-" + div.id;

    node.querySelector(".division-eyebrow").textContent = div.eyebrow;
    node.querySelector(".division-title").innerHTML = div.name;
    node.querySelector(".division-lead").textContent = div.lead;
    node.querySelector(".division-band").innerHTML = div.band;

    const cols = { left: node.querySelector('[data-col="left"]'), right: node.querySelector('[data-col="right"]') };
    const center = node.querySelector('[data-col="center"]');

    div.missions.forEach((m, i) => {
      const card = document.createElement("div");
      card.className = "triptych-card";
      card.innerHTML = `<span class="tc-index">${String(i+1).padStart(2,"0")}</span><h4>${m.title}</h4><p>${m.text}</p>`;
      cols.left.appendChild(card);
    });

    div.stats.forEach(s => {
      const card = document.createElement("div");
      card.className = "triptych-card tc-stat";
      card.innerHTML = `<strong>${s.value}</strong><p>${s.label}</p>`;
      cols.right.appendChild(card);
    });
    center.innerHTML = `<h3>${div.short}</h3><p>${div.lead}</p>`;

    const resWrap = node.querySelector("[data-resources]");
    div.resources.forEach(r => {
      const item = document.createElement("div");
      item.className = "resource-item";
      item.innerHTML = `
        <div><strong>${r.title}</strong><br><span>${r.type}</span></div>
        <span class="resource-download" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3v13m0 0l-5-5m5 5l5-5M4 21h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>`;
      resWrap.appendChild(item);
    });

    const meta = node.querySelector("[data-contact-meta]");
    div.contact.forEach(line => {
      const li = document.createElement("li");
      li.textContent = line;
      meta.appendChild(li);
    });

    const form = node.querySelector("[data-division-form]");
    const note = node.querySelector("[data-form-note]");
    
    // Modification ici : Envoi effectif vers le serveur Python (Flask)
    form.addEventListener("submit", e => {
      e.preventDefault();
      
      const formData = new FormData(form);
      // Le serveur Python choisit l'adresse à partir de la division (voir MODE_TEST dans email.env)
      formData.append("division", div.id);

      fetch("http://localhost:5000/send-mail", {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          note.hidden = false;
          form.reset();
        } else {
          alert("Erreur lors de l'envoi : " + (data.error || "Erreur inconnue"));
        }
      })
      .catch(error => {
        console.error("Erreur réseau :", error);
        alert("Impossible de contacter le serveur d'envoi d'e-mails.");
      });
    });

    mount.appendChild(node);
    const members = SITE_DATA.team.filter(m => div.teamIds.includes(m.id));
    initCarousel(section.querySelector("[data-carousel]"), members);
  });

  /* ------------------------------------------------------------------
     3. CARROUSEL D'ÉQUIPE
     ------------------------------------------------------------------ */
  function initCarousel(root, members){
    if (!root || !members.length) return;
    const track   = root.querySelector("[data-track]");
    const dots    = root.querySelector("[data-dots]");
    const nameEl  = root.querySelector("[data-nametag-name]");
    const roleEl  = root.querySelector("[data-nametag-role]");
    const prevBtn = root.querySelector(".carousel-arrow--prev");
    const nextBtn = root.querySelector(".carousel-arrow--next");

    let active = 0;

    members.forEach((m, i) => {
      const card = document.createElement("div");
      card.className = "carousel-card";
      card.innerHTML = `<img src="${m.img}" alt="Portrait de ${m.name}" loading="lazy">`;
      card.addEventListener("click", () => { active = i; render(); });
      track.appendChild(card);

      const dot = document.createElement("button");
      dot.setAttribute("aria-label", "Voir " + m.name);
      dot.addEventListener("click", () => { active = i; render(); });
      dots.appendChild(dot);
    });

    const cards = $$(".carousel-card", track);
    const dotEls = $$("button", dots);

    function render(){
      const n = members.length;
      cards.forEach((card, i) => {
        let offset = i - active;
        if (offset > n/2) offset -= n;
        if (offset < -n/2) offset += n;

        const spacing = 140;
        const depth   = Math.abs(offset);
        const x = offset * spacing;
        const scale = offset === 0 ? 1 : Math.max(0.7, 1 - depth * 0.16);
        const rotate = offset * 8;
        const z = 10 - depth;

        card.style.transform = `translateX(${x}px) scale(${scale}) rotate(${rotate}deg)`;
        card.style.zIndex = z;
        card.style.opacity = depth > 2 ? 0 : 1 - depth * 0.22;
        card.style.filter = offset === 0 ? "none" : `brightness(${1 - depth*0.18}) saturate(${1 - depth*0.2})`;
        card.style.pointerEvents = depth > 2 ? "none" : "auto";
      });
      dotEls.forEach((d, i) => d.classList.toggle("is-active", i === active));
      nameEl.textContent = members[active].name;
      roleEl.textContent = members[active].role;
    }

    prevBtn.addEventListener("click", () => { active = (active - 1 + members.length) % members.length; render(); });
    nextBtn.addEventListener("click", () => { active = (active + 1) % members.length; render(); });
    render();
  }

  initCarousel($('[data-carousel="full"]'), SITE_DATA.team);

  /* ------------------------------------------------------------------
     4. MASONRY (ACCUEIL)
     ------------------------------------------------------------------ */
  (function buildHomeMasonry(){
    const wrap = $("#homeMasonry");
    const items = [];

    SITE_DATA.actualites.slice(0, 3).forEach(a => items.push({ type:"actu", data:a }));
    SITE_DATA.dossiers.slice(0, 3).forEach(d => items.push({ type:"dossier", data:d }));
    SITE_DATA.divisions.forEach(d => items.push({ type:"service", data:d }));
    items.splice(3, 0, { type:"quote" });

    items.forEach(item => {
      const card = document.createElement("article");
      card.className = "masonry-card";

      if (item.type === "actu"){
        const a = item.data;
        card.innerHTML = `
          <div class="mc-media"><img src="${a.img}" alt="" loading="lazy"></div>
          <div class="mc-body">
            <span class="mc-tag">${a.cat}</span>
            <h3>${a.title}</h3>
            <p>${a.excerpt}</p>
            <p class="mc-meta">${a.date}</p>
          </div>`;
        card.addEventListener("click", () => navigate("actualites"));
      } else if (item.type === "dossier"){
        const d = item.data;
        card.innerHTML = `
          <div class="mc-media"><img src="${d.img}" alt="" loading="lazy"></div>
          <div class="mc-body">
            <span class="mc-tag">${d.cat}</span>
            <h3>${d.title}</h3>
            <p>${d.excerpt}</p>
          </div>`;
        card.addEventListener("click", () => navigate("dossiers"));
      } else if (item.type === "service"){
        const d = item.data;
        card.classList.add("tag-service");
        card.innerHTML = `
          <div class="mc-body">
            <span class="mc-tag">${d.eyebrow}</span>
            <h3>${d.short}</h3>
            <p>${d.lead}</p>
            <p class="mc-meta">${d.missions.length} missions clés →</p>
          </div>`;
        card.addEventListener("click", () => navigate("division-" + d.id));
      } else if (item.type === "quote"){
        card.classList.add("mc-quote");
        card.innerHTML = `
          <p>« Chaque crédit voté est un engagement suivi jusqu'à son exécution complète. »</p>
          <span>Chef du Service Régional du Budget</span>`;
      }
      wrap.appendChild(card);
    });
  })();

  /* ------------------------------------------------------------------
     5. DOSSIERS & ACTUALITÉS
     ------------------------------------------------------------------ */
  function setupSection(gridId, filterBarId, dataArr, isDossier = false) {
    const grid = $(gridId);
    const filterBar = $(filterBarId);
    const cats = ["Tous", ...new Set(dataArr.map(item => item.cat))];

    cats.forEach(cat => {
      const chip = document.createElement("button");
      chip.className = "filter-chip" + (cat === "Tous" ? " is-active" : "");
      chip.textContent = cat;
      chip.addEventListener("click", () => {
        $$(".filter-chip", filterBar).forEach(c => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        render(cat);
      });
      filterBar.appendChild(chip);
    });

    function render(filter){
      grid.innerHTML = "";
      dataArr.filter(item => filter === "Tous" || !filter || item.cat === filter).forEach(item => {
        const card = document.createElement("article");
        card.className = "article-card" + (isDossier && item.big ? " is-big" : "");
        card.innerHTML = `
          <div class="ac-media"><img src="${item.img}" alt="" loading="lazy"></div>
          <div class="ac-body">
            <span class="ac-tag">${item.cat}</span>
            <h3>${item.title}</h3>
            <p class="ac-excerpt">${item.excerpt}</p>
            ${item.date ? `<p class="ac-date">${item.date}</p>` : ''}
          </div>`;
        grid.appendChild(card);
      });
    }
    render("Tous");
  }

  setupSection("#dossierGrid", "#dossierFilters", SITE_DATA.dossiers, true);
  setupSection("#actuGrid", "#actuFilters", SITE_DATA.actualites);

  /* ------------------------------------------------------------------
     6. ORGANIGRAMME
     ------------------------------------------------------------------ */
  (function buildOrgGrid(){
    const grid = $("#orgGrid");
    SITE_DATA.divisions.forEach(d => {
      const card = document.createElement("article");
      card.className = "org-card";
      card.innerHTML = `
        <p class="oc-eyebrow">${d.eyebrow}</p>
        <h3>${d.short}</h3>
        <p>${d.lead}</p>
        <span class="oc-link">Découvrir la division →</span>`;
      card.addEventListener("click", () => navigate("division-" + d.id));
      grid.appendChild(card);
    });
  })();


  (function buildOrgChart(){
    const mountEl = $("#orgChart");
    if (!mountEl) return;

    const W = 1440, H = 1024;
    const LOGO = "picsrb/ChatGPT Image 7 oct. 2026, 14_39_59.png";

    // type : root | staff | div | unit  — c : couleur d'accent des divisions
    const NODES = [
      { t:"root",  x:582,  y:95,  w:287, h:44,  txt:"Service Régional du Budget" },

      { t:"staff", x:247,  y:192, w:287, h:58,  txt:"Bureau des Affaires Administratives et Financières" },
      { t:"staff", x:921,  y:203, w:287, h:58,  txt:"Cellule d'Appui et Coordination" },
      { t:"staff", x:91,   y:309, w:262, h:63,  txt:"Cellule chargée de la Gestion du Personnel" },
      { t:"staff", x:422,  y:309, w:288, h:80,  txt:"Cellule chargée de la Logistique et Comptabilité" },
      { t:"staff", x:997,  y:314, w:287, h:43,  txt:"Secrétariat" },

      { t:"div",   x:122,  y:444, w:230, h:63,  txt:"Division Patrimoine de l'Etat", route:"execution", c:"#4CC38A" },
      { t:"div",   x:422,  y:448, w:288, h:88,  txt:"Division chargée des Finances Locales et Tutelle des EPN", route:"recettes", c:"#F8B33E" },
      { t:"div",   x:766,  y:442, w:287, h:92,  txt:"Division d'Exécution Budgétaire et Remboursement des Frais Médicaux", route:"programmation", c:"#9B8CE0" },
      { t:"div",   x:1097, y:447, w:243, h:68,  txt:"Centre Informatique Régional", route:"controle", c:"#3CC4D8" },

      { t:"unit",  x:161,  y:555, w:240, h:66,  txt:"Bureau des Véhicules Administratifs" },
      { t:"unit",  x:159,  y:720, w:245, h:81,  txt:"Bureau des Matériels et Transit Administratifs" },
      { t:"unit",  x:157,  y:907, w:245, h:84,  txt:"Bureau des Logements et Bâtiments Administratifs" },

      { t:"unit",  x:428,  y:644, w:288, h:61,  txt:"Bureau Chargé des Finances Locales" },
      { t:"unit",  x:440,  y:839, w:276, h:71,  txt:"Bureau Chargé de Tutelle des EPN" },

      { t:"unit",  x:761,  y:691, w:288, h:65,  txt:"Bureau Chargé d'Exécution Budgétaire" },
      { t:"unit",  x:771,  y:901, w:288, h:83,  txt:"Bureau Chargé des Remboursements et Frais Médicaux" },

      { t:"unit",  x:1007, y:593, w:288, h:61,  txt:"Bureau de Formation et Assistance" },
      { t:"unit",  x:1007, y:809, w:288, h:66,  txt:"Bureau de Maintenance" }
    ];

    // Connecteurs : [x1, y1, x2, y2]
    const LINES = [
      [740,139,740,488],                    // axe central
      [534,228,921,228],                    // affaires admin. ↔ cellule d'appui
      [740,337,997,337],                    // axe → secrétariat
      [385,250,385,340],[353,340,422,340],  // affaires admin. → cellules
      [710,488,766,488],                    // axe → div. exécution budgétaire
      [352,485,422,485],                    // patrimoine → finances locales
      [96,478,96,947],                      // rail patrimoine
      [96,478,122,478],[96,587,161,587],[96,757,159,757],[96,947,157,947],
      [572,536,572,839],                    // finances locales → bureaux
      [909,534,909,901],                    // exécution budgétaire → bureaux
      [1053,482,1097,482],                  // exécution → centre informatique
      [1340,474,1365,474],[1365,474,1365,835], // rail centre informatique
      [1295,625,1365,625],[1295,835,1365,835]
    ];

    const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");

    const linesSvg = LINES.map(l => `<line x1="${l[0]}" y1="${l[1]}" x2="${l[2]}" y2="${l[3]}"/>`).join("");

    const nodesHtml = NODES.map(n => {
      const style = `left:${n.x}px;top:${n.y}px;width:${n.w}px;height:${n.h}px;` + (n.c ? `--c:${n.c};` : "");
      const cls = "ot-node ot-node--" + n.t;
      return n.route
        ? `<a class="${cls}" style="${style}" href="#/division/${n.route}" title="Ouvrir la page"><span>${esc(n.txt)}</span></a>`
        : `<div class="${cls}" style="${style}"><span>${esc(n.txt)}</span></div>`;
    }).join("");

    mountEl.innerHTML = `
      <div class="ot-viewport">
        <div class="ot-stage" style="width:${W}px;height:${H}px">
          <img class="ot-logo" src="${LOGO}" alt="" aria-hidden="true">
          <svg class="ot-lines" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" aria-hidden="true">${linesSvg}</svg>
          ${nodesHtml}
        </div>
      </div>`;

    // Mise à l'échelle : la scène garde ses proportions, quelle que soit la largeur disponible
    const viewport = mountEl.querySelector(".ot-viewport");
    const stage = mountEl.querySelector(".ot-stage");
    function fit(){
      const avail = mountEl.clientWidth;
      if (!avail) return;                       // page masquée : on recalculera à l'affichage
      const scale = Math.max(0.5, Math.min(1, avail / W));
      stage.style.transform = `scale(${scale})`;
      viewport.style.width  = Math.round(W * scale) + "px";
      viewport.style.height = Math.round(H * scale) + "px";
    }
    if (window.ResizeObserver) new ResizeObserver(fit).observe(mountEl);
    window.addEventListener("resize", fit);
    fit();
  })();

  /* ------------------------------------------------------------------
     7. FORMULAIRE DE CONTACT GÉNÉRAL & RECHERCHE
     ------------------------------------------------------------------ */
  $("#generalContactForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.set("division", formData.get("division") || "secretariat");
    fetch("http://localhost:5000/send-mail", { method: "POST", body: formData })
      .then(r => r.json())
      .then(data => {
        if (data.success) { $("#generalFormNote").hidden = false; form.reset(); }
        else alert("Erreur lors de l'envoi : " + (data.error || "Erreur inconnue"));
      })
      .catch(err => {
        console.error("Erreur réseau :", err);
        alert("Impossible de contacter le serveur d'envoi d'e-mails.");
      });
  });

  const searchInput = $("#searchInput");
  const searchResults = $("#searchResults");
  const searchIndex = [
    ...SITE_DATA.actualites.map(a => ({ kind:"Actualité", title:a.title, text:a.excerpt, route:"actualites" })),
    ...SITE_DATA.dossiers.map(d => ({ kind:"Dossier", title:d.title, text:d.excerpt, route:"dossiers" })),
    ...SITE_DATA.divisions.map(d => ({ kind:"Division", title:d.short, text:d.lead, route:"division-" + d.id }))
  ];

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q){ searchResults.hidden = true; searchResults.innerHTML = ""; return; }
    const matches = searchIndex.filter(i => i.title.toLowerCase().includes(q) || i.text.toLowerCase().includes(q)).slice(0, 7);

    searchResults.innerHTML = matches.length ? "" : `<div class="search-empty">Aucun résultat</div>`;
    matches.forEach(m => {
      const a = document.createElement("a");
      a.href = "#/" + m.route.replace("division-", "division/");
      a.className = "search-result-item";
      a.innerHTML = `<small>${m.kind}</small>${m.title}`;
      a.addEventListener("click", () => { searchResults.hidden = true; searchInput.value = ""; });
      searchResults.appendChild(a);
    });
    searchResults.hidden = false;
  });

  /* ------------------------------------------------------------------
     8. ROUTEUR SPA
     ------------------------------------------------------------------ */
  const pages = $$(".page");
  function navigate(route){ location.hash = "/" + route.replace("division-", "division/"); }
  window.navigate = navigate;

  function render(){
    const hash = location.hash.replace(/^#\/?/, "");
    const route = hash.startsWith("division/") ? "division-" + hash.split("/")[1] : (hash.split("/")[0] || "accueil");

    pages.forEach(p => p.classList.toggle("is-active", p.dataset.page === route));
    document.body.dataset.page = route;
    $$("[data-route]").forEach(a => a.classList.toggle("is-active", a.dataset.route === route));
    closeDrawer();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  window.addEventListener("hashchange", render);
  render();
})();