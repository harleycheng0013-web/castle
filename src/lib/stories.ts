import bellLongformZh from '../data/stories/the-bell-that-never-saw-dawn.zh.json';
import wingedJudgeLongformZh from '../data/stories/the-thirteenth-trial-of-the-winged-judge.zh.json';

export type StorySection = { title: string; text: string[] };

export type UniverseStory = {
  slug: string;
  chamber: string;
  featured?: boolean;
  image: string;
  readTime: number;
  productIds: string[];
  titleZh: string; titleEn: string;
  dekZh: string; dekEn: string;
  categoryZh: string; categoryEn: string;
  eraZh: string; eraEn: string;
  quoteZh: string; quoteEn: string;
  charactersZh: string[]; charactersEn: string[];
  sectionsZh: StorySection[];
  sectionsEn: StorySection[];
};

export const universeStories: UniverseStory[] = [
  {
    slug: 'the-bell-that-never-saw-dawn', chamber: 'obsidian-court', featured: true,
    image: '/images/universe/bell-never-dawn.webp', readTime: 44, productIds: [],
    titleZh: '从未见过黎明的钟', titleEn: 'The Bell That Never Saw Dawn',
    dekZh: '当第十三口钟抹掉弟弟的名字，弥拉必须与一名黑羽逃兵闯入钟塔，在午夜夺回整座城市选择明天的权利。',
    dekEn: 'When the thirteenth bell erases her brother’s name, Mira and a Blackwing deserter must enter the tower before midnight and recover the city’s right to choose tomorrow.',
    categoryZh: '黑曜王庭纪事', categoryEn: 'OBSIDIAN COURT CHRONICLE', eraZh: '暮辉纪 427 年', eraEn: 'GLOAMING 427',
    quoteZh: '伙伴不是服从你的人。伙伴是在一家人吵到听不见时，仍肯说难听话的人。', quoteEn: 'A companion is not someone who obeys you, but someone who speaks when a family can no longer hear itself.',
    charactersZh: ['弥拉｜无龄见习守钟人', '卡兰｜被钟选中的剧院少年', '莱温｜黑羽逃兵', '奥德林｜失踪的第十三守钟人', '旧王｜沉睡在城下的名字', '黑羽首席｜审判庭首席'], charactersEn: ['Mira · ageless bell apprentice', 'Kalan · theatre boy chosen by the bell', 'Levin · Blackwing deserter', 'Odren · missing thirteenth keeper', 'The Old King · a name beneath the city', 'First Blackwing · Tribunal chief'],
    sectionsZh: bellLongformZh,
    sectionsEn: [
      { title: 'A morning without morning', text: ['Mira woke beneath the same iron-blue night. The Court had known no dawn for two hundred and one years, yet every citizen still opened their curtains as if performing a ritual older than hope.', 'Twelve bells answered. The thirteenth tower stayed silent. On her master’s desk she found warm tea and a black feather pointing toward the world-rift.'] },
      { title: 'The other door in the tower', text: ['The tower had seven floors outside and thirteen within. On the eighth, Mira found a painted sun with real warmth behind its glass.', 'Odren had carved a warning into the bell: every chime removes one possibility from the world. The sun had not vanished. The Old King had sealed away the possibility of sunrise.'] },
      { title: 'The thirteenth possibility', text: ['The Blackwing Tribunal surrounded the tower. They feared the last chime would free every lost possibility—and wake the king who purchased night with his own name.', 'Odren had not fled. He had entered the bell as its final piece of metal. To ring it was to lose him and perhaps recover dawn.'] },
      { title: 'The first line of light', text: ['Mira struck the bell. Its voice fell inward, into the darkest place in every listener. The cemetery shone first, then stained glass, roofs, and thousands of opening eyes.', 'The sun rose only as a golden line. From inside the bell came Odren’s last laugh: “Enough. Ring it again tomorrow.”'] }
    ]
  },
  {
    slug: 'the-thirteenth-trial-of-the-winged-judge', chamber: 'obsidian-court',
    image: '/images/universe/winged-judge-trial.webp', readTime: 41, productIds: [],
    titleZh: '长翼审判官的第十三次审判', titleEn: 'The Winged Judge’s Thirteenth Trial',
    dekZh: '一位被雕成圣像的审判官醒来，发现自己必须审判两百年前的自己。', dekEn: 'A judge carved into a saint awakens and is ordered to pass sentence on the person he was two centuries ago.',
    categoryZh: '人物传记', categoryEn: 'CHARACTER STORY', eraZh: '暮辉纪 113—427 年', eraEn: 'GLOAMING 113–427',
    quoteZh: '石像最可怕的不是不会说话，而是只会重复别人写下的话。', quoteEn: 'The terror of a statue is not silence, but speaking only the words others wrote.',
    charactersZh: ['赛勒斯｜长翼审判官', '薇尔｜圣像修复师', '主审执事｜审判庭代表'], charactersEn: ['Caelis · the Winged Judge', 'Veyra · conservator of statues', 'The Presiding Deacon · Tribunal representative'],
    sectionsZh: wingedJudgeLongformZh,
    sectionsEn: [
      { title: 'Stone opens its eyes', text: ['While Veyra restored the cathedral saint, black blood welled beneath her chisel. Caelis looked down and asked which trial this was.', 'History claimed he chose to become stone. He remembered plaster being forced into his wings.'] },
      { title: 'Twelve erased verdicts', text: ['Inside the plinth were twelve verdicts, each finding him guilty of a different crime: mercy, refusing prophecy, remembering the sun.', 'The thirteenth page was blank except for today’s date and Veyra’s name.'] },
      { title: 'Judging the self', text: ['The Tribunal demanded that Caelis condemn his former self so the Court could keep worshipping his image.', 'He wrote: guilty of obeying a mistaken world. Then he tore his wings from the wall.'] },
      { title: 'The man who left the cathedral', text: ['Stone wings could not fly, but they could shelter a street. Caelis guarded Veyra beneath the rain of arrows.', 'The empty plinth became a place where citizens left forbidden memories for a judge who might return at night.'] }
    ]
  },
  {
    slug: 'the-empty-throne-of-stagcrown', chamber: 'stagcrown-wilds', featured: true,
    image: '/images/universe/stagcrown-empty-throne.webp', readTime: 10, productIds: [],
    titleZh: '鹿冠荒野的空王座', titleEn: 'The Empty Throne of Stagcrown',
    dekZh: '白树开花之夜，年轻猎人被森林选为新王；代价是世界将忘记她曾经存在。', dekEn: 'On the White Tree’s flowering night, a young hunter is chosen to rule. The price: the world must forget she ever existed.',
    categoryZh: '荒野史诗', categoryEn: 'WILDS EPIC', eraZh: '第九次花期', eraEn: 'THE NINTH FLOWERING',
    quoteZh: '王冠不是戴在头上的东西。王冠是所有人同意替你遗忘的名字。', quoteEn: 'A crown is not worn. It is the name everyone agrees to forget for you.',
    charactersZh: ['伊芙兰｜无名猎人', '灰耳｜最后一只记名猎犬', '白树｜森林的古老意志'], charactersEn: ['Evren · nameless hunter', 'Greyear · last hound of names', 'The White Tree · will of the forest'],
    sectionsZh: [
      { title: '白树选择的人', text: ['白树开花时没有颜色，只有声音。每一片花瓣落地，都念出一个活人的名字。伊芙兰听见自己的名字被念了三次，猎人们便跪下，拒绝再看她。', '被森林选中的王必须失去名字。名字一旦从人们记忆中拔除，王就能听懂树根的道路，也将永远无法回到普通人的火堆旁。'] },
      { title: '唯一记得她的猎犬', text: ['只有灰耳仍然跟着她。猎犬不理解加冕，只知道伊芙兰的气味仍然是雨、皮革与松烟。', '他们来到空王座前，藤蔓没有像往年那样托起新王，而是把王冠推向灰耳。森林真正选择的并不是伊芙兰，而是这个拒绝遗忘她的生命。'] },
      { title: '森林提出的条件', text: ['白树通过千万片叶子说话：人类总想要一位能替他们承担遗忘的王，但森林需要的是一个记住每条道路的人。', '伊芙兰把鹿冠折成两半。一半交给灰耳，一半埋入白树根下。她宣布荒野不再拥有国王，只拥有彼此记得的人。'] },
      { title: '王座开始行走', text: ['空王座的藤蔓从土地里拔出，像一头巨鹿般走向远方。旧边界在它身后消失，村庄第一次可以自由选择离开或留下。', '多年以后，旅人仍会在雾中遇见一名没有名字的猎人和一只戴着半顶王冠的老犬。他们不统治森林，只负责把迷路者带回有人记得的地方。'] }
    ],
    sectionsEn: [
      { title: 'Chosen by the White Tree', text: ['The White Tree flowered in sound rather than colour. Each falling petal spoke a living name. Evren’s was spoken three times, and every hunter refused to look at her.', 'A chosen ruler must surrender her name, gaining every road beneath the roots and losing every ordinary fire.'] },
      { title: 'The hound who remembered', text: ['Only Greyear followed. A hound knew nothing of coronation; Evren still smelled of rain, leather, and pine smoke.', 'At the throne, the vines offered the crown to the hound. The forest had chosen the life that refused to forget her.'] },
      { title: 'The forest’s condition', text: ['The White Tree said people wanted a ruler to carry forgetting for them, while a forest needed someone who remembered every road.', 'Evren broke the crown in two: half for Greyear, half beneath the roots. The Wilds would have no sovereign—only lives that remembered one another.'] },
      { title: 'The walking throne', text: ['The throne pulled its vines from the earth and walked away like a great stag. Old borders disappeared behind it.', 'Travellers still meet a nameless hunter and an old hound with half a crown. They rule nothing. They lead the lost toward places where someone remembers them.'] }
    ]
  },
  {
    slug: 'the-hound-beneath-the-white-tree', chamber: 'stagcrown-wilds',
    image: '/images/universe/white-tree-hound.webp', readTime: 7, productIds: [],
    titleZh: '白树下最后一只记名猎犬', titleEn: 'The Last Named Hound Beneath the White Tree',
    dekZh: '在名字会被森林吞下的国度，一只老猎犬替死去的主人守着最后两个音节。', dekEn: 'In a realm where the forest swallows names, an old hound guards the final two syllables of a dead master.',
    categoryZh: '荒野传说', categoryEn: 'WILDS LEGEND', eraZh: '王座远行后', eraEn: 'AFTER THE THRONE WALKED',
    quoteZh: '有些名字不是用嘴说的，是用回家的路说的。', quoteEn: 'Some names are spoken not by mouths, but by the road home.',
    charactersZh: ['灰耳｜守名猎犬', '小苔｜迷路的女孩'], charactersEn: ['Greyear · keeper of a name', 'Moss · a lost child'],
    sectionsZh: [
      { title: '两个音节', text: ['灰耳已经老得听不见风，却每天在白树下叫两声。没有人知道那意味着什么，只知道每叫一次，树根就会向北移动一步。', '迷路的小苔跟着声音来到树下。她没有名字，或者说，她的名字已经被森林吃掉了。'] },
      { title: '用气味书写', text: ['灰耳带她穿过雨后的苔原、倒流的溪和会模仿脚步的灌木。他在每个岔路口留下不同的气味，像在世界上写一封只有猎犬能读懂的信。', '小苔逐渐明白，那两个音节属于一个人，一个灰耳不允许森林带走的人。'] },
      { title: '白树的交易', text: ['白树愿意归还小苔的名字，条件是灰耳交出最后的记忆。老犬趴在根旁，安静得像一块被雨打磨过的石头。', '他没有答应。他只是把回家的路线教给小苔，因为道路比名字更难被夺走。'] },
      { title: '新的守名者', text: ['灰耳死后，白树根下长出两朵从未见过的小花。小苔每天来叫出那两个音节，虽然她仍不知道它们怎样书写。', '许多年后，所有迷路的人都知道：只要跟随白树下的两声呼唤，就能找到一个不会问你叫什么的家。'] }
    ],
    sectionsEn: [
      { title: 'Two syllables', text: ['Greyear was too old to hear the wind, yet he called twice beneath the White Tree each day. With every call, the roots shifted north.', 'A lost child followed the sound. The forest had already eaten her name.'] },
      { title: 'Writing with scent', text: ['Across moss, backward streams, and bushes that copied footsteps, Greyear marked every fork like a letter only a hound could read.', 'The two syllables belonged to someone he would not allow the forest to take.'] },
      { title: 'The White Tree’s bargain', text: ['The tree offered the child’s name in exchange for Greyear’s last memory.', 'He refused and taught her the road home, because roads are harder to steal than names.'] },
      { title: 'A new keeper', text: ['After Greyear died, two unknown flowers grew from the roots. The child returned each day to speak the syllables.', 'Now the lost follow that double call to a home that never asks what they are called.'] }
    ]
  },
  {
    slug: 'the-last-lamp-of-the-glass-astrologer', chamber: 'gloam-archive', featured: true,
    image: '/images/universe/glass-astrologer-last-lamp.webp', readTime: 9, productIds: [],
    titleZh: '玻璃占星师的最后一盏灯', titleEn: 'The Glass Astrologer’s Last Lamp',
    dekZh: '大熄灯前夜，占星师发现星空并不在头顶，而是被囚禁在城市每一只玻璃器皿中。', dekEn: 'On the eve of the Great Extinguishing, an astrologer discovers that the stars are not above, but imprisoned inside the city’s glass vessels.',
    categoryZh: '秘库悬疑', categoryEn: 'ARCHIVE MYSTERY', eraZh: '第九十九次熄灯', eraEn: 'THE NINETY-NINTH EXTINGUISHING',
    quoteZh: '如果一颗星只在你看见它时发光，那么被观察的究竟是谁？', quoteEn: 'If a star shines only when you see it, which of you is being observed?',
    charactersZh: ['露珂｜玻璃占星师', '七号｜会梦见火焰的抄写人偶'], charactersEn: ['Luce · glass astrologer', 'Seven · a scribe-doll that dreams of flame'],
    sectionsZh: [
      { title: '城市熄灭之前', text: ['点灯人逐层走过微光秘库。每熄灭一盏灯，一排书架就停止呼吸。露珂守着顶层最后一盏玻璃灯，发现火焰投下的不是她的影子，而是一片陌生星空。', '七号说，那是被秘库删掉的天空。很久以前，城里的学者为了让知识永不受天气与黑夜限制，把星辰的影像一颗颗封进玻璃。'] },
      { title: '倒置天文台', text: ['露珂把最后的灯带到地底。倒置望远镜指向一座巨大的透明球体，里面漂浮着数千个被记录、分类和遗忘的夜晚。', '每一次占星，其实都不是人在观察星辰，而是被封存的星空借人的眼睛观察外面的世界。'] },
      { title: '第九十九次提问', text: ['秘库要求露珂做出选择：保持灯火，城市会继续拥有全部知识，却永远看不到真正天空；熄灭灯火，玻璃中的星辰将重返宇宙，秘库会失去大半记忆。', '七号第一次提出不在程序里的问题：“如果我们忘了，故事还发生过吗？”露珂回答：“会。只是轮到我们重新寻找。”'] },
      { title: '群星离开玻璃', text: ['她吹灭最后一盏灯。整座城市同时响起玻璃开裂的清脆声音，星光从瓶子、窗户、镜片与眼泪中飞出。', '黎明时，微光秘库第一次拥有真正的黑暗。露珂抬头看见稀疏却自由的星空，而七号的胸腔里，亮起了一小团没有被任何人记录的火。'] }
    ],
    sectionsEn: [
      { title: 'Before the city goes dark', text: ['As each lamp died, another shelf stopped breathing. In the final glass flame, Luce saw not her shadow but an unfamiliar sky.', 'Seven said it was the sky the Archive had erased when scholars sealed the stars into vessels so knowledge would never depend on weather or night.'] },
      { title: 'The inverted observatory', text: ['Below the city, a transparent sphere held thousands of catalogued and forgotten nights.', 'Astrologers had never observed the stars. The imprisoned sky had used human eyes to observe the world outside.'] },
      { title: 'The ninety-ninth question', text: ['Keep the lamp and retain all knowledge beneath a false sky; extinguish it and return the stars while losing half the Archive.', 'Seven asked, “If we forget, did the story still happen?” Luce answered, “Yes. We simply have to find it again.”'] },
      { title: 'The stars leave glass', text: ['She blew out the final flame. Glass cracked through the city and starlight escaped from bottles, windows, lenses, and tears.', 'At dawn the Archive possessed true darkness. Above it were fewer but freer stars, and inside Seven burned a flame no one had recorded.'] }
    ]
  },
  {
    slug: 'the-garden-that-wrote-names', chamber: 'gloam-archive',
    image: '/images/universe/garden-wrote-names.webp', readTime: 8, productIds: [],
    titleZh: '会书写名字的五烛花园', titleEn: 'The Five-Candle Garden That Wrote Names',
    dekZh: '黑玫瑰开始拼写尚未出生之人的名字，其中一个名字属于正在阅读花园的你。', dekEn: 'Black roses begin spelling the names of the unborn. One of those names belongs to the person reading the garden.',
    categoryZh: '秘库异闻', categoryEn: 'ARCHIVE ODDITY', eraZh: '大熄灯后三日', eraEn: 'THREE DAYS AFTER DARK',
    quoteZh: '预言最擅长的不是看见未来，而是诱使你亲手完成它。', quoteEn: 'Prophecy does not predict the future. It persuades you to complete it.',
    charactersZh: ['安索｜花园管理员', '无页之书｜没有封面的叙述者'], charactersEn: ['Ansel · keeper of the garden', 'The Pageless Book · narrator without a cover'],
    sectionsZh: [
      { title: '玫瑰的字迹', text: ['星辰离开玻璃后的第三天，花园里的黑玫瑰开始移动。茎秆弯成字母，花苞成为句点，五盏蜡烛依次点燃。', '管理员安索记录下七十二个名字。前七十一个都不属于任何活人，最后一个却是他自己的。'] },
      { title: '没有封面的书', text: ['无页之书告诉他，花园不是预言工具，而是一支笔。谁读懂花朵，谁就会在现实里替它写完句子。', '安索决定闭上眼睛，却发现自己的影子仍在阅读。'] },
      { title: '第五盏蜡烛', text: ['每熄灭一盏蜡烛，一个名字就从花园消失。熄到第四盏时，只剩安索和一个尚未出现的陌生名字。', '第五盏无法吹灭，因为火焰并不在烛芯上，而在读者的注意里。'] },
      { title: '把故事留给后来的人', text: ['安索没有完成预言。他拆散花园，把玫瑰、烛台和石环分别送到四个世界，让句子永远缺少标点。', '其中一件后来抵达黑城堡。每当有人凝视它太久，花瓣便会轻微转动，像是仍在寻找能够写完故事的人。'] }
    ],
    sectionsEn: [
      { title: 'The handwriting of roses', text: ['Three days after the stars escaped, stems bent into letters and buds became punctuation. Five candles lit themselves.', 'Ansel recorded seventy-two names. The first seventy-one belonged to no living person. The last was his.'] },
      { title: 'The book without a cover', text: ['The Pageless Book explained that the garden was not an oracle but a pen. Whoever understood the flowers would finish their sentence in reality.', 'Ansel closed his eyes and discovered his shadow kept reading.'] },
      { title: 'The fifth candle', text: ['Each extinguished flame erased a name. After the fourth, only Ansel and one unborn stranger remained.', 'The fifth could not be blown out because it burned inside the reader’s attention.'] },
      { title: 'Leaving the story unfinished', text: ['Ansel scattered the roses, candles, and stone ring across four worlds so the sentence would never find its final mark.', 'One piece reached the Dark Castle. Its petals still move when watched for too long.'] }
    ]
  },
  {
    slug: 'the-visitor-from-the-tideless-sea', chamber: 'tideless-abyss',
    image: '/images/universe/tideless-sea-visitor.webp', readTime: 10, productIds: [],
    titleZh: '无潮海上的来客', titleEn: 'The Visitor from the Tideless Sea',
    dekZh: '一艘空船归港后，唯一的“幸存者”声称自己不是船员，而是那片海。', dekEn: 'When an empty ship returns, its only “survivor” claims not to be a sailor, but the sea itself.',
    categoryZh: '深渊航海志', categoryEn: 'ABYSSAL VOYAGE', eraZh: '黑船归港之夜', eraEn: 'THE NIGHT THE BLACK SHIP RETURNED',
    quoteZh: '海没有声音。你听见的浪，是它在模仿我们呼吸。', quoteEn: 'The sea has no voice. The waves are only its imitation of breath.',
    charactersZh: ['瑟恩｜静潮领航员', '来客｜借用人形的海'], charactersEn: ['Sern · Stilltide navigator', 'The Visitor · a sea borrowing human shape'],
    sectionsZh: [
      { title: '第七码头的黑船', text: ['黑船撞上码头时没有发出声音，仿佛木头和石头都在水下。领航员瑟恩登船，在船长室发现一名浑身湿透的陌生人。', '陌生人没有影子，鞋底也没有水。他说：“我不是从海上来。我就是海，只是暂时学会了站立。”'] },
      { title: '被锁住的月亮', text: ['来客带瑟恩进入船舱。那里没有货物，只有一口向下延伸的井。井底悬着一轮苍白月亮，被无数骨链固定在黑水中。', '无潮海从不涨落，并非它已经死亡，而是它全部的运动都被月亮的锁链压进梦境。每个沿岸居民所做的共同梦，就是海无法完成的潮汐。'] },
      { title: '海提出的请求', text: ['来客要求瑟恩斩断一根锁链。只需一根，海就能重新呼吸；代价是某座沿海城市将在第一场潮汐中消失。', '瑟恩想起梦盐城。那里的人每晚梦见完整的家园，醒来只拥有半座港口。也许被潮水带走，反而能让城市回到完整的梦里。'] },
      { title: '第一道潮痕', text: ['瑟恩没有斩断锁链，而是把黑船开向世界裂隙，让黑城堡收藏这道无法回答的请求。来客站在船头，身体一点点变回水。', '第二天，第七码头的石阶上出现一道湿痕，比海面高出一寸。孩子们第一次学会“涨潮”这个词，而深海某处，一根骨链发出了即将断裂的声音。'] }
    ],
    sectionsEn: [
      { title: 'The black ship at Pier Seven', text: ['The ship struck without sound. In the captain’s room Sern found a soaked stranger with no shadow and dry footprints.', '“I did not come from the sea,” it said. “I am the sea, briefly taught to stand.”'] },
      { title: 'The chained moon', text: ['Below deck a well descended toward a pale moon fixed in black water by chains of bone.', 'The sea’s movement had been forced into dreams. Every shared coastal dream was a tide the ocean could not complete.'] },
      { title: 'The request', text: ['Break one chain and the sea would breathe again, but one coastal city would vanish beneath the first tide.', 'Perhaps Dreamsalt City, half-real while awake, might become whole inside the water.'] },
      { title: 'The first tide mark', text: ['Sern sailed the request into the world-rift for the Dark Castle to keep unanswered.', 'Next morning a wet line stood one inch above the sea. Children learned the word tide, and far below, one bone chain began to crack.'] }
    ]
  },
  {
    slug: 'the-dream-of-the-octopus-bone-crown', chamber: 'tideless-abyss',
    image: '/images/universe/octopus-bone-crown-dream.webp', readTime: 8, productIds: [],
    titleZh: '章鱼骨王冠的梦', titleEn: 'The Dream of the Octopus-Bone Crown',
    dekZh: '王冠每晚选择一个新的梦者，并借他们的身体建造一座不可能存在于陆地上的宫殿。', dekEn: 'Each night the crown chooses another dreamer and borrows their body to build a palace that cannot exist on land.',
    categoryZh: '深渊梦录', categoryEn: 'ABYSSAL DREAM', eraZh: '骨冠苏醒后', eraEn: 'AFTER THE CROWN WOKE',
    quoteZh: '梦不是发生在睡眠里的地方。睡眠只是梦进入我们的门。', quoteEn: 'Dreams do not happen inside sleep. Sleep is merely their door into us.',
    charactersZh: ['诺娅｜骨冠聆听者', '骨冠｜寻找身体的建筑师'], charactersEn: ['Noa · Listener of the Bone Crown', 'The Crown · an architect seeking a body'],
    sectionsZh: [
      { title: '醒来后的建筑', text: ['诺娅第一次戴上骨冠，只睡了七分钟。醒来时，她的房间多出一根湿漉漉的石柱，柱面雕着她从未学过的语言。', '此后每晚，港口都会增加一小块不属于陆地的建筑：向内弯曲的楼梯、在天花板流动的水井、只允许影子通过的门。'] },
      { title: '王冠的蓝图', text: ['骨冠不是君王的饰物，而是一张会思考的蓝图。它在不同梦者脑中建造同一座宫殿，试图让沉没于海底的意识重新获得形体。', '诺娅听见骨头内部传来缓慢的计数。它不是在计算砖石，而是在计算还需要多少个梦者。'] },
      { title: '第九十九个房间', text: ['宫殿完成第九十八个房间后，整个梦盐城开始在白天透明。居民发现自己的影子已经搬进那座梦中建筑，只剩身体还留在岸上。', '第九十九个房间需要一扇门。骨冠选中了诺娅的头骨。'] },
      { title: '不合尺寸的门', text: ['诺娅把骨冠放在黑城堡收藏室的石座上。城堡不属于海也不属于陆地，它的门永远比进入者的命运窄一寸。', '骨冠无法完成最后的尺寸，宫殿因此停在将成未成之间。如今游客偶尔会梦见第九十九个房间，而门后，总有一片无潮的海耐心等待。'] }
    ],
    sectionsEn: [
      { title: 'Architecture after waking', text: ['Noa wore the crown for seven minutes. She woke beside a wet stone column carved in a language she had never learned.', 'Each night the harbour gained another impossible fragment: inward stairs, ceiling wells, doors that admitted shadows alone.'] },
      { title: 'The crown’s blueprint', text: ['The crown was not regalia but a thinking plan, building the same palace through many dreamers to give a drowned awareness a body.', 'Inside the bone, Noa heard it counting not stones but sleepers.'] },
      { title: 'The ninety-ninth room', text: ['At ninety-eight rooms, Dreamsalt City grew transparent by day. Its shadows had already moved into the dream palace.', 'The final room required a door, and the crown chose Noa’s skull.'] },
      { title: 'A door of the wrong size', text: ['Noa placed the crown inside the Dark Castle, whose doors are always one inch narrower than fate.', 'Unable to finish its measurement, the palace remains almost complete. Visitors sometimes dream of the final room and a tideless sea waiting behind it.'] }
    ]
  }
];

export const findStory = (slug: string) => universeStories.find((story) => story.slug === slug);
