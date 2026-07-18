export type CultureLocale = 'zh' | 'en';

type LocalText = {
  name: string;
  epithet: string;
  intro: string;
  legend: string;
  landmarks: { name: string; text: string }[];
  factions: { name: string; text: string }[];
  timeline: { date: string; title: string; text: string }[];
  productTitle: string;
};

export type CultureChamber = {
  slug: string;
  number: string;
  tone: 'gothic' | 'wild' | 'occult' | 'cosmic';
  glyph: string;
  position: { x: number; y: number };
  productIds: string[];
  zh: LocalText;
  en: LocalText;
};

export const universeEpoch = {
  zh: '暮辉纪 427 年。四轮暗月同时升起，失落的道路重新连接。矗立于世界裂隙中央的黑城堡再次开门，收容从四境带回的故事与遗物。',
  en: 'Year 427 of the Gloaming Age. Four dark moons rise together and the lost roads reconnect. At the world-rift, the Dark Castle opens again to receive stories and relics from four realms.'
};

export const chambers: CultureChamber[] = [
  {
    slug: 'obsidian-court', number: '01', tone: 'gothic', glyph: '✦', position: { x: 27, y: 38 }, productIds: ['DC-006', 'DC-007', 'DC-010'],
    zh: {
      name: '黑曜王庭', epithet: '永夜钟声统治的山脊之国',
      intro: '这里的太阳在两百年前停止升起。贵族用钟声计算时间，石像替死者保存记忆，而每一扇彩窗都映出一个尚未发生的葬礼。',
      legend: '王庭相信，只要第十三口钟仍然沉默，埋在城下的旧王就不会醒来。如今，守钟人失踪了。',
      landmarks: [
        { name: '无晨大教堂', text: '十三座钟塔围绕一口从未敲响的黑钟。' },
        { name: '羽骨长廊', text: '历代审判官的翼骨被铸入墙中，夜里仍会低语。' },
        { name: '玫瑰墓园', text: '花朵从石棺里生长，每一朵都记得死者最后一句话。' }
      ],
      factions: [
        { name: '守钟修会', text: '守护时间秩序与十三口钟的沉默誓言。' },
        { name: '黑羽审判庭', text: '佩戴金翼面具，追捕从未来逃回的人。' }
      ],
      timeline: [
        { date: '暮辉前 02 年', title: '最后一次日出', text: '太阳停在地平线下，王庭开始用钟声划分昼夜。' },
        { date: '暮辉纪 113 年', title: '羽骨审判', text: '第一位长翼者被判无罪，却自愿留在教堂守门。' },
        { date: '暮辉纪 427 年', title: '第十三钟失窃', text: '一口从未存在于名册上的小钟出现在黑城堡。' }
      ], productTitle: '来自黑曜王庭的遗物'
    },
    en: {
      name: 'The Obsidian Court', epithet: 'A ridge kingdom ruled by bells of endless night',
      intro: 'The sun stopped rising two centuries ago. Nobles measure time by bells, statues preserve the dead, and every stained window reflects a funeral yet to happen.',
      legend: 'The Court believes the buried king will sleep while the thirteenth bell remains silent. Now the bell keeper is missing.',
      landmarks: [
        { name: 'Cathedral of No Dawn', text: 'Thirteen towers surround a black bell that has never rung.' },
        { name: 'Gallery of Wingbone', text: 'The judges’ wings were cast into its walls and still whisper.' },
        { name: 'The Rose Necropolis', text: 'Flowers grow from sarcophagi and remember each final word.' }
      ],
      factions: [
        { name: 'The Bellward Order', text: 'Keepers of measured time and the vow of thirteen silences.' },
        { name: 'The Blackwing Tribunal', text: 'Gold-masked hunters of those who flee backward from the future.' }
      ],
      timeline: [
        { date: '2 Before Gloaming', title: 'The final sunrise', text: 'The sun stops below the ridge and bells divide night from night.' },
        { date: 'Gloaming 113', title: 'The Wingbone Trial', text: 'The first winged one is acquitted, yet remains to guard the door.' },
        { date: 'Gloaming 427', title: 'The stolen thirteenth bell', text: 'A bell absent from every record appears inside the Dark Castle.' }
      ], productTitle: 'Relics of the Obsidian Court'
    }
  },
  {
    slug: 'stagcrown-wilds', number: '02', tone: 'wild', glyph: '♜', position: { x: 67, y: 27 }, productIds: ['DC-002', 'DC-011', 'DC-003'],
    zh: {
      name: '鹿冠荒野', epithet: '森林会移动，名字会生根',
      intro: '荒野没有固定边界。古树在雾中迁徙，河流选择自己的源头，戴鹿角王冠的人必须每年把一个名字归还给森林。',
      legend: '白树即将第九次开花。传说花开之夜，森林会挑选新王；被挑中的人，将被所有人遗忘。',
      landmarks: [
        { name: '白根圣林', text: '树根像道路一样通往每一个做过同样梦的人。' },
        { name: '空王座', text: '由活藤编成，拒绝承认任何永久的主人。' },
        { name: '猫眼沼泽', text: '数百双琥珀色眼睛在水下替森林守夜。' }
      ],
      factions: [
        { name: '鹿冠守望者', text: '维持人类聚落与迁徙森林之间的古老契约。' },
        { name: '无名猎团', text: '主动舍弃名字，以换取穿越树根道路的能力。' }
      ],
      timeline: [
        { date: '树历 01 年', title: '第一棵树开始行走', text: '荒野从旧大陆剥离，朝月亮的方向迁徙。' },
        { date: '树历 309 年', title: '空王座拒绝加冕', text: '七位候选人同时被藤蔓推下王座。' },
        { date: '暮辉纪 427 年', title: '白树第九次含苞', text: '全境猎犬同时向黑城堡的方向低吼。' }
      ], productTitle: '来自鹿冠荒野的遗物'
    },
    en: {
      name: 'The Stagcrown Wilds', epithet: 'Where forests move and names take root',
      intro: 'The Wilds have no fixed border. Ancient trees migrate through fog, rivers choose their own source, and the wearer of the antler crown must return one name to the forest each year.',
      legend: 'The White Tree is about to flower for the ninth time. On that night the forest chooses a new sovereign—one everyone else must forget.',
      landmarks: [
        { name: 'The White-Root Grove', text: 'Its roots lead toward everyone who has dreamed the same dream.' },
        { name: 'The Empty Throne', text: 'Woven from living vines, it refuses every permanent master.' },
        { name: 'Cat-Eye Fen', text: 'Hundreds of amber eyes keep watch beneath the water.' }
      ],
      factions: [
        { name: 'Stagcrown Wardens', text: 'Keepers of the old covenant between settlements and the moving forest.' },
        { name: 'The Nameless Hunt', text: 'Hunters who surrender their names to travel the roads beneath roots.' }
      ],
      timeline: [
        { date: 'Tree Year 01', title: 'The first walking tree', text: 'The Wilds break from the old continent and begin migrating toward the moon.' },
        { date: 'Tree Year 309', title: 'The throne refuses a crown', text: 'Living vines throw all seven candidates to the ground.' },
        { date: 'Gloaming 427', title: 'The ninth flowering', text: 'Every hound in the realm growls toward the Dark Castle.' }
      ], productTitle: 'Relics of the Stagcrown Wilds'
    }
  },
  {
    slug: 'gloam-archive', number: '03', tone: 'occult', glyph: '◉', position: { x: 44, y: 68 }, productIds: ['DC-013', 'DC-009', 'DC-012'],
    zh: {
      name: '微光秘库', epithet: '知识会反过来阅读它的读者',
      intro: '这座城市没有街道，只有不断重排的书架。占星师用蜡烛保存梦，抄写员把危险的名字锁进玻璃，而秘库深处有一本正在书写所有来访者的书。',
      legend: '每隔九十九年，秘库会熄灭全部灯火，让一段被删除的历史自行选择新的读者。今晚正是第九十九年。',
      landmarks: [
        { name: '倒置天文台', text: '望远镜朝向地底，观测尚未出生的星辰。' },
        { name: '五烛花园', text: '黑玫瑰围绕五盏不会被风吹灭的灯生长。' },
        { name: '无页书库', text: '书没有纸页，故事寄存在读者的影子里。' }
      ],
      factions: [
        { name: '玻璃抄写员', text: '把名字、誓言和梦封存在可编号的容器中。' },
        { name: '最后点灯人', text: '负责在知识开始反噬城市时逐层熄灯。' }
      ],
      timeline: [
        { date: '秘库纪 01 年', title: '第一盏梦烛点燃', text: '一位无影之人将自己的童年封进火焰。' },
        { date: '秘库纪 198 年', title: '书架第一次重排城市', text: '三条街道和四百名居民被移动到同一本书里。' },
        { date: '暮辉纪 427 年', title: '大熄灯前夜', text: '一本空白书在封面写下黑城堡的名字。' }
      ], productTitle: '来自微光秘库的遗物'
    },
    en: {
      name: 'The Gloam Archive', epithet: 'Where knowledge reads its reader',
      intro: 'The city has no streets, only shelves that rearrange themselves. Astrologers preserve dreams in candles, scribes lock dangerous names in glass, and one book writes every visitor into itself.',
      legend: 'Every ninety-nine years every lamp is extinguished, allowing an erased history to choose a new reader. Tonight begins the ninety-ninth year.',
      landmarks: [
        { name: 'The Inverted Observatory', text: 'Its lenses face underground toward stars not yet born.' },
        { name: 'The Five-Candle Garden', text: 'Black roses circle flames no wind can extinguish.' },
        { name: 'The Pageless Library', text: 'Stories are stored inside the shadows of their readers.' }
      ],
      factions: [
        { name: 'The Glass Scribes', text: 'They seal names, vows, and dreams inside numbered vessels.' },
        { name: 'The Last Lamplighters', text: 'They darken the city floor by floor when knowledge begins to feed.' }
      ],
      timeline: [
        { date: 'Archive 01', title: 'The first dream candle', text: 'A shadowless visitor seals her childhood inside a flame.' },
        { date: 'Archive 198', title: 'The shelves rearrange the city', text: 'Three streets and four hundred people move into the same book.' },
        { date: 'Gloaming 427', title: 'Eve of the Great Extinguishing', text: 'A blank volume writes DARK CASTLE upon its own cover.' }
      ], productTitle: 'Relics of the Gloam Archive'
    }
  },
  {
    slug: 'tideless-abyss', number: '04', tone: 'cosmic', glyph: '⌁', position: { x: 76, y: 68 }, productIds: ['DC-008', 'DC-004', 'DC-005'],
    zh: {
      name: '无潮深渊', epithet: '大海沉睡在天空下面',
      intro: '这里的海从不涨潮，因为月亮被锁在海底。沿岸居民用鲸骨建造房屋，梦见同一座沉没城市，并相信每个人出生前都曾在深海拥有另一个名字。',
      legend: '第七码头收到一艘没有船员的黑船。船舱里只有一顶章鱼骨王冠，以及一张标着黑城堡位置的海图。',
      landmarks: [
        { name: '第七码头', text: '所有失踪的船最终都会回来，却从不带回原来的船员。' },
        { name: '沉星海沟', text: '海底闪烁的不是鱼群，而是坠落后仍然燃烧的星。' },
        { name: '梦盐城', text: '城市只在睡眠中完整，醒来后仅剩半座港口。' }
      ],
      factions: [
        { name: '静潮领航员', text: '不用罗盘，只依靠共同梦境在黑海航行。' },
        { name: '骨冠聆听者', text: '记录从深海骨骼内部传出的缓慢语言。' }
      ],
      timeline: [
        { date: '潮前 700 年', title: '月亮坠海', text: '最后一次潮汐抬起整座城市，又将它放回梦里。' },
        { date: '潮前 01 年', title: '所有钟表停止', text: '海岸时间开始跟随睡眠而不是太阳。' },
        { date: '暮辉纪 427 年', title: '黑船归港', text: '章鱼骨王冠第一次在无人佩戴时开口。' }
      ], productTitle: '来自无潮深渊的遗物'
    },
    en: {
      name: 'The Tideless Abyss', epithet: 'Where the sea sleeps beneath the sky',
      intro: 'The sea never rises because the moon is chained below. Coastal people build with whale bone, dream of the same drowned city, and believe everyone carried another name before birth.',
      legend: 'A crewless black ship returns to Pier Seven. Its hold contains an octopus-bone crown and a chart marked with the location of the Dark Castle.',
      landmarks: [
        { name: 'Pier Seven', text: 'Every lost ship returns here, but never with its former crew.' },
        { name: 'The Fallen-Star Trench', text: 'The lights below are stars that kept burning after they drowned.' },
        { name: 'Dreamsalt City', text: 'Whole in sleep, the city wakes as only half a harbour.' }
      ],
      factions: [
        { name: 'Stilltide Navigators', text: 'They sail without compasses, following a dream shared by the crew.' },
        { name: 'Listeners of the Bone Crown', text: 'They record the slow language spoken from inside deep-sea bones.' }
      ],
      timeline: [
        { date: '700 Before Tide', title: 'The moon falls', text: 'The last tide lifts a whole city and lowers it into a dream.' },
        { date: '1 Before Tide', title: 'Every clock stops', text: 'Coastal time begins to follow sleep instead of the sun.' },
        { date: 'Gloaming 427', title: 'The black ship returns', text: 'The octopus-bone crown speaks for the first time without a wearer.' }
      ], productTitle: 'Relics of the Tideless Abyss'
    }
  }
];

export const findChamber = (slug: string) => chambers.find((chamber) => chamber.slug === slug);
