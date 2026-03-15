// ═══════════════════════════════════════════════════════════
// NAV.JS — Olivier BLAISE · olivierimmopolynesie.com
// Navigation partagée — chargée par toutes les pages
// Pour modifier le menu : modifier ce fichier uniquement
// ═══════════════════════════════════════════════════════════

(function() {
  // ── Liens de navigation
  const NAV_LINKS = [
    { href: '/',                    label: 'Estimation' },
    { href: '/vendre',              label: 'Vendre' },
    { href: '/louer',               label: 'Louer' },
    { href: '/acheter',             label: 'Acheter' },
    { href: '/calculateur',         label: 'Calculateur' },
    { href: '/prix-communes',         label: 'Prix & marché' },
    { href: '/blog',                label: 'Blog' },
    { href: '/a-propos',            label: 'À propos' },
  ];

  // ── Détecter la page active
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  function isActive(href) {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }

  // ── Générer les liens
  const linksHTML = NAV_LINKS.map(link => `
    <a href="${link.href}" class="${isActive(link.href) ? 'active' : ''}">${link.label}</a>
  `).join('');

  const mobileLinksHTML = NAV_LINKS.map(link => `
    <a href="${link.href}" class="${isActive(link.href) ? 'active' : ''}">${link.label}</a>
  `).join('');

  // ── HTML complet du header
  const headerHTML = `
    <header id="site-header">
      <a href="/" class="h-logo">
        <span class="h-logo-txt">Cabinet <em>LEVY</em> — Olivier Blaise</span>
      </a>
      <nav class="h-nav">${linksHTML}</nav>
      <a href="/" class="h-cta">Estimation gratuite</a>
      <button class="burger" id="burger" aria-label="Menu" onclick="document.getElementById('mobile-nav').classList.toggle('open')">
        <span></span><span></span><span></span>
      </button>
    </header>
    <nav class="mobile-nav" id="mobile-nav">${mobileLinksHTML}</nav>
  `;

  // ── Styles du header (injectés une seule fois)
  const headerCSS = `
    <style id="nav-styles">
      #site-header{position:fixed;top:0;left:0;right:0;z-index:100;background:#0f1117;height:60px;padding:0 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.07)}
      .h-logo{display:flex;align-items:center;gap:10px;text-decoration:none}
      .h-logo-txt{font-family:'Libre Baskerville',serif;color:white;font-size:.82rem;font-weight:700;letter-spacing:.04em}
      .h-logo-txt em{color:#c0533a;font-style:normal}
      .h-nav{display:flex;align-items:center;gap:22px}
      .h-nav a{color:rgba(255,255,255,.45);font-size:.8rem;text-decoration:none;transition:color .2s}
      .h-nav a:hover,.h-nav a.active{color:white}
      .h-cta{background:#c0533a;color:white;font-size:.8rem;font-weight:700;padding:9px 20px;border-radius:7px;text-decoration:none;transition:background .2s;white-space:nowrap}
      .h-cta:hover{background:#a8432c}
      .burger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
      .burger span{width:22px;height:2px;background:white;border-radius:2px}
      .mobile-nav{display:none;flex-direction:column;position:fixed;top:60px;left:0;right:0;background:#0f1117;z-index:99;border-bottom:1px solid rgba(255,255,255,.08)}
      .mobile-nav.open{display:flex}
      .mobile-nav a{color:rgba(255,255,255,.55);font-size:.88rem;padding:14px 32px;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.05);transition:color .2s}
      .mobile-nav a:hover,.mobile-nav a.active{color:white}
      body{padding-top:60px}
      @media(max-width:900px){.burger{display:flex}.h-nav,.h-cta{display:none}}
    </style>
  `;

  // ── Injection dans le DOM
  const container = document.getElementById('nav-container');
  if (container) {
    // Si un div#nav-container existe → on injecte dedans
    document.head.insertAdjacentHTML('beforeend', headerCSS);
    container.innerHTML = headerHTML;
  } else {
    // Sinon → on injecte au début du body
    document.head.insertAdjacentHTML('beforeend', headerCSS);
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }
})();
