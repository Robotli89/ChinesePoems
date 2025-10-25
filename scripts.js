const poemLibrary = [
    {
        id: 'jing-ye-si',
        titleZh: '靜夜思',
        englishTitle: 'Quiet Night Thoughts',
        poet: 'Li Bai',
        dynasty: 'Tang',
        dynastyFull: 'Tang Dynasty',
        collections: ['moonlit-evenings'],
        themes: ['Night', 'Homesickness', 'Moonlight'],
        summary: 'Li Bai reflects on moonlight and homesickness in a still night far from home.',
        originalLines: [
            '床前明月光，',
            '疑是地上霜。',
            '舉頭望明月，',
            '低頭思故鄉。'
        ],
        pinyinLines: [
            'Chuáng qián míng yuè guāng,',
            'Yí shì dì shàng shuāng.',
            'Jǔ tóu wàng míng yuè,',
            'Dī tóu sī gù xiāng.'
        ],
        translationLines: [
            'Before my bed the bright moonlight,',
            'I wonder if it is frost upon the ground.',
            'I raise my head to gaze at the bright moon,',
            'I lower it and think of home.'
        ]
    },
    {
        id: 'deer-enclosure',
        titleZh: '鹿柴',
        englishTitle: 'Deer Enclosure',
        poet: 'Wang Wei',
        dynasty: 'Tang',
        dynastyFull: 'Tang Dynasty',
        collections: ['brushstrokes', 'mountain-retreats'],
        themes: ['Nature', 'Silence', 'Landscape'],
        summary: 'Soft voices and returning light animate Wang Wei’s mist-filled mountain grove.',
        originalLines: [
            '空山不見人，',
            '但聞人語響。',
            '返景入深林，',
            '復照青苔上。'
        ],
        pinyinLines: [
            'Kōng shān bù jiàn rén,',
            'Dàn wén rén yǔ xiǎng.',
            'Fǎn jǐng rù shēn lín,',
            'Fù zhào qīng tái shàng.'
        ],
        translationLines: [
            'Empty mountains, no one to be seen,',
            'Yet I hear the echoes of human voices.',
            'Returning sunlight enters the deep forest,',
            'And shines again on the green moss.'
        ]
    },
    {
        id: 'spring-dawn',
        titleZh: '春曉',
        englishTitle: 'Spring Dawn',
        poet: 'Meng Haoran',
        dynasty: 'Tang',
        dynastyFull: 'Tang Dynasty',
        collections: ['mountain-retreats', 'brushstrokes'],
        themes: ['Spring', 'Awakening', 'Birdsong'],
        summary: 'Meng Haoran wakes to bird calls and wonders how many blossoms the night wind scattered.',
        originalLines: [
            '春眠不覺曉，',
            '處處聞啼鳥。',
            '夜來風雨聲，',
            '花落知多少。'
        ],
        pinyinLines: [
            'Chūn mián bù jué xiǎo,',
            'Chù chù wén tí niǎo.',
            'Yè lái fēng yǔ shēng,',
            'Huā luò zhī duō shǎo.'
        ],
        translationLines: [
            'Spring sleep knows not dawn has come,',
            'Everywhere the calls of birds are heard.',
            'Last night the sounds of wind and rain,',
            'Who knows how many blossoms fell?'
        ]
    },
    {
        id: 'river-snow',
        titleZh: '江雪',
        englishTitle: 'River Snow',
        poet: 'Liu Zongyuan',
        dynasty: 'Tang',
        dynastyFull: 'Tang Dynasty',
        collections: ['moonlit-evenings', 'mountain-retreats'],
        themes: ['Winter', 'Solitude', 'Landscape'],
        summary: 'An old fisherman waits alone amid silent mountains and snowy riverbanks.',
        originalLines: [
            '千山鳥飛絕，',
            '萬徑人蹤滅。',
            '孤舟蓑笠翁，',
            '獨釣寒江雪。'
        ],
        pinyinLines: [
            'Qiān shān niǎo fēi jué,',
            'Wàn jìng rén zōng miè.',
            'Gū zhōu suō lì wēng,',
            'Dú diào hán jiāng xuě.'
        ],
        translationLines: [
            'Among a thousand hills no birds in flight,',
            'On myriad paths no trace of human tracks.',
            'In a lone boat, an old man in rain cape and bamboo hat,',
            'Fishes alone in the wintry river snow.'
        ]
    },
    {
        id: 'drinking-alone',
        titleZh: '飲酒',
        englishTitle: 'Drinking in the Fields',
        poet: 'Tao Yuanming',
        dynasty: 'Eastern Jin',
        dynastyFull: 'Eastern Jin',
        collections: ['wine-and-revelry', 'mountain-retreats'],
        themes: ['Reclusion', 'Wine', 'Simplicity'],
        summary: 'Tao Yuanming finds serenity away from the crowds as he drinks beneath the eastern hedge.',
        originalLines: [
            '結廬在人境，',
            '而無車馬喧。',
            '問君何能爾？',
            '心遠地自偏。'
        ],
        pinyinLines: [
            'Jié lú zài rén jìng,',
            'Ér wú chē mǎ xuān.',
            'Wèn jūn hé néng ěr?',
            'Xīn yuǎn dì zì piān.'
        ],
        translationLines: [
            'I built my hut within the human realm,',
            'Yet hear no clamor of cart and steed.',
            'You ask me how such quiet can be?',
            'When the heart withdraws, the place grows remote.'
        ]
    },
    {
        id: 'bring-in-the-wine',
        titleZh: '將進酒',
        englishTitle: 'Bring in the Wine',
        poet: 'Li Bai',
        dynasty: 'Tang',
        dynastyFull: 'Tang Dynasty',
        collections: ['wine-and-revelry'],
        themes: ['Celebration', 'Carpe Diem', 'Wine'],
        summary: 'Li Bai urges friends to seize joy, lifting cups beneath the moon before youth fades.',
        originalLines: [
            '君不見黃河之水天上來，',
            '奔流到海不復回。',
            '君不見高堂明鏡悲白髮，',
            '朝如青絲暮成雪。',
            '人生得意須盡歡，',
            '莫使金樽空對月。',
            '天生我材必有用，',
            '千金散盡還復來。'
        ],
        pinyinLines: [
            'Jūn bú jiàn Huáng Hé zhī shuǐ tiān shàng lái,',
            'Bēn liú dào hǎi bù fù huí.',
            'Jūn bú jiàn gāo táng míng jìng bēi bái fà,',
            'Zhāo rú qīng sī mù chéng xuě.',
            'Rén shēng dé yì xū jìn huān,',
            'Mò shǐ jīn zūn kōng duì yuè.',
            'Tiān shēng wǒ cái bì yǒu yòng,',
            'Qiān jīn sàn jìn huán fù lái.'
        ],
        translationLines: [
            'Have you not seen the Yellow River’s waters from Heaven descend,',
            'Rushing to the sea, never to return?',
            'Have you not seen the bright mirror in the high hall grieving over white hair,',
            'At dawn like black silk, by dusk turned to snow?',
            'While life goes well, we must delight to the fullest,',
            'Never let the golden goblet face the moon unfilled.',
            'Heaven gave me talents that must have their purpose,',
            'Though a thousand gold coins scatter, they will come again.'
        ]
    },
    {
        id: 'viewing-waterfall',
        titleZh: '望廬山瀑布',
        englishTitle: 'Viewing the Waterfall at Mount Lu',
        poet: 'Li Bai',
        dynasty: 'Tang',
        dynastyFull: 'Tang Dynasty',
        collections: ['brushstrokes', 'mountain-retreats'],
        themes: ['Water', 'Wonder', 'Landscape'],
        summary: 'Li Bai watches the Milky Way cascade down Mount Lu in a silver stream.',
        originalLines: [
            '日照香爐生紫煙，',
            '遙看瀑布掛前川。',
            '飛流直下三千尺，',
            '疑是銀河落九天。'
        ],
        pinyinLines: [
            'Rì zhào Xiāng lú shēng zǐ yān,',
            'Yáo kàn pù bù guà qián chuān.',
            'Fēi liú zhí xià sān qiān chǐ,',
            'Yí shì Yínhé luò jiǔ tiān.'
        ],
        translationLines: [
            'Sunlight on Incense Peak breeds purple mist,',
            'From far away the waterfall hangs before the river.',
            'Its torrent plunges straight three thousand feet,',
            'As if the Milky Way were falling from the ninth heaven.'
        ]
    },
    {
        id: 'farewell-yellow-crane-tower',
        titleZh: '黃鶴樓送孟浩然之廣陵',
        englishTitle: 'Farewell at Yellow Crane Tower',
        poet: 'Li Bai',
        dynasty: 'Tang',
        dynastyFull: 'Tang Dynasty',
        collections: ['moonlit-evenings'],
        themes: ['Parting', 'Travel', 'Friendship'],
        summary: 'Li Bai watches a friend sail east in misty spring, the Yangtze stretching to the sky.',
        originalLines: [
            '故人西辭黃鶴樓，',
            '煙花三月下揚州。',
            '孤帆遠影碧空盡，',
            '唯見長江天際流。'
        ],
        pinyinLines: [
            'Gù rén xī cí Huáng Hè Lóu,',
            'Yān huā sān yuè xià Yángzhōu.',
            'Gū fān yuǎn yǐng bì kōng jìn,',
            'Wéi jiàn Cháng Jiāng tiān jì liú.'
        ],
        translationLines: [
            'An old friend bids farewell west of Yellow Crane Tower,',
            'In misty third-month blossoms he heads down to Yangzhou.',
            'His lone sail fades into the vast blue sky,',
            'Only the Yangtze flows on to the horizon.'
        ]
    }
];

