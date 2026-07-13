/* ══════════════════════════════════════════
   GARDEL SA – Livret d'Intégration
   script.js
   ══════════════════════════════════════════ */

'use strict';

/* ── Données : Étapes de fabrication ── */
const STEPS = [
  {
    num: 1,
    title: "Réception & Mesure",
    subtitle: "Contrôle saccharimétrique",
    short: "Contrôle de la teneur en saccharose avant déchargement.",
    content: `
      <p>Les cannes doivent être traitées rapidement : dès leur coupe, les sucres qu'elles contiennent commencent à se dégrader.</p>
      <p><strong>Avant le déchargement</strong>, un organisme indépendant, le <strong>Centre Technique de la Canne et du Sucre (CTCS)</strong>, contrôle la teneur en saccharose de la matière première livrée.</p>
      <p>Une fois réceptionnée, <strong>la canne est entreposée dans la cour et traitée dans les 12 heures</strong> pour préserver toute sa richesse en sucre.</p>
    `
  },
  {
    num: 2,
    title: "Broyage",
    subtitle: "Extraction du jus de canne",
    short: "Les cannes sont déchiquetées puis broyées dans cinq moulins.",
    content: `
      <p>Notre usine peut traiter <strong>jusqu'à 4 500 tonnes de cannes par jour</strong>. Les cannes sont d'abord déchiquetées, puis broyées en passant à travers <strong>cinq moulins successifs</strong>.</p>
      <p>L'enjeu est d'extraire la quasi-totalité du sucre contenu dans la canne.</p>
      <p>C'est à l'issue de cette étape que la <strong>bagasse est intégralement envoyée à la centrale voisine ALBIOMA</strong>, pour être brûlée et transformée en énergie électrique et vapeur.</p>
    `
  },
  {
    num: 3,
    title: "Épuration des jus",
    subtitle: "Décantation et filtration",
    short: "Le jus est nettoyé des matières organiques résiduelles.",
    content: `
      <p>Par décantation puis filtration, les jus sont nettoyés de la matière organique résiduelle.</p>
      <p><strong>Les écumes</strong> sont utilisées pour constituer un compost qui sera ensuite utilisé comme <strong>amendement dans les champs de cannes</strong>, contribuant à l'économie circulaire du site.</p>
      <p>Cette étape garantit la pureté du jus qui partira en évaporation.</p>
    `
  },
  {
    num: 4,
    title: "Évaporation",
    subtitle: "Concentration du jus en sirop",
    short: "Le jus est concentré en sirop grâce à cinq évaporateurs.",
    content: `
      <p>Avec la <strong>vapeur provenant d'ALBIOMA</strong>, le jus est chauffé dans des évaporateurs et se concentre pour devenir un sirop.</p>
      <p>GARDEL dispose de <strong>cinq évaporateurs successifs</strong>, économes en énergie, permettant de concentrer progressivement le sucre dans le sirop.</p>
      <p>Ce système à effets multiples réutilise la vapeur de chaque étape dans la suivante, optimisant la consommation énergétique.</p>
    `
  },
  {
    num: 5,
    title: "Cristallisation",
    subtitle: "Formation des cristaux de sucre",
    short: "Le grain grossit par cuites successives autour de germes de sucre.",
    content: `
      <p>C'est <strong>l'étape cruciale</strong> autour de laquelle les opérateurs vont faire grossir le grain par cuite successive jusqu'à la taille voulue.</p>
      <p>Pour générer la cristallisation, la première étape consiste à <strong>ensemencer le sirop avec de la poussière de sucre</strong>, autour de laquelle le cristal va se former.</p>
      <p>GARDEL dispose de nombreuses cuites, certaines fonctionnant en <strong>continu</strong>, d'autres en <strong>discontinu</strong>, en fonction du produit recherché. Cette étape repose sur un savoir-faire pointu et prend de <strong>6 à 12 heures</strong>.</p>
      <p>Le résultat est une masse cuite cristallisée : de petits cristaux flottant dans un sirop coloré.</p>
    `
  },
  {
    num: 6,
    title: "Centrifugation",
    subtitle: "Séparation grain / sirop",
    short: "La force centrifuge sépare les cristaux du sirop résiduel.",
    content: `
      <p>La masse cuite cristallisée est versée en continu dans des <strong>turbines qui, par la force centrifuge, séparent le grain du sirop</strong>.</p>
      <p>C'est lors de la dernière étape de la centrifugation qu'un fameux co-produit est généré : <strong>la mélasse</strong>.</p>
      <ul>
        <li>La mélasse est vendue à la <strong>distillerie Bonne-Mère</strong> à Sainte-Rose pour la production de rhum DBM</li>
        <li>Une partie est utilisée pour fabriquer le <strong>rhum</strong> de GARDEL</li>
        <li>GARDEL est ainsi le <strong>2ème producteur</strong> et <strong>3ème exportateur de rhum</strong> de la Guadeloupe</li>
      </ul>
    `
  },
  {
    num: 7,
    title: "Séchage",
    subtitle: "Réduction de l'humidité",
    short: "Le sucre est brassé avec de l'air sec pour garantir sa conservation.",
    content: `
      <p>Dans de <strong>grands sécheurs cylindriques</strong>, le sucre est brassé avec de l'air sec afin de réduire son humidité.</p>
      <p>Le sucre doit être <strong>parfaitement sec</strong> pour garantir sa bonne conservation et éviter tout risque de moisissure ou d'agglomération pendant le stockage.</p>
      <p>Les paramètres de séchage (température, durée, débit d'air) sont ajustés selon la granulométrie et le type de sucre produit.</p>
    `
  },
  {
    num: 8,
    title: "Conditionnement",
    subtitle: "Du cristal à la table",
    short: "Stockage vrac, big-bags, sacs 25 kg ou sachets consommateurs.",
    content: `
      <p>Les sucres bruts destinés à être <strong>raffinés en Europe</strong> sont stockés en vrac dans notre <strong>silo à Jarry</strong>, à proximité du port pour faciliter l'expédition.</p>
      <p>Les <strong>sucres de consommation directe</strong> (sucres spéciaux), principale fabrication de GARDEL, sont conditionnés en big-bags hermétiques d'une tonne, surtout à destination de nos clients industries agroalimentaires.</p>
      <ul>
        <li>Gros conditionnement : Expédition dans les <strong>Antilles et en Europe</strong> en big-bags ou sacs de 25 kg</li>
        <li>Petit conditionnement : Sachets <strong>500 g à 2 kg</strong> et Buchettes de <strong>5 g</strong> pour la grande distribution</li>
      </ul>
    `
  }
];


