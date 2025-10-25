const poems = [
    {
        title: '春曉 · "Spring Dawn"',
        meta: 'Meng Haoran · Tang Dynasty',
        original: '春眠不覺曉，\n處處聞啼鳥。\n夜來風雨聲，\n花落知多少。',
        translation: 'Sleeping through spring mornings, dawn slips by unknown.\nEverywhere, the cries of birds awaken the world.\nLast night the wind and rain passed through,\nHow many blossoms fell, who can tell?'
    },
    {
        title: '江雪 · "River Snow"',
        meta: 'Liu Zongyuan · Tang Dynasty',
        original: '千山鳥飛絕，\n萬徑人蹤滅。\n孤舟簑笠翁，\n獨釣寒江雪。',
        translation: 'A thousand mountains, not a bird in flight;\nTen thousand paths, not a trace of footprints.\nIn a lone boat, an old man in reed cape and bamboo hat\nFishes alone in the wintry river snow.'
    },
    {
        title: '飲酒 · "Drinking Alone"',
        meta: 'Tao Yuanming · Eastern Jin',
        original: '結廬在人境，\n而無車馬喧。\n問君何能爾？\n心遠地自偏。',
        translation: 'I built my hut within the human world,\nYet hear no clamor of the carts and horses.\nYou ask me how this quiet is possible?\nThe heart withdraws, and the place grows remote.'
    }
];

const poemButton = document.querySelector('[data-poem-button]');
const poemTitle = document.querySelector('[data-poem-title]');
const poemMeta = document.querySelector('[data-poem-meta]');
const poemOriginal = document.querySelector('[data-poem-original]');
const poemTranslation = document.querySelector('[data-poem-translation]');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const yearEl = document.getElementById('year');

let currentPoemIndex = 0;

function updatePoem(index) {
    const poem = poems[index];
    poemTitle.textContent = poem.title;
    poemMeta.textContent = poem.meta;
    poemOriginal.textContent = poem.original;
    poemTranslation.textContent = poem.translation;
}

poemButton?.addEventListener('click', () => {
    currentPoemIndex = (currentPoemIndex + 1) % poems.length;
    updatePoem(currentPoemIndex);
});

menuButton?.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', (!expanded).toString());
    nav?.classList.toggle('is-open');
});

nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && nav.classList.contains('is-open')) {
            nav.classList.remove('is-open');
            menuButton?.setAttribute('aria-expanded', 'false');
        }
    });
});

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Initialize displayed poem with random selection for variety
document.addEventListener('DOMContentLoaded', () => {
    if (!poemTitle || !poemMeta || !poemOriginal || !poemTranslation) return;
    const randomIndex = Math.floor(Math.random() * poems.length);
    currentPoemIndex = randomIndex;
    updatePoem(randomIndex);
});