const featuredRotationIds = ['deer-enclosure', 'river-snow', 'spring-dawn', 'drinking-alone'];

const selectors = {
    poemButton: document.querySelector('[data-poem-button]'),
    poemTitle: document.querySelector('[data-poem-title]'),
    poemMeta: document.querySelector('[data-poem-meta]'),
    poemOriginal: document.querySelector('[data-poem-original]'),
    poemPinyin: document.querySelector('[data-poem-pinyin]'),
    poemTranslation: document.querySelector('[data-poem-translation]'),
    heroTitle: document.querySelector('[data-hero-title]'),
    heroMeta: document.querySelector('[data-hero-meta]'),
    heroOriginal: document.querySelector('[data-hero-original]'),
    heroPinyin: document.querySelector('[data-hero-pinyin]'),
    heroTranslation: document.querySelector('[data-hero-translation]'),
    menuButton: document.querySelector('.menu-button'),
    nav: document.querySelector('.site-nav'),
    yearEl: document.getElementById('year')
};

let currentPoemIndex = 0;

function findPoemById(id) {
    return poemLibrary.find(poem => poem.id === id);
}

function formatLines(lines) {
    return lines.join('<br>');
}

function formatDisplayTitle(poem) {
    return `${poem.titleZh} · "${poem.englishTitle}"`;
}

