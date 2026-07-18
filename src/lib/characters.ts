export type UniverseCharacter = {
  id: string;
  chamber: string;
  glyph: string;
  nameZh: string; nameEn: string;
  roleZh: string; roleEn: string;
  bioZh: string; bioEn: string;
  storySlugs: string[];
};

export const universeCharacters: UniverseCharacter[] = [
  { id:'mira', chamber:'obsidian-court', glyph:'钟', nameZh:'弥拉', nameEn:'Mira', roleZh:'无龄见习守钟人', roleEn:'Ageless bell apprentice', bioZh:'她的年龄在最后一次日出时停止。如今，她掌握着让时间重新前进的第十三声。', bioEn:'Her age stopped at the final sunrise. Now she holds the thirteenth chime that may restart time.', storySlugs:['the-bell-that-never-saw-dawn'] },
  { id:'odren', chamber:'obsidian-court', glyph:'羽', nameZh:'奥德林', nameEn:'Odren', roleZh:'失踪的第十三守钟人', roleEn:'Missing thirteenth keeper', bioZh:'他把自己铸进钟里，只为给黎明留下最后一种可能。', bioEn:'He cast himself into the bell to preserve one final possibility of dawn.', storySlugs:['the-bell-that-never-saw-dawn'] },
  { id:'caelis', chamber:'obsidian-court', glyph:'翼', nameZh:'赛勒斯', nameEn:'Caelis', roleZh:'长翼审判官', roleEn:'The Winged Judge', bioZh:'被王庭写成圣人的囚犯，醒来后决定审判制造圣像的世界。', bioEn:'A prisoner rewritten as a saint who wakes to judge the world that made his image.', storySlugs:['the-thirteenth-trial-of-the-winged-judge'] },
  { id:'evren', chamber:'stagcrown-wilds', glyph:'鹿', nameZh:'伊芙兰', nameEn:'Evren', roleZh:'无名猎人', roleEn:'The Nameless Hunter', bioZh:'她折断王冠，拒绝让任何人替森林承担遗忘。', bioEn:'She broke the crown and refused to let any one life carry the forest’s forgetting.', storySlugs:['the-empty-throne-of-stagcrown'] },
  { id:'greyear', chamber:'stagcrown-wilds', glyph:'犬', nameZh:'灰耳', nameEn:'Greyear', roleZh:'最后一只记名猎犬', roleEn:'Last hound of names', bioZh:'森林能吃掉名字，却无法夺走他记住回家气味的能力。', bioEn:'The forest can swallow names, but never his memory of the scent of home.', storySlugs:['the-empty-throne-of-stagcrown','the-hound-beneath-the-white-tree'] },
  { id:'moss', chamber:'stagcrown-wilds', glyph:'苔', nameZh:'小苔', nameEn:'Moss', roleZh:'白树的新守名者', roleEn:'New keeper beneath the White Tree', bioZh:'失去名字的女孩，从一只老犬那里继承了两声不会消失的呼唤。', bioEn:'A nameless child who inherits two syllables that will not disappear.', storySlugs:['the-hound-beneath-the-white-tree'] },
  { id:'luce', chamber:'gloam-archive', glyph:'星', nameZh:'露珂', nameEn:'Luce', roleZh:'玻璃占星师', roleEn:'Glass astrologer', bioZh:'她熄灭最后一盏灯，把被城市收藏的星空还给宇宙。', bioEn:'She extinguished the final lamp and returned the city’s collected sky to the universe.', storySlugs:['the-last-lamp-of-the-glass-astrologer'] },
  { id:'seven', chamber:'gloam-archive', glyph:'火', nameZh:'七号', nameEn:'Seven', roleZh:'会梦见火焰的抄写人偶', roleEn:'Scribe-doll that dreams of flame', bioZh:'编号制造的身体里，燃起了第一团未被任何书记录的火。', bioEn:'Inside a numbered body burns the first flame no book has recorded.', storySlugs:['the-last-lamp-of-the-glass-astrologer'] },
  { id:'ansel', chamber:'gloam-archive', glyph:'蔷', nameZh:'安索', nameEn:'Ansel', roleZh:'五烛花园管理员', roleEn:'Keeper of the Five-Candle Garden', bioZh:'他拆散一则预言，把无法完成的句子送往四境。', bioEn:'He dismantled a prophecy and scattered its unfinished sentence across four realms.', storySlugs:['the-garden-that-wrote-names'] },
  { id:'sern', chamber:'tideless-abyss', glyph:'舵', nameZh:'瑟恩', nameEn:'Sern', roleZh:'静潮领航员', roleEn:'Stilltide navigator', bioZh:'他拒绝替海决定哪座城市应该消失，把问题驶入黑城堡。', bioEn:'He refused to choose which city the sea should take and sailed the question into the Dark Castle.', storySlugs:['the-visitor-from-the-tideless-sea'] },
  { id:'visitor', chamber:'tideless-abyss', glyph:'潮', nameZh:'来客', nameEn:'The Visitor', roleZh:'暂时学会站立的海', roleEn:'A sea briefly taught to stand', bioZh:'它借来人形，只为了请求人类归还一场潮汐。', bioEn:'It borrows a human shape only to ask humanity for the return of one tide.', storySlugs:['the-visitor-from-the-tideless-sea'] },
  { id:'noa', chamber:'tideless-abyss', glyph:'梦', nameZh:'诺娅', nameEn:'Noa', roleZh:'骨冠聆听者', roleEn:'Listener of the Bone Crown', bioZh:'她把一座梦中宫殿永远停在最后一扇门之前。', bioEn:'She halted a dream-palace forever before its final door.', storySlugs:['the-dream-of-the-octopus-bone-crown'] }
];
