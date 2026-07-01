// ════════════════════════════════════════
//  ことばの旅  —  Episode Data
// ════════════════════════════════════════

// 振り仮名ヘルパー: {漢字|よみ} → <ruby>漢字<rt>よみ</rt></ruby>
function r(s) {
  return s.replace(/\{([^|]+)\|([^}]+)\}/g,
    (_, kanji, furigana) => `<ruby>${kanji}<rt>${furigana}</rt></ruby>`);
}

const episodes = [

  // ── EP 01 空港 ──────────────────────────
  {
    title:    "空港",
    subtitle: "EP 01",
    basePath: "./episodes/EP001_空港/",
    pages: [
      {
        image: "title.png", audio: "title.mp3",
        jpHtml: "空　港", isCover: true, vocab: []
      },
      {
        image: "scene1.png", audio: "s1.mp3",
        jpHtml: `<ruby>空港<rt>くうこう</rt></ruby>は、私が<ruby>出発<rt>しゅっぱつ</rt></ruby>する<ruby>場所<rt>ばしょ</rt></ruby>であり、<br><ruby>到着<rt>とうちゃく</rt></ruby>する<ruby>場所<rt>ばしょ</rt></ruby>でもあります。`,
        zhText: "机场，是我出发的地方，也是我抵达的地方。",
        vocab: [
          { jp: "空港",  reading: "くうこう",   zh: "机场",       grammar: "名詞",         icon: "🛫" },
          { jp: "出発",  reading: "しゅっぱつ", zh: "出发",       grammar: "名詞・する動詞", icon: "🚀" },
          { jp: "到着",  reading: "とうちゃく", zh: "到达",       grammar: "名詞・する動詞", icon: "🛬" },
          { jp: "場所",  reading: "ばしょ",     zh: "地方、场所", grammar: "名詞",          icon: "📍" }
        ]
      },
      {
        image: "scene2.png", audio: "s2.mp3",
        jpHtml: `私は<ruby>空港<rt>くうこう</rt></ruby>で<ruby>待<rt>ま</rt></ruby>ったり、<br>コンビニで<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を<ruby>買<rt>か</rt></ruby>ったりします。`,
        zhText: "我在机场等候，也会去便利店买些轻食。",
        vocab: [
          { jp: "待つ",     reading: "まつ",     zh: "等待",         grammar: "動詞 う-verb",    icon: "⏳" },
          { jp: "コンビニ", reading: "コンビニ", zh: "便利店",       grammar: "名詞（外来語）",  icon: "🏪" },
          { jp: "食べ物",   reading: "たべもの", zh: "食物",         grammar: "名詞",            icon: "🍱" },
          { jp: "買う",     reading: "かう",     zh: "购买",         grammar: "動詞 う-verb",    icon: "🛍️" }
        ]
      },
      {
        image: "scene3.png", audio: "s3.mp3",
        jpHtml: `<ruby>空港<rt>くうこう</rt></ruby>は、いつも私の<ruby>人生<rt>じんせい</rt></ruby>の<ruby>旅<rt>たび</rt></ruby>の<br><ruby>大切<rt>たいせつ</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>です。`,
        zhText: "机场，始终是我人生旅途中，珍贵的一处停靠。",
        vocab: [
          { jp: "いつも", reading: "いつも",   zh: "总是、经常",     grammar: "副詞",           icon: "🔄" },
          { jp: "人生",   reading: "じんせい", zh: "人生",           grammar: "名詞",            icon: "🌟" },
          { jp: "旅",     reading: "たび",     zh: "旅行、旅途",     grammar: "名詞",            icon: "🧳" },
          { jp: "大切",   reading: "たいせつ", zh: "重要的、珍贵的", grammar: "な形容詞",        icon: "💝" }
        ]
      }
    ]
  },

  // ── EP 02 カフェ ─────────────────────────
  {
    title:    "カフェ",
    subtitle: "EP 02",
    basePath: "./episodes/EP002_咖啡馆/",
    pages: [
      {
        image: "title.png", audio: "title.mp3",
        jpHtml: "カフェ", isCover: true, vocab: []
      },
      {
        image: "scene1.png", audio: "s1.mp3",
        jpHtml: `<span class="sp">スタッフ</span>いらっしゃいませ！<br><span class="sp">蘭</span>こんにちは、<ruby>一人<rt>ひとり</rt></ruby>です。<br><span class="sp">スタッフ</span>こちらへどうぞ！`,
        zhText: "店员：欢迎光临！\n蘭：你好，我一个人。\n店员：请往这边走！",
        vocab: [
          { jp: "いらっしゃいませ", reading: "いらっしゃいませ", zh: "欢迎光临",   grammar: "慣用句（敬語）", icon: "🎌" },
          { jp: "一人",             reading: "ひとり",           zh: "一个人",     grammar: "名詞",          icon: "🧍" },
          { jp: "こちら",           reading: "こちら",           zh: "这边、这里", grammar: "指示詞",        icon: "👉" }
        ]
      },
      {
        image: "scene2.png", audio: "s2.mp3",
        jpHtml: `<span class="sp">蘭</span>あのう、すみません。メニューはあまり<ruby>読<rt>よ</rt></ruby>めないので<br><ruby>お勧め<rt>おすすめ</rt></ruby>はありますか？<br><span class="sp">スタッフ</span>はい、<ruby>当店<rt>とうてん</rt></ruby>の<ruby>一番人気<rt>いちばんにんき</rt></ruby>はカフェラテです。`,
        zhText: "蘭：不好意思，我不太看得懂菜单，有什么推荐的吗？\n店员：我们店最受欢迎的是拿铁咖啡。",
        vocab: [
          { jp: "お勧め",   reading: "おすすめ",     zh: "推荐",   grammar: "名詞・する動詞", icon: "⭐" },
          { jp: "読める",   reading: "よめる",       zh: "能看懂、会读", grammar: "動詞（可能形）", icon: "📖" },
          { jp: "当店",     reading: "とうてん",     zh: "本店",   grammar: "名詞（敬語）",   icon: "🏠" },
          { jp: "一番人気", reading: "いちばんにんき", zh: "最受欢迎", grammar: "名詞",         icon: "🔥" }
        ]
      },
      {
        image: "scene3.png", audio: "s3.mp3",
        jpHtml: `<span class="sp">蘭</span>ホットですか。<ruby>私<rt>わたし</rt></ruby>は<ruby>冷<rt>つめ</rt></ruby>たいのが<ruby>好<rt>す</rt></ruby>きですけど。<br><span class="sp">スタッフ</span>そうですか。それでは、アイスカフェラテで<br><ruby>ご用意<rt>ごようい</rt></ruby>いたします。`,
        zhText: "蘭：是热的吗？我比较喜欢冷的。\n店员：这样啊。那我们为您准备冰拿铁。",
        vocab: [
          { jp: "冷たい",   reading: "つめたい", zh: "冷的、凉的",   grammar: "形容詞 い-adj",  icon: "🧊" },
          { jp: "好き",     reading: "すき",     zh: "喜欢",         grammar: "な形容詞",       icon: "💙" },
          { jp: "ご用意",   reading: "ごようい", zh: "为您准备",     grammar: "名詞・する動詞（敬語）", icon: "☕" }
        ]
      },
      {
        image: "scene4.png", audio: "s4.mp3",
        jpHtml: `<span class="sp">蘭</span>ちょっと<ruby>待<rt>ま</rt></ruby>ってね。これ、<ruby>美味<rt>おい</rt></ruby>しそう。<br><span class="sp">スタッフ</span>イチゴショートケーキですね。これも<ruby>人気<rt>にんき</rt></ruby>ありますよ。<br><span class="sp">蘭</span>じゃ、これも<ruby>お願<rt>おねが</rt></ruby>いします。<br><span class="sp">スタッフ</span><ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。`,
        zhText: "蘭：等一下。这个看起来好好吃。\n店员：草莓奶油蛋糕呢，这个也很受欢迎哦。\n蘭：那这个也要。\n店员：好的，请稍等。",
        vocab: [
          { jp: "美味しそう",       reading: "おいしそう",         zh: "看起来好吃",   grammar: "形容詞（様態）",  icon: "🍓" },
          { jp: "人気",             reading: "にんき",             zh: "受欢迎、人气", grammar: "名詞",            icon: "🔥" },
          { jp: "少々お待ちください", reading: "しょうしょうおまちください", zh: "请稍等", grammar: "慣用句（敬語）", icon: "⏱️" }
        ]
      }
    ]
  },

  // ── EP 03 電話をかける ───────────────────
  {
    title:    "電話をかける",
    subtitle: "EP 03",
    basePath: "./episodes/EP003_打电话/",
    pages: [
      {
        image: "title.png", audio: "title.mp3",
        jpHtml: r(`{電話|でんわ}をかける`), isCover: true, vocab: []
      },
      {
        image: "scene1.png", audio: "s1.mp3",
        jpHtml: r(`<span class="sp">{渡辺|わたなべ}さん</span>もしもし、{渡辺|わたなべ}です。<br><span class="sp">蘭</span>もしもし、{邵|しょう}です。<br><span class="sp">{渡辺|わたなべ}さん</span>{明日|あした}、{空|あ}いていますか？<br><span class="sp">蘭</span>{明日|あした}の{午後|ごご}は{空|あ}いていますよ。{何|なん}ですか？`),
        zhText: "渡辺：喂，我是渡辺。\n蘭：喂，我是邵。\n渡辺：明天有空吗？\n蘭：明天下午有空哦。怎么了？",
        vocab: [
          { jp: "もしもし",   reading: "もしもし",   zh: "喂（打电话用语）", grammar: "慣用句" },
          { jp: "空いている", reading: "あいている", zh: "有空、空着",       grammar: "動詞" },
          { jp: "午後",       reading: "ごご",       zh: "下午",            grammar: "名詞" }
        ]
      },
      {
        image: "scene2.png", audio: "s2.mp3",
        jpHtml: r(`<span class="sp">{渡辺|わたなべ}さん</span>バスケットボールやりましょうか。<br><span class="sp">蘭</span>やりたいですけど、{天気予報|てんきよほう}を{聞|き}きましたか？<br><span class="sp">{渡辺|わたなべ}さん</span>いや、{聞|き}いていないですけど……`),
        zhText: "渡辺：要不要打篮球？\n蘭：想打，但你看天气预报了吗？\n渡辺：没有……没看。",
        vocab: [
          { jp: "天気予報",    reading: "てんきよほう", zh: "天气预报",        grammar: "名詞" },
          { jp: "〜ましょうか", reading: "〜ましょうか", zh: "要不要〜（提议）", grammar: "助動詞" }
        ]
      },
      {
        image: "scene3.png", audio: "s3.mp3",
        jpHtml: r(`<span class="sp">蘭</span>{明日|あした}はすごい{雨|あめ}が{降|ふ}りますよ。<br><span class="sp">{渡辺|わたなべ}さん</span>うそ！<br><span class="sp">蘭</span>うそじゃないですよ。{残念|ざんねん}。<br><span class="sp">{渡辺|わたなべ}さん</span>じゃ、{来週|らいしゅう}にしましょうか。`),
        zhText: "蘭：明天会下好大的雨哦。\n渡辺：不会吧！\n蘭：不是骗你。真遗憾。\n渡辺：那，改成下周吧？",
        vocab: [
          { jp: "雨が降る", reading: "あめがふる", zh: "下雨",        grammar: "動詞句" },
          { jp: "うそ",     reading: "うそ",       zh: "谎话、不会吧", grammar: "名詞／感動詞" },
          { jp: "残念",     reading: "ざんねん",   zh: "遗憾、可惜",  grammar: "ナ形容詞" },
          { jp: "来週",     reading: "らいしゅう", zh: "下周",        grammar: "名詞" }
        ]
      }
    ]
  },

  // ── EP 04 チョコレート ───────────────────
  {
    title:    "チョコレート",
    subtitle: "EP 04",
    basePath: "./episodes/EP004_巧克力/",
    pages: [
      {
        image: "title.png", audio: "title.mp3",
        jpHtml: r(`チョコレート`), isCover: true, vocab: []
      },
      {
        image: "scene1.png", audio: "s1.mp3",
        jpHtml: r(`<span class="sp">蘭</span>{友達|ともだち}にプレゼントをあげたいですけど。<br>　{何|なに}がいいかな。{困|こま}りますね。`),
        zhText: "蘭：我想送朋友礼物，送什么好呢。真让人烦恼。",
        vocab: [
          { jp: "プレゼント", reading: "ぷれぜんと", zh: "礼物",        grammar: "名詞" },
          { jp: "あげる",     reading: "あげる",     zh: "给（对方）",  grammar: "動詞" },
          { jp: "困る",       reading: "こまる",     zh: "为难、烦恼",  grammar: "動詞" }
        ]
      },
      {
        image: "scene2.png", audio: "s2.mp4",
        jpHtml: r(`<span class="sp">店員</span>プレゼントでしたら、チョコレートをお{勧|すす}めします。<br><span class="sp">蘭</span>{確|たし}かに{包装|ほうそう}が{綺麗|きれい}ですね。<br><span class="sp">店員</span>{地元|じもと}の{特色|とくしょく}もあります。それに、<br>　{二|ふた}つ{買|か}うと{割引|わりびき}があります。`),
        zhText: "店员：如果是礼物的话，推荐巧克力。\n蘭：确实包装很漂亮呢。\n店员：也有当地特色。而且，买两个有折扣。",
        vocab: [
          { jp: "お勧め",  reading: "おすすめ",   zh: "推荐",   grammar: "名詞／動詞" },
          { jp: "確かに",  reading: "たしかに",   zh: "确实",   grammar: "副詞" },
          { jp: "包装",    reading: "ほうそう",   zh: "包装",   grammar: "名詞" },
          { jp: "地元",    reading: "じもと",     zh: "当地",   grammar: "名詞" },
          { jp: "割引",    reading: "わりびき",   zh: "折扣",   grammar: "名詞" }
        ]
      },
      {
        image: "scene3.png", audio: "s3.mp4",
        jpHtml: r(`<span class="sp">蘭</span>いいですね。それでは、２つをお{願|ねが}いします。<br><span class="sp">店員</span>はい、かしこまりました。<br><span class="sp">蘭</span>お{会計|かいけい}はカードでいいですか。<br><span class="sp">店員</span>もちろんです。`),
        zhText: "蘭：不错。那就要两个吧。\n店员：好的，明白了。\n蘭：结账可以刷卡吗？\n店员：当然可以。",
        vocab: [
          { jp: "かしこまりました", reading: "かしこまりました", zh: "明白了（敬语）", grammar: "慣用句" },
          { jp: "お会計",          reading: "おかいけい",       zh: "结账",          grammar: "名詞" },
          { jp: "もちろん",        reading: "もちろん",         zh: "当然",          grammar: "副詞" }
        ]
      },
      {
        image: "scene4.png", audio: "s4.mp4",
        jpHtml: r(`<span class="sp">蘭</span>あのう、{明日|あした}も{割引|わりびき}がありますか？<br><span class="sp">店員</span>え、なんですか？<br><span class="sp">蘭</span>{財布|さいふ}をホテルに{忘|わす}れました。`),
        zhText: "蘭：那个……明天也有折扣吗？\n店员：嗯？什么？\n蘭：我把钱包忘在酒店了。",
        vocab: [
          { jp: "財布",    reading: "さいふ",   zh: "钱包",  grammar: "名詞" },
          { jp: "忘れる",  reading: "わすれる", zh: "忘记",  grammar: "動詞" },
          { jp: "〜に忘れる", reading: "〜にわすれる", zh: "忘在〜（地方）", grammar: "動詞句" }
        ]
      }
    ]
  }

];

