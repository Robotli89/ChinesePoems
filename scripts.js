const featuredPoems = [
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
    const poem = featuredPoems[index];
    poemTitle.textContent = poem.title;
    poemMeta.textContent = poem.meta;
    poemOriginal.textContent = poem.original;
    poemTranslation.textContent = poem.translation;
}

poemButton?.addEventListener('click', () => {
    currentPoemIndex = (currentPoemIndex + 1) % featuredPoems.length;
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
    const randomIndex = Math.floor(Math.random() * featuredPoems.length);
    currentPoemIndex = randomIndex;
    updatePoem(randomIndex);
});

const libraryPoems = [
    {
        title: '靜夜思 · "Quiet Night Thoughts"',
        poet: 'Li Bai',
        dynasty: 'Tang',
        romanization: 'Jìng yè sī',
        collections: ['moonlit-evenings'],
        keywords: ['moon', 'homesickness', 'night', 'yuè', 'yue', 'ming yue'],
        original: '床前明月光，\n疑是地上霜。\n舉頭望明月，\n低頭思故鄉。',
        translation: 'Before my bed, the bright moonlight,\nI mistook it for frost on the ground.\nI raise my head to gaze at the moon,\nThen lower it, thinking of home.'
    },
    {
        title: '鹿柴 · "Deer Enclosure"',
        poet: 'Wang Wei',
        dynasty: 'Tang',
        romanization: 'Lù zhài',
        collections: ['brushstrokes', 'mountain-retreats'],
        keywords: ['mountain', 'silence', 'nature'],
        original: '空山不見人，\n但聞人語響。\n返景入深林，\n復照青苔上。',
        translation: 'Empty mountains—no one in sight,\nOnly the echo of voices.\nSunlight, returning, enters the deep forest\nAnd shines again on green moss.'
    },
    {
        title: '春曉 · "Spring Dawn"',
        poet: 'Meng Haoran',
        dynasty: 'Tang',
        romanization: 'Chūn xiǎo',
        collections: ['moonlit-evenings'],
        keywords: ['spring', 'dawn', 'nature'],
        original: '春眠不覺曉，\n處處聞啼鳥。\n夜來風雨聲，\n花落知多少。',
        translation: 'I slept through spring and knew not dawn,\nEverywhere I heard birds sing.\nLast night the wind and rain were strong—\nHow many blossoms fell, who knows?'
    },
    {
        title: '飲酒·其五 · "Drinking Alone · V"',
        poet: 'Tao Yuanming',
        dynasty: 'Eastern Jin',
        romanization: 'Yǐn jiǔ · qí wǔ',
        collections: ['wine-and-revelry', 'mountain-retreats'],
        keywords: ['wine', 'solitude', 'retreat'],
        original: '結廬在人境，\n而無車馬喧。\n問君何能爾？\n心遠地自偏。',
        translation: 'I built my hut within the human world,\nYet hear no clamor of carts and horses.\nYou ask how I manage this?\nThe heart withdraws, the place becomes remote.'
    },
    {
        title: '將進酒 · "Bring in the Wine"',
        poet: 'Li Bai',
        dynasty: 'Tang',
        romanization: 'Jiāng jìn jiǔ',
        collections: ['wine-and-revelry'],
        keywords: ['wine', 'celebration', 'friendship'],
        original: '君不見黃河之水天上來，\n奔流到海不復回。\n君不見高堂明鏡悲白髮，\n朝如青絲暮成雪。',
        translation: 'See how the Yellow River’s water comes from heaven,\nRushing to the sea, never to return.\nSee in the bright mirror the sadness of white hair—\nAt dawn it is like black silk, by night it has become snow.'
    }
];

const libraryRoot = document.querySelector('[data-library-root]');