/* ── Données : Sites  ── */
const SITES = {
  moule:       { name: 'Usine du Moule',          loc: 'Siège social · Grande-Terre', img: 'img/moule.jpg' },
  beron:       { name: 'Centre de transfert Béron', loc: 'Sainte-Rose · Basse-Terre',  img: 'img/beron.jpg' },
  jarry:       { name: 'Silo de Jarry',            loc: 'Baie-Mahault · Port',         img: 'img/jarry.jpg' },
  montplaisir: { name: 'Montplaisir',              loc: 'Le Moule · Annexe',           img: 'img/montplaisir.jpg' }
};


/* ── État courant de la modal ── */
let currentModalIdx = 0;

/* ══════════════════════════════════════
   Initialisation
   ══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderStepCards();
  initTabs();
  initReveal();
  initNavHighlight();
  initProgress();
  initKeyboard();
});

/* ══════════════════════════════════════
   Cards — Fabrication
   ══════════════════════════════════════ */
function renderStepCards() {
  const grid = document.getElementById('steps-grid');
  if (!grid) return;

  const icons = [
    // 1 – Réception
    `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.4">
      <rect x="5" y="20" width="36" height="20" rx="1"/>
      <path d="M2 22 L23 8 L44 22"/>
      <rect x="17" y="28" width="12" height="12"/>
      <line x1="13" y1="28" x2="13" y2="40"/>
      <line x1="33" y1="28" x2="33" y2="40"/>
    </svg>`,
    // 2 – Broyage
    `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.4">
      <circle cx="16" cy="23" r="11"/>
      <circle cx="30" cy="23" r="11"/>
      <line x1="5" y1="17" x2="5" y2="29"/>
      <line x1="41" y1="17" x2="41" y2="29"/>
    </svg>`,
    // 3 – Épuration
    `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.4">
      <path d="M23 6 C23 6 10 22 10 30 A13 13 0 0 0 36 30 C36 22 23 6 23 6"/>
      <path d="M16 28 C18 24 20 22 23 22"/>
    </svg>`,
    // 4 – Évaporation
    `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.4">
      <path d="M14 36 Q14 28 18 24 Q22 20 22 12"/>
      <path d="M23 36 Q23 28 27 24 Q31 20 31 12"/>
      <path d="M32 36 Q32 28 36 24 Q40 20 40 12"/>
      <rect x="6" y="36" width="34" height="6" rx="1"/>
    </svg>`,
    // 5 – Cristallisation
    `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.4">
      <polygon points="23,5 36,19 36,33 23,42 10,33 10,19"/>
      <polygon points="23,14 31,22 31,30 23,37 15,30 15,22" opacity="0.45"/>
      <circle cx="23" cy="23" r="3.5"/>
    </svg>`,
    // 6 – Centrifugation
    `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.4">
      <circle cx="23" cy="23" r="18"/>
      <circle cx="23" cy="23" r="9"/>
      <line x1="23" y1="5" x2="23" y2="14"/>
      <line x1="23" y1="32" x2="23" y2="41"/>
      <line x1="5" y1="23" x2="14" y2="23"/>
      <line x1="32" y1="23" x2="41" y2="23"/>
    </svg>`,
    // 7 – Séchage
    `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.4">
      <circle cx="23" cy="23" r="4"/>
      <path d="M23 19 C23 19 20 10 14 10 C10 10 10 16 14 18 C18 20 23 19 23 19"/>
      <path d="M27 23 C27 23 36 20 36 14 C36 10 30 10 28 14 C26 18 27 23 27 23"/>
      <path d="M23 27 C23 27 26 36 32 36 C36 36 36 30 32 28 C28 26 23 27 23 27"/>
      <path d="M19 23 C19 23 10 26 10 32 C10 36 16 36 18 32 C20 28 19 23 19 23"/>
    </svg>`,
    // 8 – Conditionnement
    `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1.4">
      <rect x="10" y="18" width="26" height="22" rx="1"/>
      <path d="M10 24 h26"/>
      <path d="M18 18 L18 12 L28 12 L28 18"/>
      <rect x="17" y="28" width="12" height="8" rx="1"/>
      <path d="M20 32 h6"/>
    </svg>`,
  ];

  grid.innerHTML = STEPS.map((s, i) => `
    <div class="step-card" onclick="openModal(${i})" role="button" tabindex="0" aria-label="Ouvrir l'étape ${s.num} : ${s.title}">
      <div class="step-num">${s.num}</div>
      <div class="step-icon">${icons[i]}</div>
      <div class="step-title">${s.title}</div>
      <div class="step-short">${s.short}</div>
      <div class="step-cta">Détails <span aria-hidden="true">→</span></div>
    </div>
  `).join('');

  // Accessibilité clavier pour les cards
  grid.querySelectorAll('.step-card').forEach((card, i) => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(i); }
    });
  });
}