// ════════════════════════════════════════
//  State
// ════════════════════════════════════════
let currentEp = 0;
let episode   = episodes[currentEp];
let idx       = 0;
let busy      = false;
let playing   = false;

// ════════════════════════════════════════
//  DOM
// ════════════════════════════════════════
const illusWrap  = document.getElementById('illus-wrap');
const illusImg   = document.getElementById('illus-img');
const epTitle    = document.getElementById('ep-title');
const storyJp    = document.getElementById('story-jp');
const storyZh    = document.getElementById('rp-zh');
const pgNum      = document.getElementById('pg-num');
const vocabStack = document.getElementById('vocab-stack');
const audioEl    = document.getElementById('audio');
const playIcon   = document.getElementById('play-icon');
const btnPlay    = document.getElementById('btn-play');
const btnPrev    = document.getElementById('btn-prev');
const btnNext    = document.getElementById('btn-next');

// ════════════════════════════════════════
//  Render
// ════════════════════════════════════════
function applyContent() {
  const p     = episode.pages[idx];
  const total = episode.pages.length;

  epTitle.textContent = episode.title;
  illusImg.src = episode.basePath + p.image;

  const book = document.getElementById('book');
  book.classList.toggle('cover-page', !!p.isCover);
  book.classList.toggle('has-prev', !!p.isCover && currentEp > 0);
  const epLbl = document.getElementById('cover-ep-label');
  if (epLbl) epLbl.textContent = p.isCover ? episode.title : '';

  if (p.isCover) {
    storyJp.innerHTML = '';
    storyZh.textContent = '';
    pgNum.textContent = '';
  } else {
    storyJp.innerHTML = p.jpHtml;
    storyJp.style.cssText = '';
    storyZh.innerHTML = (p.zhText || '').replace(/\n/g, '<br>');
    pgNum.textContent =
      `${String(idx).padStart(2,'0')} / ${String(total - 1).padStart(2,'0')}`;
  }

  renderVocab(p.vocab);

  audioEl.src = episode.basePath + p.audio;
  audioEl.load();
  stopPlay();
  audioEl.play().catch(() => {});  // 进入页面自动播放，浏览器拦截时静默忽略

  btnPrev.disabled = idx === 0 && currentEp === 0;
  btnNext.disabled = idx === total - 1 && currentEp === episodes.length - 1;
  updateLabelState();
}