function formatMeta(poem) {
    return `${poem.poet} · ${poem.dynastyFull}`;
}

function updatePoemById(id) {
    const poem = findPoemById(id);
    if (!poem || !selectors.poemTitle) return;

    selectors.poemTitle.textContent = formatDisplayTitle(poem);
    selectors.poemMeta.textContent = formatMeta(poem);
    selectors.poemOriginal.innerHTML = formatLines(poem.originalLines);
    if (selectors.poemPinyin) {
        selectors.poemPinyin.innerHTML = formatLines(poem.pinyinLines);
    }
    selectors.poemTranslation.innerHTML = formatLines(poem.translationLines);
}

function initializeFeaturedPoem() {
    if (!selectors.poemTitle || !selectors.poemMeta || !selectors.poemOriginal || !selectors.poemTranslation) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * featuredRotationIds.length);
    currentPoemIndex = randomIndex;
    updatePoemById(featuredRotationIds[randomIndex]);
}

function rotateFeaturedPoem() {
    currentPoemIndex = (currentPoemIndex + 1) % featuredRotationIds.length;
    updatePoemById(featuredRotationIds[currentPoemIndex]);
}

function initializeHeroPoem() {
    if (!selectors.heroTitle || !selectors.heroOriginal || !selectors.heroPinyin || !selectors.heroTranslation) {
        return;
    }

    const poem = findPoemById('jing-ye-si');
    if (!poem) return;

    selectors.heroTitle.textContent = poem.titleZh;
    if (selectors.heroMeta) {
        selectors.heroMeta.textContent = formatMeta(poem);
    }
    selectors.heroOriginal.innerHTML = formatLines(poem.originalLines);
    selectors.heroPinyin.innerHTML = formatLines(poem.pinyinLines);
    selectors.heroTranslation.innerHTML = formatLines(poem.translationLines);
}