/* ══════════════════════════════════════
   Modal — Fabrication
   ══════════════════════════════════════ */
function openModal(idx) {
  currentModalIdx = idx;
  refreshModal();
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close-btn').focus();
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function navigateModal(dir) {
  const next = currentModalIdx + dir;
  if (next >= 0 && next < STEPS.length) {
    currentModalIdx = next;
    refreshModal();
  }
}

function refreshModal() {
  const s = STEPS[currentModalIdx];
  document.getElementById('modal-badge-num').textContent = s.num;
  document.getElementById('modal-head-title').textContent = s.title;
  document.getElementById('modal-head-sub').textContent = s.subtitle;
  document.getElementById('modal-content').innerHTML = s.content;
  document.getElementById('modal-step-counter').textContent = `Étape ${currentModalIdx + 1} / ${STEPS.length}`;

  const prevBtn = document.getElementById('modal-prev');
  const nextBtn = document.getElementById('modal-next');
  prevBtn.disabled = currentModalIdx === 0;
  nextBtn.disabled = currentModalIdx === STEPS.length - 1;

  // Reset scroll
  document.querySelector('.modal').scrollTop = 0;
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

/* ══════════════════════════════════════
   Tabs — RH
   ══════════════════════════════════════ */
function initTabs() {
  const tabs = document.querySelectorAll('.rh-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.rh-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('panel-' + target)?.classList.add('active');
    });
  });
}