function renderVocab(vocab) {
  vocabStack.innerHTML = '';
  if (!vocab || vocab.length === 0) {
    const el = document.createElement('p');
    el.className = 'vc-empty';
    el.textContent = 'ことばメモなし';
    vocabStack.appendChild(el);
    return;
  }
  vocab.forEach((v, i) => {
    const card = document.createElement('div');
    card.className = 'vc';
    card.style.setProperty('--d', `${i * 0.06}s`);
    card.innerHTML = `
      <div class="vc-body">
        <div class="vc-text">
          <div class="vc-top">
            <span class="vc-jp">${v.jp}</span>
            <span class="vc-zh">${v.zh}<span class="vc-grammar">（${v.grammar}）</span></span>
          </div>
          <div class="vc-reading">${v.reading}</div>
        </div>
        <div class="vc-icon">${VOCAB_ICONS[v.jp] || v.icon || ''}</div>
      </div>
    `;
    vocabStack.appendChild(card);
  });
}

// ════════════════════════════════════════
//  Episode Menu
// ════════════════════════════════════════
function openMenu() {
  const menu = document.getElementById('ep-menu');
  const grid = document.getElementById('ep-grid');
  grid.innerHTML = '';
  episodes.forEach((ep, i) => {
    const card = document.createElement('div');
    card.className = 'ep-card' + (i === currentEp ? ' active' : '');
    card.innerHTML = `
      <img class="ep-card-img" src="${ep.basePath}title.png" alt="${ep.title}">
      <div class="ep-card-info">
        <span class="ep-card-sub">${ep.subtitle}</span>
        <span class="ep-card-title">${ep.title}</span>
      </div>
    `;
    card.onclick = () => { switchEpisode(i); closeMenu(); };
    grid.appendChild(card);
  });
  menu.classList.add('open');
}

