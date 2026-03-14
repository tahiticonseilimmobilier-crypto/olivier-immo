// ═══════════════════════════════════════════════════════════
// ARTICLES.JS — Olivier BLAISE · olivierimmopolynesie.com
// Pour ajouter un article :
//   1. Créer le fichier HTML dans /blog/
//   2. Ajouter un objet dans le tableau ARTICLES ci-dessous
//   3. Pusher sur GitHub → blog.html se met à jour automatiquement
// ═══════════════════════════════════════════════════════════

const ARTICLES = [

  // ── Article 1 — À LA UNE (premier = featured)
  {
    slug: "prix-terrain-tahiti-2026",
    titre: "Prix au m² des terrains à Tahiti en 2026 — Guide par commune",
    cat: "Terrains · Prix",
    date: "Mars 2026",
    lecture: "8 min",
    extrait: "Fourchettes de prix réelles commune par commune, critères de valorisation, viabilisation EDT et eau, PPR et PGA expliqués. La référence terrain pour Tahiti et Moorea.",
    tags: ["Terrains", "Prix 2026", "Tahiti", "Moorea"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imgCard: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
  },

  // ── Article 2
  {
    slug: "frais-notaire-polynesie-francaise",
    titre: "Frais de notaire en Polynésie française — Guide complet 2026",
    cat: "Achat · Notaire",
    date: "Mars 2026",
    lecture: "6 min",
    extrait: "Barèmes exacts, calcul pas à pas, différence résidence principale et investissement, spécificités PF. Tout ce qu'il faut savoir avant d'acheter à Tahiti.",
    tags: ["Notaire", "Frais", "Achat"],
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    imgCard: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
  },

  // ── Article 3
  {
    slug: "comment-vendre-bien-tahiti",
    titre: "Comment vendre son bien immobilier à Tahiti — Guide complet",
    cat: "Vendre",
    date: "Mars 2026",
    lecture: "7 min",
    extrait: "Estimation, mandat, photos, annonce, visites, négociation, compromis, notaire — le guide complet pour vendre au bon prix en Polynésie française.",
    tags: ["Vendre", "Guide", "Tahiti"],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    imgCard: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
  },

  // ── Article 4
  {
    slug: "marche-immobilier-tahiti-2026",
    titre: "Marché immobilier à Tahiti en 2026 : ce qu'il faut savoir",
    cat: "Marché",
    date: "Janvier 2026",
    lecture: "6 min",
    extrait: "Offre limitée, prix stables, demande locative soutenue — mon analyse terrain du marché polynésien pour 2026.",
    tags: ["Marché 2026", "Prix", "Investissement"],
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    imgCard: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
  },

  // ── Article 5
  {
    slug: "erreurs-vendre-tahiti",
    titre: "5 erreurs à éviter quand on vend son bien à Tahiti",
    cat: "Vendre",
    date: "Décembre 2025",
    lecture: "4 min",
    extrait: "Prix surestimé, mauvaises photos, refus du mandat exclusif... Les erreurs les plus fréquentes des vendeurs polynésiens.",
    tags: ["Vendre", "Conseils"],
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    imgCard: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80"
  },

  // ── Article 6
  {
    slug: "acheter-polynesie-metropole",
    titre: "Acheter en Polynésie française depuis la métropole : mode d'emploi",
    cat: "Acheter",
    date: "Novembre 2025",
    lecture: "5 min",
    extrait: "Visites en visio, financement, spécificités juridiques locales, délai de rétractation... Tout ce qu'il faut savoir pour acheter à distance.",
    tags: ["Acheter", "Métropole", "Guide"],
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    imgCard: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
  },

  // ══════════════════════════════════════════════════════════
  // AJOUTER UN ARTICLE ICI — copier-coller le bloc ci-dessous
  // ══════════════════════════════════════════════════════════
  //
  // {
  //   slug: "mon-nouvel-article",           // ← nom du fichier HTML sans .html
  //   titre: "Titre de l'article",
  //   cat: "Catégorie",                      // ex: "Acheter", "Vendre", "Terrains"
  //   date: "Avril 2026",
  //   lecture: "5 min",
  //   extrait: "Description courte de l'article...",
  //   tags: ["Tag1", "Tag2"],
  //   img: "https://images.unsplash.com/...",     // image hero (800px)
  //   imgCard: "https://images.unsplash.com/..."  // image carte (600px)
  // },

];
