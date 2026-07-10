/* Domaine Dymond — interactions : i18n FR/EN, galerie, lightbox, navigation */

(function () {
  "use strict";

  /* ---------- i18n ---------- */

  const EN = {
    "brand": "Domaine Dymond",
    "nav.domaine": "The Estate",
    "nav.phare": "Le Phare",
    "nav.territoire": "The Land",
    "nav.galerie": "Gallery",
    "nav.contact": "Contact",

    "hero.kicker": "Eastern Townships · Québec",
    "hero.title": "Domaine Dymond",
    "hero.sub": "151.85 acres · Private lake · 2022 signature residence",

    "intro.eyebrow": "A world of its own",
    "intro.title": "The art of living, ninety minutes from Montréal",
    "intro.p1": "In the heart of the Eastern Townships, alongside Dunham's wine route, Domaine Dymond unfolds across 151.85 acres of lavender, orchards, managed forest and ponds gathered around a private lake. A fully fenced territory, laced with trails, patiently shaped to welcome several generations at once.",
    "intro.p2": "Twelve buildings answer one another here — from the ultra-luxury contemporary residence completed in 2022 to the heritage farmhouse of 1880 — in complete self-sufficiency: geothermal energy, generators, fibre optics, underground power. A life project, ready to be passed on.",

    "stats.acres": "acres of fenced land",
    "stats.batiments": "principal and secondary buildings",
    "stats.pi2": "sq. ft. of living space — main residence",
    "stats.lac": "private lake, two docks, electric pontoon",

    "phare.eyebrow": "The main residence · 2022",
    "phare.title": "Le Phare",
    "phare.p1": "The estate's masterwork, Le Phare was built in 2022 and carries the GCR new-home warranty. Its rear façade — a full curtain wall — opens 8,194 sq. ft. of living space onto the lake and hills. Seventeen-foot cathedral ceilings lined in clear poplar, Eastern white cedar shingles laid piece by piece, a steel roof: refined architecture, executed without compromise.",
    "phare.bienetre.title": "The wellness spaces",
    "phare.bienetre.p": "An indoor pool beneath a yellow-cedar ceiling, linked to the gym by a glazed footbridge. A quartz-heated cedar sauna. Outside, a concrete infinity pool with waterfall and heated slabs, a spa and a full outdoor kitchen stretch the seasons.",
    "phare.f1": "Primary suite — gas fireplace, clawfoot tub, full-height double shower",
    "phare.f2": "Sub-Zero kitchen, induction cooktop, steam oven, Dekton counters",
    "phare.f3": "Custom built-in millwork and hand-blown light fixtures",
    "phare.f4": "Radiant heated ceramic floors and full home automation",
    "phare.f5": "Two integrated double garages, finished loft with freight lift",
    "phare.mesure.title": "The measure of exception",
    "phare.s1t": "Living area",
    "phare.s1d": "8,194 sq. ft. + 5,330 sq. ft. basement",
    "phare.s2t": "Bedrooms & baths",
    "phare.s2d": "4 bedrooms · 7 bathrooms",
    "phare.s3t": "Terraces",
    "phare.s3d": "3,363 sq. ft. facing the lake",
    "phare.s4t": "Warranty",
    "phare.s4d": "GCR new-home warranty through 2027",

    "chalet.eyebrow": "The heritage residence · circa 1880",
    "chalet.title": "Le Chalet",
    "chalet.p1": "The estate's historic heart, Le Chalet has watched over this land for nearly a century and a half. Fully reimagined in 2007-2009 and again in 2020-2021, it keeps its original beams beneath a cathedral roof, gathered around a thirteen-foot granite island.",
    "chalet.p2": "Three bedrooms, a fifty-one-foot covered porch, a heated salt-water pool with its lakeside pavilion: the consummate guest house — or a character-filled pied-à-terre while the main residence entertains.",
    "chalet.f1": "1,853 sq. ft. of living space · 3 bedrooms upstairs",
    "chalet.f2": "Kitchen renovated in 2021, 13-foot granite island",
    "chalet.f3": "32-foot salt-water pool and pavilion renovated 2024-2025",
    "chalet.f4": "Slow-burning wood fireplace, covered porch",

    "annexes.eyebrow": "A complete hamlet",
    "annexes.title": "The Outbuildings",
    "annexes.p1": "Ten secondary buildings, each with its own calling, orbit the two residences — guest quarters, workshops, a production greenhouse and garages. Room for guests, for passions, and for the machinery of an estate that provides for itself.",
    "annexes.grange.t": "La Grange",
    "annexes.grange.d": "A heritage barn, extended and deeply renovated — a 17-foot cathedral section generously glazed, a full kitchen, a finished bunk room and the original 1880 beams.",
    "annexes.shed.t": "La Shed",
    "annexes.shed.d": "A 1,560 sq. ft. guest loft — equipped kitchen, gas fireplace, upstairs bunk room and a 25-foot covered, heated terrace.",
    "annexes.pavillon.t": "The Pavilion",
    "annexes.pavillon.d": "At the water's edge: summer kitchen and powder room over a terrazzo floor — the reception spot for swimming afternoons.",
    "annexes.garage.t": "The Garage",
    "annexes.garage.d": "Four cars on radiant-heated ceramic, insulated epoxy slab and motorized doors — the estate's newest build.",
    "annexes.atelier.t": "The Workshop",
    "annexes.atelier.d": "Roughly 30 × 60 feet, insulated and heated to residential standards under a 12-foot ceiling — workshop, studio or playroom.",
    "annexes.serre.t": "The Greenhouse",
    "annexes.serre.d": "A 70-foot production greenhouse extensively renovated in 2025, with its own well, irrigation and motorized door.",
    "annexes.shop.t": "The Shop",
    "annexes.shop.d": "An insulated 408 sq. ft. storage workshop, Proslat system and motorized garage door.",
    "annexes.dome.t": "The Archidome",
    "annexes.dome.d": "An 1,800 sq. ft. steel dome with 16 feet of clearance — high-capacity storage, connected to a generator.",
    "annexes.poulailler.t": "The Henhouse",
    "annexes.poulailler.d": "Insulated and heated, four nesting boxes and a screened aviary — fresh eggs every morning.",
    "annexes.scierie.t": "The Sawmill",
    "annexes.scierie.d": "A period wood-and-materials shed — the estate's agricultural memory.",

    "terre.eyebrow": "614,515 m² shaped with care",
    "terre.title": "The Land",
    "terre.p1": "In June, lavender blooms across the formerly certified-organic plantation. The orchard lines up plum, pear, apple and cherry trees, blueberries and haskaps. The forest, under a complete management plan, opens onto kilometres of fenced trails — and the lake waits, with its two docks and electric pontoon.",
    "terre.c1": "The private lake — swimming, docks and pontoon",
    "terre.c2": "Lavender and orchard — summer in bloom",
    "terre.c3": "Waterfalls, streams and bridges through the forest",
    "terre.c5": "Afternoons at the water's edge",
    "terre.c6": "The entrance gate and private paved drive",
    "terre.c7": "Electric pontoon, paddle boats and kayaks — included",
    "terre.l1": "Lavender field — formerly certified organic production",
    "terre.l2": "Orchard: plums, pears, apples, cherries, blueberries, haskaps, sea buckthorn",
    "terre.l3": "Three oxygenated ponds, streams and waterfalls",
    "terre.l4": "Pickleball and pétanque courts, fenced kitchen garden, Bali islet",
    "terre.l5": "Kilometres of game fencing, shelter for two horses",
    "terre.l6": "Machinery included: golf carts, electric snowmobile, restored tractor, watercraft",

    "auto.eyebrow": "An invisible infrastructure",
    "auto.title": "Complete Self-Sufficiency",
    "auto.p1": "The estate was engineered for absolute reliability: everything buried, doubled, filtered. Off-grid living you never have to think about.",
    "auto.g1t": "Geothermal",
    "auto.g1d": "Five independent systems and five wells, radiant slab and room-by-room zoning.",
    "auto.g2t": "Four generators",
    "auto.g2d": "Automatic start — including one covering the entire main residence.",
    "auto.g3t": "Fibre optics",
    "auto.g3d": "In every habitable building, with underground power across the whole estate.",
    "auto.g4t": "600 amperes",
    "auto.g4d": "A 600 A main service and three 220 V charging stations for electric vehicles.",
    "auto.g5t": "Mastered water",
    "auto.g5d": "Artesian wells, softeners and filtration; irrigation for the central drive and gardens.",
    "auto.g6t": "Home automation",
    "auto.g6d": "Lighting, blinds, recessed curtains, motorized screens and cameras — at your fingertips.",

    "galerie.eyebrow": "The estate in pictures",
    "galerie.title": "Gallery",

    "lieu.eyebrow": "Dunham · Brome-Missisquoi",
    "lieu.title": "Alongside the Wine Route",
    "lieu.p1": "The estate sits in Dunham's rolling landscape, Québec's first wine country, minutes from vineyards, orchards and the village. Bromont and its slopes are a quarter hour away; Montréal, under ninety minutes; the Vermont border, ten minutes.",
    "lieu.d1t": "Montréal",
    "lieu.d1d": "≈ 1 h 15 – 1 h 30",
    "lieu.d2t": "Bromont",
    "lieu.d2d": "≈ 20 minutes",
    "lieu.d3t": "U.S. border (Vermont)",
    "lieu.d3d": "≈ 10 minutes",
    "lieu.d4t": "Dunham village",
    "lieu.d4d": "≈ 5 minutes",
    "lieu.map": "View on Google Maps",

    "contact.eyebrow": "Private showings by appointment",
    "contact.title": "Experience Domaine Dymond",
    "contact.p1": "The property is shown by appointment, upon presentation of pre-qualification. Our team will guide you with complete discretion, in English or French.",
    "contact.cad": "CAD",
    "contact.cta": "Arrange a private showing",
    "contact.team": "Équipe Deslauriers Fortin",

    "footer.team": "Équipe Deslauriers Fortin",
    "footer.legal": "The information presented is provided for reference only and does not constitute an offer. Certain data originates from the owner and official documents and will be validated at the deed of sale."
  };

  const FR = {}; // capturé depuis le HTML au chargement
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    FR[el.getAttribute("data-i18n")] = el.innerHTML;
  });

  var currentLang = localStorage.getItem("dymond-lang") || "fr";
  var langToggle = document.getElementById("langToggle");

  function applyLang(lang) {
    var dict = lang === "en" ? EN : FR;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    langToggle.textContent = lang === "en" ? "FR" : "EN";
    document.title = lang === "en"
      ? "Domaine Dymond — 1155-1157 Dymond Rd, Dunham | Engel & Völkers"
      : "Domaine Dymond — 1155-1157 ch. Dymond, Dunham | Engel & Völkers";
    currentLang = lang;
    localStorage.setItem("dymond-lang", lang);
  }

  langToggle.addEventListener("click", function () {
    applyLang(currentLang === "fr" ? "en" : "fr");
  });
  if (currentLang === "en") applyLang("en");

  /* ---------- Header ---------- */

  var header = document.getElementById("siteHeader");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var burger = document.getElementById("navBurger");
  burger.addEventListener("click", function () {
    var open = document.body.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Galerie ---------- */

  var NUMS = [];
  for (var i = 2; i <= 50; i++) {
    if (i === 34 || i === 35) continue; // panneau nominatif / personne visible — confidentialité
    NUMS.push(i);
  }
  // sélection de la propriétaire (jour), puis séquence crépuscule
  NUMS = NUMS.concat([
    142, 143, 144, 145, 150, 151, 152, 156, 157,
    253, 257, 261, 263, 267, 269, 280, 281, 282,
    284, 285, 286, 288, 289, 292, 293, 294, 296, 297, 300, 302,
    305, 306, 310, 311, 315, 316, 318, 319, 324, 329, 330
  ]);

  var gallery = document.getElementById("gallery");
  var frag = document.createDocumentFragment();
  NUMS.forEach(function (n, idx) {
    var id = "d" + String(n).padStart(2, "0");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-label", "Photo " + (idx + 1));
    var img = document.createElement("img");
    img.src = "assets/img/" + id + "-thumb.jpg";
    img.alt = "Domaine Dymond — photo " + (idx + 1);
    img.loading = "lazy";
    btn.appendChild(img);
    btn.addEventListener("click", function () { openLightbox(idx); });
    frag.appendChild(btn);
  });
  gallery.appendChild(frag);

  /* ---------- Lightbox ---------- */

  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCount = document.getElementById("lbCount");
  var current = 0;

  function show(idx) {
    current = (idx + NUMS.length) % NUMS.length;
    var id = "d" + String(NUMS[current]).padStart(2, "0");
    lbImg.src = "assets/img/" + id + "-large.jpg";
    lbImg.alt = "Domaine Dymond — photo " + (current + 1);
    lbCount.textContent = (current + 1) + " / " + NUMS.length;
  }
  function openLightbox(idx) {
    show(idx);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", function () { show(current - 1); });
  document.getElementById("lbNext").addEventListener("click", function () { show(current + 1); });
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  var touchX = null;
  lightbox.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 48) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  }, { passive: true });

  /* ---------- Reveal au défilement ---------- */

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });
})();