function closeMenu() {
  document.getElementById('ep-menu').classList.remove('open');
}

function switchEpisode(i) {
  if (i < 0 || i >= episodes.length) return;
  currentEp = i;
  episode   = episodes[i];
  idx       = 0;
  applyContent();
}

// ════════════════════════════════════════
//  Navigation
// ════════════════════════════════════════
function nextPage() {
  if (busy) return;
  if (idx >= episode.pages.length - 1) {
    // 当前集最后一页 → 自动进入下一集封面
    if (currentEp < episodes.length - 1) {
      switchEpisode(currentEp + 1);
    }
    return;
  }
  busy = true;
  idx++;
  applyContent();
  busy = false;
}

function prevPage() {
  if (busy) return;
  if (idx <= 0) {
    // 封面页 → 返回上一集最后一页
    if (currentEp > 0) {
      currentEp--;
      episode = episodes[currentEp];
      idx = episode.pages.length - 1;
      applyContent();
    }
    return;
  }
  busy = true;
  idx--;
  applyContent();
  busy = false;
}

const splashAudio = new Audio('assets/cover.mp3');

// 封面第一次被触碰时启动音效（绕过浏览器自动播放限制）
document.addEventListener('DOMContentLoaded', () => {
  const splashBook = document.querySelector('.splash-book');
  if (splashBook) {
    splashBook.addEventListener('pointerdown', () => {
      splashAudio.play().catch(() => {});
    }, { once: true });
  }
});

