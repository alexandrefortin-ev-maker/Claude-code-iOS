/* Domaine Familial à Dunham — interactions : i18n FR/EN, galerie, lightbox, navigation */

(function () {
  "use strict";

  /* ---------- i18n ---------- */

  const EN = {
    "brand": "Family Estate",
    "nav.domaine": "The Estate",
    "nav.phare": "Le Phare",
    "nav.chalet": "Le Chalet",
    "nav.territoire": "The Land",
    "nav.galerie": "Gallery",
    "nav.contact": "Contact",

    "hero.kicker": "Eastern Townships · Québec",
    "hero.title": "A Family Estate in Dunham",
    "hero.addr": "Precise location shared upon appointment",
    "hero.sub": "151.85 acres · Private lake · 2022 signature residence",

    "dom.eyebrow": "A world of its own",
    "dom.title": "The Estate",
    "dom.p1": "In the heart of the Eastern Townships, alongside the wine route and less than ninety minutes from Montréal, the estate unfolds across 151.85 acres (614,515 m²) of patiently shaped nature: a private lake with two docks, a lavender field born of a formerly certified-organic production, a generous orchard — plum, pear, apple and cherry trees, blueberries, haskaps, sea buckthorn —, three oxygenated ponds linked by streams and waterfalls, and a forest under a complete management plan. The whole is ringed by several kilometres of game fencing and laced with trails.",
    "dom.p2": "Twelve buildings answer one another here, from the ultra-luxury contemporary residence built in 2022 to the 1880 heritage farmhouse, by way of a complete hamlet of outbuildings. Conceived as a multigenerational life project, the estate offers several independent dwellings and total self-sufficiency: geothermal energy, four automatic-start generators, a 600-ampere electrical service, underground power across the entire property, fibre optics in every habitable building, artesian wells with filtration and full home automation. A private paved drive (2022) leads from the road to the residence; pickleball and pétanque courts, a fenced kitchen garden, a Bali islet and an outdoor kitchen complete the art of living. The turnkey sale includes the estate's machinery — golf carts, restored tractor, electric snowmobile and watercraft, right down to the lake's electric pontoon.",

    "stats.acres": "acres of fenced land",
    "stats.batiments": "principal and secondary buildings",
    "stats.pi2": "sq. ft. of living space — main residence",
    "stats.lac": "private lake, two docks, electric pontoon",

    "phare.eyebrow": "The main residence · 2022",
    "phare.title": "Le Phare",
    "phare.imp1": "There are houses set down on land, and houses composed with it. Le Phare belongs to the second family. Its site was chosen the way one chooses a viewpoint: the rear façade faces the private lake, the lavender rows descend to its left toward the water, the forest closes the horizon, and no neighbour exists anywhere in the picture. The private paved drive (2022, sealed in 2024) leads there from the road across the estate, lined with LED bollard lighting and served by buried irrigation — even the arrival was designed.",
    "phare.imp2": "The house changes roles with the hour. In the morning, the curtain wall catches the sunrise over the lake; in the afternoon, the terraces take over; and come evening, the house lights up from within and reflects in the water — the very spectacle that gave it its name: the lighthouse.",
    "phare.arch.t": "The architecture",
    "phare.arch.p1": "The clean-lined architecture revisits the Eastern Townships farmhouse with contemporary rigour. The cladding is Eastern white cedar shingle (Maibec), laid piece by piece; matching wood soffits carry the material's warmth up under the MacMetal steel roof.",
    "phare.arch.p2": "And then there is the rear façade — the house's signature gesture: a full-width Alumilex curtain wall that abolishes the boundary between the 8,194 sq. ft. of living space and the landscape. From the living room, the kitchen, the dining room, the eye travels unobstructed to the lake, the lavender rows and the hills.",
    "phare.rdc.t": "The main floor",
    "phare.rdc.p1": "You enter beneath a 12-foot ceiling, greeted by a 676-pound hand-blown Restoration Hardware chandelier — the first of a collection of artisanal light fixtures that punctuates the whole house. The living area then unfolds in a single movement: living room, kitchen and dining room under 16-to-17-foot cathedral ceilings lined in knot-free clear poplar, whose soft tone warms the curtain wall's light at every hour.",
    "phare.rdc.p2": "The kitchen is professional equipment in a cabinetmaker's setting: Sub-Zero appliances — two refrigerators and a freezer —, induction cooktop, steam oven, pot filler above the range, all set into Dekton counters and custom millwork by a Napierville cabinetmaker whose work runs throughout the residence.",
    "phare.suite.t": "The primary suite and bedrooms",
    "phare.suite.p1": "Around the living area, the circulations received the same care as the showpiece rooms: Kadrium aluminum interior doors, a great pocket door that erases the boundary between two spaces at will, and radiant heated ceramic floors wall to wall — not one cold room, not one threshold, not one step too many.",
    "phare.suite.p2": "The primary suite occupies its own universe: a private gas fireplace for winter evenings, a walk-in accessed directly from the bathroom, a full-height double shower, a clawfoot tub set facing the light and a separate toilet. Three further bedrooms, each served by the same quality of execution and its built-in furniture, bring the house to four bedrooms and seven bathrooms: no one ever waits, even with the house full.",
    "phare.bienetre.t": "The wellness wing",
    "phare.bienetre.p1": "This is where Le Phare stops being a house and becomes a private resort. The indoor pool stretches beneath a yellow-cedar ceiling whose scent perfumes the air; a glazed footbridge links it to the gym, so you pass from workout to swim without ever leaving the light. The quartz-heated cedar sauna completes the circuit.",
    "phare.bienetre.p2": "Outside, the sequence continues: a concrete infinity pool whose waterfall sings above the lake, ringed by heated slabs that stretch the season well past summer; a spa turned toward the hills; a full outdoor kitchen for the evenings when the dining room is simply outdoors. In all, 3,363 sq. ft. of terraces face the water.",
    "phare.loft.t": "The garages, the loft and the basement",
    "phare.loft.p1": "Two integrated double garages — four cars sheltered and heated — are topped by a fully finished loft: engineered flooring, a full bathroom and a freight lift to bring up luggage or equipment effortlessly. Office, studio, extra guest quarters: the space lends itself to anything. Beneath the house, a 5,330 sq. ft. basement notably houses the private gym.",
    "phare.tech.t": "The technology, invisible and total",
    "phare.tech.p1": "All this comfort rests on an infrastructure designed for absolute self-sufficiency. Heating is geothermal: five independent systems on five wells (LeProhon installation, CCEG-certified), delivered through radiant ceramic floors throughout, with room-by-room zoning and propane backup. The 600-ampere service is doubled by automatic-start generators — one of which covers the entire residence: the storm can pass, the house won't notice.",
    "phare.tech.p2": "Three 220 V charging stations await electric vehicles. Home automation orchestrates lighting, blinds, recessed curtains, motorized screens and cameras — every scene of the house set at a fingertip, on site or remotely. Fibre optics serves the house as it does every habitable building on the estate: you telework here as comfortably as downtown. Air is renewed by six to seven exchangers; the artesian well water passes through softener and filtration; add the central vacuum, the cold room and the cedar closet — a thousand details you never see and which, together, mean that at Le Phare everything works, all the time, without a thought.",
    "phare.neuf.t": "A recent build, a lasting peace of mind",
    "phare.neuf.p1": "To buy Le Phare is to buy new without the compromises of new: the house is three years old, its GCR warranty runs through 2027, its systems are documented, its certificates of location are current, and the builder and installers are identified on file. In a market where exceptional properties are often only as young as their renovations, Le Phare offers what cannot be renovated: a coherent original design, from the first drawing to the last switch.",

    "chalet.eyebrow": "The heritage residence · circa 1880",
    "chalet.title": "Le Chalet",
    "chalet.h1": "The estate's historic heart, Le Chalet has watched over this land for nearly a century and a half. Built around 1880, it is one of those houses that have seen generations pass and wear their age like elegance. Two major campaigns of work brought it into the present without stealing its soul: a complete renovation in 2007-2009, then major works in 2020-2021. The Maibec cladding was repainted in 2022, the roof redone in 2024 — the house is as sound as it is beautiful.",
    "chalet.h2": "Its name is written in wrought-iron letters on the façade, in the manner of family houses that are christened because everyone knows they will remain. Before Le Phare was built, this was the house that received; it is within these walls that the estate's project was born, and it shows: everything here was made to last and to welcome.",
    "chalet.hameau.t": "Its own hamlet",
    "chalet.hameau.p1": "Le Chalet occupies its own sector of the estate, at a good distance from the main residence — close enough to share the estate, far enough to live its own life. Around it gravitate the 1880 Grange and La Shed, with which it shares an artesian well drilled in 2020: a hamlet within the hamlet, able to function in complete autonomy. Long-stay guests, parents, grown children: each can live here fully without ever crossing Le Phare's routine.",
    "chalet.arrivee.t": "The arrival",
    "chalet.arrivee.p1": "You arrive by a tree-lined lane, pass the aluminum gate, and are welcomed by the 51-foot covered porch that runs along the façade beneath its metal roof — the perfect observation post over the gardens, from morning coffee to the summer storm you watch fall while staying dry. A mudroom, added during the 2020-2021 works, handles the transition between outside and in, as a true country house should.",
    "chalet.int.t": "The interior",
    "chalet.int.p1": "Inside, it is the atmosphere that strikes first. Original exposed beams cross open rooms crowned by a cathedral ceiling in the living room; wood is everywhere, time-patinated where it should be, new where it had to be. The slow-burning wood fireplace anchors the living space — the kind you load at night and that holds until morning. Double-hung windows rhythm the walls and flood the house with a light new houses envy old ones.",
    "chalet.int.p2": "The kitchen, fully renovated in 2021, holds the balance between heritage and performance: a 13-foot granite island extended by a black-cherry counter, around which the whole household can cook, eat and talk at once. It is an entertaining kitchen in a farmhouse setting — exactly what one asks of it.",
    "chalet.etage.t": "Upstairs",
    "chalet.etage.p1": "Upstairs are three bedrooms, including the primary bedroom with its adjoining powder room. The full bathroom, with slate shower, serves the two other bedrooms; a powder room on the main floor completes the ensemble, and the house also has a wine cellar.",
    "chalet.ext.t": "Outdoors",
    "chalet.ext.p1": "Behind the house, a paver terrace (2021-2022) steps down to the heated salt-water pool (2021), sheltered by a retractable awning. A few steps more and you reach the lake: the pool pavilion, built in 2010 and renovated in 2024-2025, awaits the summer afternoons with its summer kitchen, powder room, terrazzo floor and aluminum glass doors — the reception annex every swim dreams of.",
    "chalet.auto.t": "A self-sufficient house, too",
    "chalet.auto.p1": "Le Chalet depends on no one: heat-pump heating with propane backup (2021) doubled by a central heat pump, the wood fireplace in reserve, urethane insulation, a 2020 artesian well with softener, 200-ampere service and an automatic generator. Fibre optics reaches here as it does everywhere on the estate. Let a storm cut the countryside off for three days: Le Chalet heats, lights, cooks and works without interruption.",
    "chalet.vie.t": "The art of living at Le Chalet",
    "chalet.vie.p1": "Day to day, Le Chalet is a lesson in rhythm. In summer, the day begins on the porch and ends in the salt-water pool, with the lake pavilion as the children's base camp; the fenced kitchen garden and the henhouse are steps away, and the orchard supplies dessert. In autumn, the fireplace returns to duty and the porch becomes a box seat before the forest turning red. In winter, the house draws in around the crackling wood — and since the estate's trails start at the door, the snowshoes are never far. In short: the consummate guest house, a character-filled pied-à-terre while the main residence entertains — or the heritage chapter of a multigenerational project where every generation has its own roof.",

    "shed.eyebrow": "The guest loft · 2021",
    "shed.title": "La Shed",
    "shed.p1": "Built in 2021, La Shed is the estate's all-comfort guest loft: 1,560 sq. ft. beneath a 12-foot ceiling, epoxy-finished concrete slab, white-pine interior and a steel-and-maple staircase. The main floor gathers a fully equipped service kitchen, a three-quarter bathroom and a gas fireplace; upstairs, a two-bed bunk room.",
    "shed.p2": "A large covered, heated terrace — two quartz patio heaters — extends the living space in every season. Heated and cooled by heat pump, served by its own automatic generator, La Shed lodges family and guests in perfect independence.",

    "grange.eyebrow": "Heritage · 1880",
    "grange.title": "La Grange",
    "grange.p1": "A heritage building of 1880, extended in 2009 then deeply renovated in 2020-2021, La Grange — over 2,600 sq. ft. at grade — now rests on a poured-concrete foundation, under a steel roof, with hemlock frame and cladding. The original section keeps its 1880 beams and opens into a 17-foot cathedral space, generously glazed, with a great glass garage door and integrated pedestrian door: here are a full kitchen, a bathroom with shower and a maple staircase.",
    "grange.p2": "The bunk section, finished in 2021, offers cherry-plywood finishes, a powder room and converted attic space. Automatic generator, dedicated septic system, UV water treatment: the barn joins agricultural memory to contemporary function — entertaining, storage or workshop, as you please.",

    "annexes.eyebrow": "A complete hamlet",
    "annexes.title": "The Other Buildings",
    "annexes.p1": "Around these four principal pieces gravitates a complete hamlet, each building with its own calling — room for the passions, the harvests and the machinery of an estate that provides for itself.",
    "annexes.pavillon.t": "The Pool Pavilion",
    "annexes.pavillon.d": "At the water's edge: summer kitchen and powder room over a terrazzo floor — the reception spot for swimming afternoons.",
    "annexes.atelier.t": "The Workshop",
    "annexes.atelier.d": "About 1,800 sq. ft., insulated and heated to residential standards under a 12-foot ceiling: workshop, studio or playroom.",
    "annexes.serre.t": "The Greenhouse",
    "annexes.serre.d": "70 feet of horticultural production, extensively renovated in 2025, with its own well, irrigation, epoxy slab and motorized door.",
    "annexes.shop.t": "The Shop",
    "annexes.shop.d": "An insulated 408 sq. ft. storage workshop, Proslat system and motorized garage door.",
    "annexes.garage.t": "The Garage",
    "annexes.garage.d": "The estate's newest build: four cars on radiant-heated ceramic, insulated epoxy slab, four motorized doors.",
    "annexes.dome.t": "The Archidome",
    "annexes.dome.d": "An 1,800 sq. ft. steel dome with a 16-foot ceiling, connected to a generator: high-capacity storage.",
    "annexes.poulailler.t": "The Henhouse",
    "annexes.poulailler.d": "Insulated and heated, four nesting boxes and a screened aviary — fresh eggs every morning.",
    "annexes.scierie.t": "The Sawmill",
    "annexes.scierie.d": "The wood-and-materials shed, memory of the estate's agricultural origins.",
    "annexes.outro": "Twelve buildings, one estate — and a rare capacity to welcome, in the service of a life project made to be passed on.",

    "terre.eyebrow": "614,515 m² shaped with care",
    "terre.title": "The Land",
    "terre.p1": "In June, lavender blooms across the formerly certified-organic plantation. The forest, under a complete management plan, opens onto kilometres of fenced trails — and the lake waits, with its two docks and electric pontoon.",
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
    "galerie.p1": "One hundred and five images, in the order of a visit: the land, Le Phare, Le Chalet, La Shed, La Grange, the gardens and the lake.",

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

    "contact.eyebrow": "Private showings by appointment",
    "contact.title": "Experience the Estate",
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
      ? "A Family Estate in Dunham — Eastern Townships | Engel & Völkers"
      : "Domaine Familial à Dunham — Cantons-de-l'Est | Engel & Völkers";
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

  /* ---------- Galerie : 105 photos dans l'ordre de la visite ---------- */

  var TOTAL = 105;
  function fileId(n) { return "g" + String(n).padStart(3, "0"); }

  var gallery = document.getElementById("gallery");
  var frag = document.createDocumentFragment();
  for (var i = 1; i <= TOTAL; i++) {
    (function (n) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "Photo " + n);
      var img = document.createElement("img");
      img.src = "assets/img/" + fileId(n) + "-thumb.jpg";
      img.alt = "Domaine — photo " + n + " de " + TOTAL;
      img.loading = "lazy";
      btn.appendChild(img);
      btn.addEventListener("click", function () { openLightbox(n - 1); });
      frag.appendChild(btn);
    })(i);
  }
  gallery.appendChild(frag);

  /* ---------- Lightbox ---------- */

  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCount = document.getElementById("lbCount");
  var current = 0;

  function show(idx) {
    current = (idx + TOTAL) % TOTAL;
    lbImg.src = "assets/img/" + fileId(current + 1) + "-large.jpg";
    lbImg.alt = "Domaine — photo " + (current + 1) + " de " + TOTAL;
    lbCount.textContent = (current + 1) + " / " + TOTAL;
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