function initializeMenu() {
    const { menuButton, nav } = selectors;
    if (!menuButton || !nav) return;

    menuButton.addEventListener('click', () => {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', (!expanded).toString());
        nav.classList.toggle('is-open');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && nav.classList.contains('is-open')) {
                nav.classList.remove('is-open');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

function updateYear() {
    if (selectors.yearEl) {
        selectors.yearEl.textContent = new Date().getFullYear();
    }
}

function normalizeText(str) {
    return str.toLowerCase().normalize('NFD').replace(/[^\p{Letter}\p{Number}\s]/gu, '');
}

function matchesQuery(poem, query) {
    if (!query) return true;
    const haystack = [
        poem.titleZh,
        poem.englishTitle,
        poem.poet,
        poem.dynasty,
        poem.dynastyFull,
        poem.summary,
        poem.originalLines.join(' '),
        poem.pinyinLines.join(' '),
        poem.translationLines.join(' '),
        poem.themes.join(' '),
        poem.collections.join(' ')
    ].join(' ');

    return normalizeText(haystack).includes(normalizeText(query));
}

function matchesFilter(poem, selectedDynasties, selectedCollections) {
    const dynastyMatch = selectedDynasties.length === 0 || selectedDynasties.includes(poem.dynasty);
    const collectionMatch = selectedCollections.length === 0 || poem.collections.some(collection => selectedCollections.includes(collection));
    return dynastyMatch && collectionMatch;
}

function renderPoemCard(poem) {
    const card = document.createElement('article');
    card.className = 'poem-list-card';
    card.innerHTML = `
        <header>
            <h3>${formatDisplayTitle(poem)}</h3>
            <p class="poem-meta">${formatMeta(poem)}</p>
        </header>
        <p class="poem-original" lang="zh-Hant">${formatLines(poem.originalLines)}</p>
        <p class="poem-pinyin" lang="zh-Latn-pinyin">${formatLines(poem.pinyinLines)}</p>
        <p class="poem-translation">${formatLines(poem.translationLines)}</p>
        <p class="poem-summary">${poem.summary}</p>
        <div class="poem-tags">
            ${poem.collections.map(collection => `<span class="poem-tag">${collectionLabel(collection)}</span>`).join('')}
        </div>
    `;
    return card;
}

function collectionLabel(id) {
    switch (id) {
        case 'moonlit-evenings':
            return 'Moonlit Evenings';
        case 'wine-and-revelry':
            return 'Wine & Revelry';
        case 'brushstrokes':
            return 'Brushstrokes';
        case 'mountain-retreats':
            return 'Mountain Retreats';
        default:
            return id;
    }
}

function initializeLibrary() {
    const libraryRoot = document.querySelector('[data-library-root]');
    if (!libraryRoot) return;

    const searchInput = libraryRoot.querySelector('[data-poem-search]');
    const dynastyFilters = Array.from(libraryRoot.querySelectorAll('[data-dynasty-filter]'));
    const collectionFilters = Array.from(libraryRoot.querySelectorAll('[data-collection-filter]'));
    const resultsContainer = libraryRoot.querySelector('[data-poem-results]');
    const resultsCount = libraryRoot.querySelector('[data-results-count]');

    function getSelected(values) {
        return values
            .filter(input => input.checked)
            .map(input => input.value);
    }

    function refresh() {
        const query = searchInput ? searchInput.value.trim() : '';
        const selectedDynasties = getSelected(dynastyFilters);
        const selectedCollections = getSelected(collectionFilters);

        const filtered = poemLibrary.filter(poem => matchesQuery(poem, query) && matchesFilter(poem, selectedDynasties, selectedCollections));

        if (resultsContainer) {
            resultsContainer.innerHTML = '';
            if (filtered.length === 0) {
                const emptyState = document.createElement('p');
                emptyState.className = 'empty-state';
                emptyState.textContent = 'No poems match your search yet. Try another keyword or adjust your filters.';
                resultsContainer.appendChild(emptyState);
            } else {
                filtered.forEach(poem => {
                    resultsContainer.appendChild(renderPoemCard(poem));
                });
            }
        }

        if (resultsCount) {
            resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'poem' : 'poems'}`;
        }
    }

    searchInput?.addEventListener('input', refresh);
    dynastyFilters.forEach(input => input.addEventListener('change', refresh));
    collectionFilters.forEach(input => input.addEventListener('change', refresh));

    refresh();
}

function initializeCollections() {
    const collectionLists = document.querySelectorAll('[data-collection-list]');
    if (collectionLists.length === 0) return;

    collectionLists.forEach(list => {
        const collectionId = list.getAttribute('data-collection-list');
        const results = poemLibrary.filter(poem => poem.collections.includes(collectionId));

        if (results.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = 'Poems for this collection are coming soon. Check back later!';
            list.appendChild(empty);
            return;
        }

        results.forEach(poem => {
            list.appendChild(renderPoemCard(poem));
        });
    });
}

function init() {
    initializeHeroPoem();
    initializeFeaturedPoem();
    selectors.poemButton?.addEventListener('click', rotateFeaturedPoem);
    initializeMenu();
    updateYear();
    initializeLibrary();
    initializeCollections();
}

document.addEventListener('DOMContentLoaded', init);