function closeSplash() {
  const splash = document.getElementById('splash');
  splash.classList.add('hidden');
  splashAudio.pause();
  splashAudio.currentTime = 0;
  setTimeout(() => splash.style.display = 'none', 600);
  openMenu();
}

function goHome() {
  if (busy) return;
  openMenu();
}

function goToSplash() {
  closeMenu();
  const splash = document.getElementById('splash');
  splash.style.display = 'flex';
  requestAnimationFrame(() => splash.classList.remove('hidden'));
}

function setBookmark() {
  localStorage.setItem('kotoba_bookmark', JSON.stringify({ ep: currentEp, page: idx }));
  document.getElementById('btn-label').classList.add('marked');
}

function goToBookmark() {
  const bm = localStorage.getItem('kotoba_bookmark');
  if (!bm) return;
  const { ep, page } = JSON.parse(bm);
  closeMenu();
  switchEpisode(ep);
  idx = page;
  applyContent();
}

function updateLabelState() {
  const bm = localStorage.getItem('kotoba_bookmark');
  const btn = document.getElementById('btn-label');
  if (!btn) return;
  if (bm) {
    const { ep, page } = JSON.parse(bm);
    btn.classList.toggle('marked', ep === currentEp && page === idx);
  } else {
    btn.classList.remove('marked');
  }
}

// ════════════════════════════════════════
//  Audio
// ════════════════════════════════════════
function togglePlay() {
  playing ? audioEl.pause() : audioEl.play().catch(() => {});
}
function stopPlay() {
  audioEl.pause();
  playing = false;
  playIcon.src = 'assets/icons/play.png';
  btnPlay.classList.remove('on');
}
audioEl.addEventListener('play', () => {
  playing = true;
  playIcon.src = 'assets/icons/pause.png';
  btnPlay.classList.add('on');
});
audioEl.addEventListener('pause', stopPlay);
audioEl.addEventListener('ended', stopPlay);

// ════════════════════════════════════════
//  Keyboard
// ════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextPage();
  if (e.key === 'ArrowLeft')  prevPage();
  if (e.key === ' ')          { e.preventDefault(); togglePlay(); }
});

// ════════════════════════════════════════
//  Init
// ════════════════════════════════════════
document.getElementById('ep-menu').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeMenu();
});

applyContent();