/* ══════════════════════════════════════
   Scroll Reveal
   ══════════════════════════════════════ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.08 }
  );
  els.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════
   Nav — Highlight section active
   ══════════════════════════════════════ */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const link = document.querySelector(`nav a[href="#${e.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    },
    { threshold: 0.35 }
  );
  sections.forEach(s => observer.observe(s));
}
/* ══════════════════════════════════════
   Progression 
   ══════════════════════════ */
function initProgress() {
  const SECTIONS = ['hero', 'histoire', 'sites', 'productions', 'fabrication', 'engagements', 'engagement', 'securite', 'rh', 'poles'];
  const TOTAL = SECTIONS.length;
  const pctEl = document.querySelector('.progress-pill .pct');
  const pill  = document.querySelector('.progress-pill');
  if (!pctEl) return;

  function updateProgress() {
    let currentIdx = 0;
    SECTIONS.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (el.getBoundingClientRect().top <= window.innerHeight * 0.55) currentIdx = i;
    });

    const station = currentIdx + 1;
    pctEl.textContent = Math.round((station / TOTAL) * 100) + '%';
    pctEl.style.background = station === TOTAL ? '#4a9462' : '';

    let sub = pill.querySelector('.prog-sub');
    if (!sub) {
      sub = document.createElement('span');
      sub.className = 'prog-sub';
      Object.assign(sub.style, { display: 'block', fontSize: '0.65rem', opacity: '0.75' });
      pill.querySelector('.pct-label').appendChild(sub);
    }
    sub.textContent = `Station ${station} sur ${TOTAL}`;
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { updateProgress(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  updateProgress();
}
/* ══════════════════════════════════════
   Keyboard — Modal
   ══════════════════════════════════════ */
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (!document.getElementById('modal-overlay').classList.contains('open')) return;
    if (e.key === 'Escape')     closeModal();
    if (e.key === 'ArrowRight') navigateModal(1);
    if (e.key === 'ArrowLeft')  navigateModal(-1);
  });
}
/* ══════════════════════════════════════
   Sites — Modal
   ══════════════════════════════════════ */

function openSite(id) {
  const s = SITES[id];
  document.getElementById('site-img').src = s.img;
  document.getElementById('site-img').alt = s.name;
  document.getElementById('site-modal-name').textContent = s.name;
  document.getElementById('site-modal-loc').textContent = s.loc;
  document.getElementById('site-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSite() {
  document.getElementById('site-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════
   Expose fonctions globales pour HTML inline
   ══════════════════════════════════════ */
window.openModal       = openModal;
window.closeModal      = closeModal;
window.navigateModal   = navigateModal;
window.handleOverlayClick = handleOverlayClick;
window.openSite  = openSite;
window.closeSite = closeSite;