if (libraryRoot) {
    const searchInput = libraryRoot.querySelector('[data-poem-search]');
    const dynastyFilters = Array.from(libraryRoot.querySelectorAll('[data-dynasty-filter]'));
    const collectionFilters = Array.from(libraryRoot.querySelectorAll('[data-collection-filter]'));
    const resultsContainer = libraryRoot.querySelector('[data-poem-results]');
    const resultsCount = libraryRoot.querySelector('[data-results-count]');

    const normalize = (value = '') =>
        value
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');

    const normalizeLineBreaks = (text = '') => text.replace(/\r\n?/g, '\n');

    const formatText = text =>
        normalizeLineBreaks(text)
            .split('\n')
            .map(line => line.trim())
            .filter(Boolean)
            .join(' ');

    const formatForDisplay = text =>
        normalizeLineBreaks(text)
            .split('\n')
            .map(line => line.trim())
            .filter(Boolean)
            .join('<br>');

    const collectionLabels = {
        'moonlit-evenings': 'Moonlit Evenings',
        'wine-and-revelry': 'Wine &amp; Revelry',
        'brushstrokes': 'Brushstrokes',
        'mountain-retreats': 'Mountain Retreats'
    };

    const renderPoem = poem => {
        const article = document.createElement('article');
        article.className = 'library-result';
        const tagsMarkup = poem.collections.length
            ? poem.collections
                  .map(collection => `<span class="library-tag">${collectionLabels[collection] ?? collection}</span>`)
                  .join('')
            : '';
        article.innerHTML = `
            <header class="library-result__header">
                <p class="library-result__meta">${poem.dynasty} · ${poem.poet}</p>
                <h3 class="library-result__title">${poem.title}</h3>
            </header>
            <p class="library-result__romanization">${poem.romanization}</p>
            <p class="library-result__original" lang="zh-Hant">${formatForDisplay(poem.original)}</p>
            <p class="library-result__translation">${formatForDisplay(poem.translation)}</p>
            <div class="library-result__tags">${tagsMarkup}</div>
        `;
        return article;
    };

    const updateCount = count => {
        if (!resultsCount) return;
        const label = count === 1 ? 'poem' : 'poems';
        resultsCount.textContent = `${count} ${label}`;
    };

    const getActiveValues = elements => elements.filter(el => el.checked).map(el => el.value);

    const poemMatchesQuery = (poem, query, dynasties, collections) => {
        const searchTarget = [
            poem.title,
            poem.poet,
            poem.dynasty,
            formatText(poem.original),
            formatText(poem.translation),
            poem.romanization,
            (poem.keywords ?? []).join(' ')
        ].join(' ');

        const matchesQuery = !query || normalize(searchTarget).includes(query);
        const matchesDynasty = dynasties.length === 0 || dynasties.includes(poem.dynasty);
        const matchesCollections = collections.length === 0 || poem.collections.some(item => collections.includes(item));

        return matchesQuery && matchesDynasty && matchesCollections;
    };

    const renderEmptyState = () => {
        const message = document.createElement('p');
        message.className = 'library-empty';
        message.innerHTML = 'No poems match your search yet. Try a different keyword or remove a filter.';
        return message;
    };

    const updateResults = () => {
        if (!resultsContainer) return;

        const query = normalize(searchInput?.value ?? '');
        const activeDynasties = getActiveValues(dynastyFilters);
        const activeCollections = getActiveValues(collectionFilters);

        const filtered = libraryPoems.filter(poem =>
            poemMatchesQuery(poem, query, activeDynasties, activeCollections)
        );

        resultsContainer.innerHTML = '';

        if (filtered.length === 0) {
            resultsContainer.appendChild(renderEmptyState());
        } else {
            const fragment = document.createDocumentFragment();
            filtered.forEach(poem => fragment.appendChild(renderPoem(poem)));
            resultsContainer.appendChild(fragment);
        }

        updateCount(filtered.length);
    };

    searchInput?.addEventListener('input', updateResults);
    dynastyFilters.forEach(filter => filter.addEventListener('change', updateResults));
    collectionFilters.forEach(filter => filter.addEventListener('change', updateResults));

    updateResults();
}
