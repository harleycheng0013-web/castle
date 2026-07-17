export type CultureLocale = 'zh' | 'en';

export type CultureChamber = {
  slug: string;
  number: string;
  tone: string;
  productIds: string[];
  zh: {
    doorTitle: string;
    title: string;
    subtitle: string;
    summary: string;
    note: string;
    timeline: { date: string; title: string; text: string }[];
    chapters: { eyebrow: string; title: string; text: string }[];
    archives: { kind: string; title: string; text: string; sourceLabel: string; sourceHref: string }[];
    symbols: string[];
    productTitle: string;
    sourceTitle: string;
  };
  en: {
    doorTitle: string;
    title: string;
    subtitle: string;
    summary: string;
    note: string;
    timeline: { date: string; title: string; text: string }[];
    chapters: { eyebrow: string; title: string; text: string }[];
    archives: { kind: string; title: string; text: string; sourceLabel: string; sourceHref: string }[];
    symbols: string[];
    productTitle: string;
    sourceTitle: string;
  };
  sources: { label: string; href: string }[];
};

export const chambers: CultureChamber[] = [
  {
    slug: 'gothic-relics', number: '01', tone: 'gothic', productIds: ['DC-003', 'DC-005', 'DC-009'],
    zh: {
      doorTitle: '哥特遗物室', title: '哥特遗物室', subtitle: '从中世纪遗迹到暗黑浪漫主义：一门关于阴影、记忆与崇高感的语言。',
      summary: '这不是“黑色装饰”的简单代称。哥特是一种把废墟、尖拱、幽灵、死亡与欲望编织在一起的叙事美学；它让恐惧成为观看世界的另一种方式。',
      note: '本展厅讨论的是哥特艺术与文学的视觉遗产，不把任何符号等同于真实宗教或仪式。',
      timeline: [
        { date: '12–15 世纪', title: '石头、尖拱与彩窗', text: '“Gothic”最初指向欧洲中世纪建筑。高耸的拱顶、深邃的回廊与彩色光线，建立了后来哥特视觉中“庄严而不安”的空间感。' },
        { date: '1764 以后', title: '城堡开始说话', text: '霍勒斯·沃波尔的《奥特朗托城堡》把中古城堡、秘密、家族阴影和超自然威胁带入小说；哥特小说由此成为一个持续演化的类型。' },
        { date: '19 世纪至今', title: '浪漫主义的暗面', text: '从《弗兰肯斯坦》到维多利亚时期的通俗惊悚，再到今日的电影、时装与收藏文化，哥特不断把“美”与“不安”并置。' }
      ],
      chapters: [
        { eyebrow: 'THE RUIN', title: '废墟不是终点，而是叙事的入口。', text: '哥特空间从不只是一座旧建筑。门、走廊、地下室、墓园与被遮蔽的肖像，都是等待被打开的记忆容器。我们的骷髅、翼骨与死神造型借用的正是这种“物件仿佛拥有过去”的观看方式。' },
        { eyebrow: 'THE SUBLIME', title: '在宏大与脆弱之间停留。', text: '哥特的魅力不在于单纯吓人，而在于让人同时感到渺小、好奇与被吸引。厚重的轮廓、古铜色磨损、夸张的角与骨骼，让一件桌面摆件也能像从更大故事中被带出的遗物。' },
        { eyebrow: 'THE MODERN RELIC', title: '把阴影放进日常。', text: '今天的哥特收藏不需要一座城堡才能成立。一盏灯、一本书旁的器物、一个具有戏剧性剪影的摆件，就足以让空间拥有自己的叙事节奏。' }
      ],
      archives: [
        { kind: '文学原典 / 1764', title: '《奥特朗托城堡》：一座被伪装成古稿的城堡', text: '沃波尔在 1764 年匿名出版这部小说，最初把它伪装成“重新发现的中世纪故事”。城堡、失落的继承权、秘密通道与超自然征兆由此组成了后来哥特小说反复调用的叙事机器。它不是中世纪民间传说，而是18世纪作家对“中世纪感”的有意识发明。', sourceLabel: '英国图书馆：哥特小说的起点', sourceHref: 'https://www.bl.uk/stories/blogs/posts/spine-tingling-stories-in-the-blood-curdling-british-library' },
        { kind: '文学史 / 1818', title: '《弗兰肯斯坦》：哥特与现代性的相遇', text: '玛丽·雪莱让实验、身体、造物责任与恐惧进入哥特传统。怪物并非来自遥远的古堡，而是来自一个现代人试图突破界限的实验室。它提醒读者：哥特并不只回望过去，也持续追问科学、伦理与人的孤独。', sourceLabel: '英国图书馆：哥特文本与《弗兰肯斯坦》', sourceHref: 'https://www.bl.uk/stories/blogs/posts/spine-tingling-stories-in-the-blood-curdling-british-library' },
        { kind: '民俗到流行文化', title: '“黑犬”“幽灵”与地方传说', text: '英国及爱尔兰的怪谈传统常把道路、荒地、墓园和夜行者变为叙事地点。不同地区的黑犬、精灵或归来者传说没有一部统一的“正典”；它们在口述、地方记录、诗歌与后来的小说中不断变形。这里展示的是这种传播方式，不把任何单一版本宣称为唯一真实。', sourceLabel: '英国图书馆：民间故事与怪诞爱尔兰选集', sourceHref: 'https://shop.bl.uk/products/uncanny-ireland-otherworldly-tales-of-the-strange-and-sublime' }
      ],
      symbols: ['城堡与废墟', '拱门与幽暗回廊', '骨骼、角与翼', '古铜、黑金与磨损质感'], productTitle: '从遗物室带走的藏品', sourceTitle: '继续阅读：文化来源'
    },
    en: {
      doorTitle: 'Gothic Relic Room', title: 'Gothic Relic Room', subtitle: 'From medieval ruins to dark romanticism: a language of shadow, memory, and the sublime.',
      summary: 'Gothic is more than black décor. It is a narrative aesthetic that binds ruins, arches, ghosts, death, and desire—and makes unease another way of seeing.',
      note: 'This room explores the visual legacy of Gothic art and literature. It does not equate decorative symbols with real religious practice.',
      timeline: [
        { date: '12th–15th c.', title: 'Stone, arches, and coloured light', text: 'The word Gothic first points to medieval European architecture. Vaults, shadowed cloisters, and stained light established a space that feels both solemn and unsettled.' },
        { date: 'From 1764', title: 'The castle begins to speak', text: 'Horace Walpole’s The Castle of Otranto brought castles, secrets, family shadows, and supernatural threat into fiction, launching a genre that kept changing.' },
        { date: '19th c. to now', title: 'The dark side of romanticism', text: 'From Frankenstein and Victorian sensation stories to cinema, fashion, and collecting today, Gothic keeps placing beauty beside unease.' }
      ],
      chapters: [
        { eyebrow: 'THE RUIN', title: 'A ruin is not an ending; it is an entrance.', text: 'In Gothic space, a door, corridor, cellar, graveyard, or covered portrait can hold memory. Our skulls, bone wings, and reapers borrow this sense that an object has arrived from a larger past.' },
        { eyebrow: 'THE SUBLIME', title: 'Stay between grandeur and fragility.', text: 'Gothic is not simply about fright. It makes us feel small, curious, and drawn in at once. Heavy silhouettes, aged bronze, horns, and bone let a tabletop object read like a recovered relic.' },
        { eyebrow: 'THE MODERN RELIC', title: 'Bring shadow into the everyday.', text: 'A Gothic collection does not require a castle. A lamp, a shelf, or one dramatic silhouette can give an ordinary room its own narrative rhythm.' }
      ],
      archives: [
        { kind: 'LITERARY ORIGIN / 1764', title: 'The Castle of Otranto: a castle disguised as a recovered text', text: 'Walpole first published the novel anonymously and presented it as a rediscovered medieval story. Castle, inheritance, secret passage, and supernatural sign became an engine for later Gothic fiction—not a medieval folk tale, but an eighteenth-century invention of medieval feeling.', sourceLabel: 'British Library · Gothic origins', sourceHref: 'https://www.bl.uk/stories/blogs/posts/spine-tingling-stories-in-the-blood-curdling-british-library' },
        { kind: 'LITERARY HISTORY / 1818', title: 'Frankenstein: Gothic meets modernity', text: 'Mary Shelley brought experiment, bodies, responsibility, and fear into the Gothic tradition. Her creature comes not from a distant castle but from a modern boundary-crossing laboratory.', sourceLabel: 'British Library · Gothic texts', sourceHref: 'https://www.bl.uk/stories/blogs/posts/spine-tingling-stories-in-the-blood-curdling-british-library' },
        { kind: 'FOLK TRADITION', title: 'Black dogs, ghosts, and local tales', text: 'British and Irish uncanny traditions turn roads, moorland, graveyards, and night travellers into story places. There is no single canonical version: tales shifted through oral tradition, local record, poetry, and later fiction.', sourceLabel: 'British Library · Uncanny Ireland', sourceHref: 'https://shop.bl.uk/products/uncanny-ireland-otherworldly-tales-of-the-strange-and-sublime' }
      ],
      symbols: ['Castles and ruins', 'Arches and shadowed cloisters', 'Bone, horn, and wings', 'Aged bronze, black, and gold'], productTitle: 'Relics from this room', sourceTitle: 'Read the sources'
    },
    sources: [{ label: 'British Library · Gothic stories and The Castle of Otranto', href: 'https://www.bl.uk/stories/blogs/posts/spine-tingling-stories-in-the-blood-curdling-british-library' }]
  },
  {
    slug: 'celtic-wilds', number: '02', tone: 'celtic', productIds: ['DC-002', 'DC-007', 'DC-011'],
    zh: {
      doorTitle: '凯尔特荒野室', title: '凯尔特荒野室', subtitle: '从铁器时代纹样到现代森林想象：相连、变化，而非一块静止的“古老标签”。',
      summary: '“凯尔特”并不是单一民族、单一神话或一组万能符号。它连接着横跨欧洲的多种社群、语言与艺术传统，也在后来被不断重新想象。',
      note: '本系列使用“凯尔特灵感”而非“古代凯尔特原物”来描述森林、角与交织纹样的现代创作。',
      timeline: [
        { date: '约公元前 800–50 年', title: '铁器时代的流动网络', text: '欧洲多地发展出常被称作“凯尔特艺术”的装饰语言。考古发现强调：这些社群彼此关联，却有清晰的地方差异。' },
        { date: '罗马扩张之后', title: '边界中的混合与延续', text: '罗马影响改变了许多地区的日常与物质文化；爱尔兰和苏格兰北部等地区则以各自方式回应与延续本地传统。' },
        { date: '中世纪至现代', title: '结饰、手稿与复兴想象', text: '爱尔兰、苏格兰、威尔士与康沃尔的艺术传统在手稿、金工和石雕中继续发展；近现代又形成了丰富的“凯尔特”视觉复兴。' }
      ],
      chapters: [
        { eyebrow: 'THE LIVING LINE', title: '交织纹样是一种“不断继续”的线。', text: '环绕、回旋、动物形与植物形的线条会引导眼睛持续移动。它并不需要被解释成单一神秘密码：它首先是一种高度成熟、充满节奏感的造型语言。' },
        { eyebrow: 'THE WILD', title: '森林不是背景，而是角色。', text: '鹿角、树冠、鸟与守护者在当代幻想作品中经常共同出现。我们将它们作为“荒野与守望”的视觉主题，而不宣称某一尊树脂人物就是特定历史神祇。' },
        { eyebrow: 'THE HONEST INSPIRATION', title: '灵感可以明确地说明来处。', text: 'DARK CASTLE 的森林人物、女神与猫头鹰更接近当代凯尔特灵感和民俗幻想的融合。保留这条界线，才让审美、历史与设计各自都更完整。' }
      ],
      archives: [
        { kind: '考古材料 / 铁器时代', title: '旋涡、枝蔓与会变形的动物', text: '约公元前500年后，阿尔卑斯山以北出现了高度抽象的装饰语言。英国博物馆指出，弯曲线条在观看角度变化时会像枝蔓、鸟或兽；这种“可变形”的视觉趣味，是理解凯尔特艺术的重要入口，而不是一张可以逐项翻译的神秘密码表。', sourceLabel: '大英博物馆：凯尔特人的艺术与身份', sourceHref: 'https://www.britishmuseum.org/blog/who-were-celts' },
        { kind: '历史辨析', title: '“凯尔特人”不是一个单一、静止的民族', text: '古希腊和罗马作者曾使用相近名称描述北方人群，但考古学看到的是彼此联系又地方差异鲜明的社群。环形颈饰、武器与纹样在不同地点有不同含义。把“凯尔特”写成一个完全统一的古国，会抹去这种真实而丰富的差异。', sourceLabel: '大英博物馆：谁是凯尔特人？', sourceHref: 'https://www.britishmuseum.org/blog/who-were-celts' },
        { kind: '传说与文学', title: '异界、精灵与海豹人：被讲述的世界', text: '爱尔兰、苏格兰、威尔士与马恩岛等地保存着多种口头故事传统，常见异界居民、海边变形者、森林与边界时刻。它们的版本会随着讲述者、语言和时代改变。网站将把这些故事作为“有出处的传说版本”逐步标注，而不是将其伪装为可考证的历史事件。', sourceLabel: '苏格兰故事中心：精灵、海豹人与水中生物', sourceHref: 'https://www.scottishstorytellingcentre.com/event-post/?eventid=14034' }
      ],
      symbols: ['交织与螺旋线', '鹿角与树冠', '鸟、林地与守护者', '铜绿、苔藓与石质感'], productTitle: '从荒野室带走的藏品', sourceTitle: '继续阅读：文化来源'
    },
    en: {
      doorTitle: 'Celtic Wilds', title: 'Celtic Wilds', subtitle: 'From Iron Age pattern to the modern forest imagination: connected, changing, and never one frozen “ancient” label.',
      summary: 'Celtic is not one people, one mythology, or a universal set of signs. It connects many communities, languages, and art traditions across Europe—and has been reimagined repeatedly.',
      note: 'We use Celtic-inspired, not ancient Celtic artifact, for contemporary work drawing on forests, antlers, and interlace.',
      timeline: [
        { date: 'c. 800–50 BCE', title: 'Iron Age networks', text: 'Across Europe, communities developed decorative languages often described as Celtic art. Archaeology stresses connection alongside real regional difference.' },
        { date: 'After Roman expansion', title: 'Mixture and continuity at the edges', text: 'Roman power transformed daily and material life in many regions; places including Ireland and northern Scotland responded and continued local traditions in distinct ways.' },
        { date: 'Medieval to modern', title: 'Interlace, manuscripts, and revival', text: 'Art traditions in Ireland, Scotland, Wales, and Cornwall continued through manuscripts, metalwork, and stone; later periods created many Celtic revivals.' }
      ],
      chapters: [
        { eyebrow: 'THE LIVING LINE', title: 'Interlace is a line that keeps moving.', text: 'Loops, spirals, animal forms, and vegetal curves lead the eye onward. They need not be reduced to a single secret code: first, they are a sophisticated visual language of rhythm.' },
        { eyebrow: 'THE WILD', title: 'The forest is a character, not scenery.', text: 'Antlers, tree canopies, birds, and guardians often meet in contemporary fantasy. We use them as a visual theme of wilderness and watchfulness, not as claims that a resin figure is a named historical deity.' },
        { eyebrow: 'THE HONEST INSPIRATION', title: 'Inspiration deserves a clear origin.', text: 'DARK CASTLE forest figures, goddesses, and owls are contemporary blends of Celtic-inspired and folk-fantasy imagery. Keeping that line clear makes the history and the design stronger.' }
      ],
      archives: [
        { kind: 'ARCHAEOLOGY / IRON AGE', title: 'Spirals, tendrils, and changing animals', text: 'After around 500 BCE, highly abstract decorative languages developed north of the Alps. Curving lines can read as tendrils, birds, or beasts as the viewer moves; this is visual play, not a universal secret-code chart.', sourceLabel: 'British Museum · Celtic art and identity', sourceHref: 'https://www.britishmuseum.org/blog/who-were-celts' },
        { kind: 'HISTORICAL CAUTION', title: 'The Celts were not one static people', text: 'Classical writers applied related names to northern groups, while archaeology reveals connected communities with strong local difference. Treating Celtic as one fully unified ancient nation loses that richness.', sourceLabel: 'British Museum · Who were the Celts?', sourceHref: 'https://www.britishmuseum.org/blog/who-were-celts' },
        { kind: 'LEGEND & LITERATURE', title: 'Otherworlds, fairies, and selkies', text: 'Ireland, Scotland, Wales, and the Isle of Man maintain many oral traditions of otherworldly beings, shapeshifters, forest, sea, and threshold times. Versions shift with teller, language, and era.', sourceLabel: 'Scottish Storytelling Centre', sourceHref: 'https://www.scottishstorytellingcentre.com/event-post/?eventid=14034' }
      ],
      symbols: ['Interlace and spirals', 'Antlers and canopy', 'Birds, woodland, guardians', 'Verdigris, moss, and stone'], productTitle: 'Objects from the wilds', sourceTitle: 'Read the sources'
    },
    sources: [{ label: 'British Museum · Who were the Celts?', href: 'https://www.britishmuseum.org/blog/who-were-celts' }, { label: 'British Museum · Celtic Britain and Ireland, AD 300–1100', href: 'https://www.britishmuseum.org/sites/default/files/2021-05/large_print_guide_room_41.pdf' }]
  },
  {
    slug: 'occult-cabinet', number: '03', tone: 'occult', productIds: ['DC-012', 'DC-013', 'DC-004'],
    zh: {
      doorTitle: '秘仪珍奇柜', title: '秘仪珍奇柜', subtitle: '从珍奇柜、降神会与舞台幻术，到现代流行文化中的仪式感陈设。',
      summary: '“秘仪”在这里是一种观看方式：桌面被安排成一个小型舞台，蜡烛、书、玻璃、金属与象征物共同制造等待揭晓的气氛。',
      note: '本展厅使用的是历史与流行文化中的“神秘学视觉语言”，不提供宗教、灵性或超自然效果的承诺。',
      timeline: [
        { date: '16–18 世纪', title: '收藏世界的柜子', text: '欧洲的珍奇柜把自然标本、艺术品、旅行物件与奇异器具并置；它们是私人收藏，也是展示“世界如何被分类”的舞台。' },
        { date: '19 世纪', title: '降神会与现代媒介', text: '维多利亚时期的降神会、灵媒表演与反欺诈表演共同塑造了“看不见之物如何被呈现”的想象。神秘与娱乐常在同一间房间发生。' },
        { date: '20 世纪至今', title: '符号成为流行视觉', text: '塔罗、蜡烛、五芒星、晶球与古书意象进入出版、电影、音乐与室内陈设；它们拥有多重历史含义，也被不断重新设计。' }
      ],
      chapters: [
        { eyebrow: 'THE CABINET', title: '物件之间的关系，才是戏剧。', text: '一只托盘、一盏茶蜡、一本书与一枚象征物，单看都很安静；当它们被排列在一起，便像是某个故事暂停的瞬间。珍奇柜美学的核心不是堆满，而是选择与并置。' },
        { eyebrow: 'THE LIGHT', title: '烛光让表面开始叙事。', text: '树脂的纹理、青铜色的起伏、玻璃的反光会在暖光下改变。我们的烛台与托盘并不宣称神秘功能，而是为室内营造有层次、有停顿的观看体验。' },
        { eyebrow: 'THE SYMBOL', title: '符号有来处，也有今天的新读法。', text: '以五芒星、玫瑰、女巫之手等元素创作时，我们把它们当作现代暗黑幻想的视觉词汇，并鼓励读者继续追溯各符号在不同历史与社群中的复杂含义。' }
      ],
      archives: [
        { kind: '收藏史 / 16–17 世纪', title: 'Kunstkammer：把已知世界放进一间房', text: '德语区的 Kunstkammer 或 Wunderkammer 常被译作“艺术与奇珍之室”。自然物、人工制品、仪器与旅行所得被并置收藏。它既反映求知欲，也反映权力、贸易与当时欧洲如何选择、命名和展示世界。现代“珍奇柜”美学借用其陈列方式，不应忽略这段复杂历史。', sourceLabel: '大都会艺术博物馆：Kunstkammer 的收藏史', sourceHref: 'https://www.metmuseum.org/pt/essays/collecting-for-the-kunstkammer' },
        { kind: '历史档案 / 19 世纪', title: '灵媒、镜面与舞台：被记录的招魂会', text: '19世纪的灵性主义、催眠术、占星与灵媒表演留下大量书籍、笔记和图像。美国国会图书馆保存的霍克利手稿记录了水晶凝视、镜面与通灵实践；同时，胡迪尼等表演者和调查者也持续揭露欺诈。它是信念、媒介技术与表演彼此缠绕的历史，不是可以被现代网站验证的超自然事实。', sourceLabel: '美国国会图书馆：霍克利手稿与19世纪神秘学复兴', sourceHref: 'https://blogs.loc.gov/bibliomania/2023/10/31/the-mysterious-manuscripts-of-frederick-hockley/' },
        { kind: '符号的多义性', title: '五芒星与玫瑰：不要只保留一种解释', text: '同一个几何图形或花卉图案能在宗教、民俗、政治、诗歌与当代亚文化中拥有不同含义。DARK CASTLE 采用它们时，明确定位为当代暗黑幻想的陈设语言；每一个符号的具体历史会在后续文章中按地域、年代与社群分开说明。', sourceLabel: '美国国会图书馆：神秘学、灵性主义与藏书档案', sourceHref: 'https://blogs.loc.gov/inside_adams/2014/10/harry-houdinis-rare-magic-books/' }
      ],
      symbols: ['珍奇柜与玻璃器皿', '蜡烛与暖光', '书籍、托盘与桌面舞台', '玫瑰、几何与象征物'], productTitle: '从珍奇柜带走的藏品', sourceTitle: '继续阅读：文化来源'
    },
    en: {
      doorTitle: 'Occult Cabinet', title: 'Occult Cabinet', subtitle: 'From cabinets of curiosity, séances, and stage illusion to the ritual mood of modern popular culture.',
      summary: 'Here, occult is a way of arranging attention: a tabletop becomes a small stage, where candles, books, glass, metal, and symbols create the feeling that something is about to be revealed.',
      note: 'This room uses historical and popular visual languages of the occult. It makes no religious, spiritual, or supernatural claims.',
      timeline: [
        { date: '16th–18th c.', title: 'A cabinet for the world', text: 'European cabinets of curiosity placed natural specimens, art, travel objects, and unusual instruments together. They were private collections and stages for classifying the world.' },
        { date: '19th c.', title: 'Séance and modern media', text: 'Victorian séances, mediumship performances, and anti-fraud stage acts shaped how the unseen could be presented. Mystery and entertainment often shared a room.' },
        { date: '20th c. to now', title: 'Symbols enter popular visual culture', text: 'Tarot, candles, pentagrams, crystal spheres, and old books moved through publishing, film, music, and interiors. Their meanings are multiple and continually redesigned.' }
      ],
      chapters: [
        { eyebrow: 'THE CABINET', title: 'The drama lives between objects.', text: 'A tray, a tealight, a book, and a symbol may be quiet alone. Arranged together, they feel like a paused scene. Cabinet aesthetics are not about crowding; they are about selection and juxtaposition.' },
        { eyebrow: 'THE LIGHT', title: 'Candlelight lets surfaces narrate.', text: 'Resin texture, bronze-like relief, and glass reflections change under warm light. Our holders and trays do not claim occult function; they build a layered, deliberate experience of looking.' },
        { eyebrow: 'THE SYMBOL', title: 'Symbols have histories—and new readings.', text: 'When working with pentagrams, roses, and witch hands, we use them as visual vocabulary for contemporary dark fantasy, while inviting further reading into their complex meanings across histories and communities.' }
      ],
      archives: [
        { kind: 'COLLECTION HISTORY / 16th–17th c.', title: 'Kunstkammer: putting the known world in a room', text: 'Kunstkammer and Wunderkammer combined natural objects, artefacts, instruments, and travel acquisitions. They express curiosity, but also power, trade, and European choices about naming and displaying the world.', sourceLabel: 'The Met · Collecting for the Kunstkammer', sourceHref: 'https://www.metmuseum.org/pt/essays/collecting-for-the-kunstkammer' },
        { kind: 'HISTORICAL ARCHIVE / 19th c.', title: 'Mediums, mirrors, and the stage', text: 'Nineteenth-century spiritualism, mesmerism, astrology, and mediumship left books, notebooks, and images. Hockley’s manuscripts record crystal gazing and mirrors, while Houdini and investigators also exposed deception. This is history of belief, media, and performance—not a modern proof of supernatural fact.', sourceLabel: 'Library of Congress · Frederick Hockley manuscripts', sourceHref: 'https://blogs.loc.gov/bibliomania/2023/10/31/the-mysterious-manuscripts-of-frederick-hockley/' },
        { kind: 'MULTIPLE MEANINGS', title: 'Pentagram and rose: never one reading only', text: 'A geometry or flower can carry different meanings across religion, folklore, politics, poetry, and subculture. DARK CASTLE uses them as contemporary dark-fantasy décor and will identify specific history by place, period, and community.', sourceLabel: 'Library of Congress · Houdini’s magic books', sourceHref: 'https://blogs.loc.gov/inside_adams/2014/10/harry-houdinis-rare-magic-books/' }
      ],
      symbols: ['Cabinets and glass vessels', 'Candles and warm light', 'Books, trays, tabletop theatre', 'Roses, geometry, and symbols'], productTitle: 'Objects from the cabinet', sourceTitle: 'Read the sources'
    },
    sources: [{ label: 'Wellcome Collection · Séances and spiritualism', href: 'https://wellcomecollection.org/concepts/ka57rk3z' }]
  },
  {
    slug: 'cosmic-abyss', number: '04', tone: 'cosmic', productIds: ['DC-008', 'DC-004', 'DC-005'],
    zh: {
      doorTitle: '宇宙深渊室', title: '宇宙深渊室', subtitle: '不是欧洲古代传说，而是 20 世纪美国怪诞文学留下的“宇宙恐怖”想象。',
      summary: '克苏鲁风格的核心不在“怪物名称”，而在尺度：人类的知识、时间与空间忽然显得极其有限。它是一种现代文学想象，后来成为全球流行文化的视觉源头。',
      note: '“克苏鲁”与相关角色属于文学虚构与后续创作传统；本展厅讨论其艺术影响，不把虚构设定当作真实神话。',
      timeline: [
        { date: '18–19 世纪', title: '怪诞小说的前史', text: '哥特小说与怪诞文学早已在处理未知、恐惧与不可言说之物；这为后来的宇宙恐怖提供了叙事土壤。' },
        { date: '1920 年代', title: '尺度突然失衡', text: 'H. P. 洛夫克拉夫特在怪诞小说中发展“宇宙恐怖”观念：面对浩瀚时间与空间，人类并不是故事中心。《克苏鲁的呼唤》于 1928 年发表。' },
        { date: '后来至今', title: '从纸页到共同视觉语汇', text: '触手、古老文字、深海、翼与异形头骨等元素被后来的作者、艺术家、游戏与电影不断扩展，形成一种可辨识的当代幻想美学。' }
      ],
      chapters: [
        { eyebrow: 'THE SCALE', title: '恐惧来自“并不重要”。', text: '传统恐怖常让人担心门后的怪物；宇宙恐怖更进一步：门后也许没有为人类准备的答案。巨大的空白、陌生的纹理与无法分类的形体，因而比明确的解释更有力量。' },
        { eyebrow: 'THE SHAPE', title: '异形，不等于随意。', text: '触手、骨甲、复眼、鳞片与翼的混合之所以有效，是因为它们让熟悉的生物结构发生轻微而持续的偏离。我们以这种“可识别又不完全可识别”的张力来设计雕像。' },
        { eyebrow: 'THE FICTIONAL MYTH', title: '把虚构当作创作的宇宙。', text: '这一展厅不是在复述真实仪式，而是在欣赏现代怪诞文学如何创造一套可供阅读、绘画、雕塑与游戏不断再创作的共享想象。' }
      ],
      archives: [
        { kind: '文学原典 / 1928', title: '《克苏鲁的呼唤》：一个明确可追溯的起点', text: '“克苏鲁”并非古老宗教中的神名，而是 H. P. 洛夫克拉夫特创作的虚构实体。《克苏鲁的呼唤》在美国通俗杂志《Weird Tales》1928年2月号发表。将这个出处写清楚，才能把文学创作与历史传说严格区分。', sourceLabel: 'H. P. Lovecraft Archive：发表资料', sourceHref: 'https://www.hplovecraft.com/writings/fiction/cc.aspx' },
        { kind: '思想史 / 宇宙恐怖', title: '“宇宙恐怖”不是怪兽清单', text: '洛夫克拉夫特式恐怖把人类的无足轻重、深时间与广阔空间置于中心。恐惧来自认识尺度的崩塌：人类世界并非一切事物的尺度。它与哥特传统相连，但发展出更冷峻、更非人的叙事视野。', sourceLabel: 'H. P. Lovecraft Archive：宇宙恐怖与主要作品', sourceHref: 'https://www.hplovecraft.com/writings/sources/ccdt.aspx' },
        { kind: '阅读的责任', title: '影响力与问题必须一起阅读', text: '布朗大学的馆藏与研究指出，洛夫克拉夫特作品中关于种族与文化差异的恐惧并非无关紧要的背景。文化宇宙会保留这种批判性语境：可以研究其形式、想象力和后世影响，也不能回避文本中的偏见与伤害。', sourceLabel: '布朗大学图书馆：洛夫克拉夫特的种族想象', sourceHref: 'https://library.brown.edu/create/lovecraftracialimaginaries/' }
      ],
      symbols: ['深海与未知水域', '触手、翼与异形骨甲', '古文字与失落档案', '黑绿铜色与非自然轮廓'], productTitle: '从深渊带回的藏品', sourceTitle: '继续阅读：文化来源'
    },
    en: {
      doorTitle: 'Cosmic Abyss', title: 'Cosmic Abyss', subtitle: 'Not an ancient European legend, but the legacy of 20th-century American weird fiction and cosmic horror.',
      summary: 'The core of Lovecraftian style is not a monster name but scale: human knowledge, time, and space suddenly feel very limited. It is a modern literary imagination that became a global visual source.',
      note: 'Cthulhu and related characters belong to literary fiction and later creative traditions. This room discusses artistic influence, not a real mythology.',
      timeline: [
        { date: '18th–19th c.', title: 'Before cosmic horror', text: 'Gothic and weird fiction were already working with the unknown, fear, and the unsayable. They prepared narrative ground for cosmic horror.' },
        { date: '1920s', title: 'Scale becomes unsteady', text: 'H. P. Lovecraft developed cosmic horror in weird fiction: before vast time and space, humanity is not the centre of the story. The Call of Cthulhu appeared in 1928.' },
        { date: 'Afterwards to now', title: 'From page to shared visual language', text: 'Tentacles, old scripts, deep water, wings, and alien skulls were expanded by later writers, artists, games, and film into a recognizable contemporary fantasy aesthetic.' }
      ],
      chapters: [
        { eyebrow: 'THE SCALE', title: 'The fear is that it may not matter.', text: 'Traditional horror makes us fear a monster behind the door. Cosmic horror goes further: perhaps there is no answer made for us behind it. Vast blanks, unfamiliar texture, and unclassifiable forms can be more powerful than explanation.' },
        { eyebrow: 'THE SHAPE', title: 'Alien does not mean arbitrary.', text: 'Tentacles, bone armour, compound eyes, scales, and wings work because familiar anatomy shifts slightly but persistently. Our figures work with that tension between recognition and uncertainty.' },
        { eyebrow: 'THE FICTIONAL MYTH', title: 'Treat fiction as a creative universe.', text: 'This room does not retell real rites. It celebrates how modern weird literature created a shared imaginative field for reading, painting, sculpture, and games to remake.' }
      ],
      archives: [
        { kind: 'LITERARY ORIGIN / 1928', title: 'The Call of Cthulhu: a traceable beginning', text: 'Cthulhu is not a deity from an ancient religion but a fictional entity created by H. P. Lovecraft. The story appeared in Weird Tales in February 1928; keeping the source clear separates literary invention from historical legend.', sourceLabel: 'H. P. Lovecraft Archive · publication record', sourceHref: 'https://www.hplovecraft.com/writings/fiction/cc.aspx' },
        { kind: 'IDEA HISTORY / COSMIC HORROR', title: 'Cosmic horror is not a monster list', text: 'Lovecraftian horror centres human insignificance, deep time, and vast space. Fear comes from the collapse of human scale. It connects to Gothic but develops a colder, more nonhuman narrative view.', sourceLabel: 'H. P. Lovecraft Archive · cosmic horror', sourceHref: 'https://www.hplovecraft.com/writings/sources/ccdt.aspx' },
        { kind: 'RESPONSIBLE READING', title: 'Influence and harm must be read together', text: 'Brown University’s archive and research make clear that Lovecraft’s fears around race and cultural difference are not incidental background. A cultural universe can study his forms and influence without erasing those biases.', sourceLabel: 'Brown University Library · racial imaginaries', sourceHref: 'https://library.brown.edu/create/lovecraftracialimaginaries/' }
      ],
      symbols: ['Deep water and unknown seas', 'Tentacles, wings, alien bone', 'Old scripts and lost archives', 'Black-green bronze and unnatural silhouettes'], productTitle: 'Objects returned from the abyss', sourceTitle: 'Read the sources'
    },
    sources: [{ label: 'H. P. Lovecraft Archive · The Call of Cthulhu (1928)', href: 'https://www.hplovecraft.com/writings/fiction/cc.aspx' }, { label: 'Lovecraft Archive · Cosmic horror and major works', href: 'https://www.hplovecraft.com/writings/sources/ccdt.aspx' }]
  }
];

export const findChamber = (slug: string) => chambers.find((chamber) => chamber.slug === slug);
