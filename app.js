// ════════════════════════════════════════
//  ことばの旅  —  Episode Data
// ════════════════════════════════════════

const CDN = "https://cdn.jsdelivr.net/gh/hedafa/kotoba-no-tabi@main/";

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
    basePath: CDN + "episodes/EP001_空港/",
    pages: [
      {
        image: "title.webp", audio: "title.mp3",
        jpHtml: r(`{空港|くうこう}`), isCover: true, vocab: []
      },
      {
        image: "scene1.webp", audio: "s1.mp3",
        jpHtml: r(`{私|わたし}の{日常生活|にちじょうせいかつ}は、{出張|しゅっちょう}が{多|おお}いのでよく{空港|くうこう}へ{行|い}きます。<br>{空港|くうこう}に{行|い}って、また{空港|くうこう}から{出発|しゅっぱつ}します。`),
        zhText: "我的日常生活，因为出差多，所以经常去机场。去了机场，又从机场出发。",
        vocab: [
          { jp: "日常生活", reading: "にちじょうせいかつ", zh: "日常生活", grammar: "名詞" },
          { jp: "出張",     reading: "しゅっちょう",       zh: "出差",    grammar: "名詞" },
          { jp: "出発",     reading: "しゅっぱつ",         zh: "出发",    grammar: "名詞・する動詞" }
        ]
      },
      {
        image: "scene2.webp", audio: "s2.mp3",
        jpHtml: r(`{時間|じかん}があれば、コンビニで{食|た}べ{物|もの}を{買|か}います。`),
        zhText: "如果有时间，会在便利店买些吃的。",
        vocab: [
          { jp: "〜があれば", reading: "〜があれば", zh: "如果有〜",  grammar: "表現" },
          { jp: "コンビニ",   reading: "こんびに",   zh: "便利店",   grammar: "名詞" },
          { jp: "食べ物",     reading: "たべもの",   zh: "食物",     grammar: "名詞" }
        ]
      },
      {
        image: "scene3.webp", audio: "s3.mp3",
        jpHtml: r(`{海外|かいがい}では、お{土産|みやげ}の{店|みせ}でお{土産|みやげ}を{買|か}います。`),
        zhText: "在海外，会在伴手礼店买伴手礼。",
        vocab: [
          { jp: "海外",   reading: "かいがい", zh: "海外、国外", grammar: "名詞" },
          { jp: "お土産", reading: "おみやげ", zh: "伴手礼",     grammar: "名詞" },
          { jp: "店",     reading: "みせ",     zh: "店",         grammar: "名詞" }
        ]
      },
      {
        image: "scene4.webp", audio: "s4.mp3",
        jpHtml: r(`{待|ま}っている{時|とき}に、{仕事|しごと}をすることもありますよ。<br>{会社|かいしゃ}を{経営|けいえい}している{私|わたし}にとっては、<br>{仕事|しごと}が{一番|いちばん}{重要|じゅうよう}なことですから。`),
        zhText: "等待的时候，也会工作哦。对于经营公司的我来说，工作是最重要的事情。",
        vocab: [
          { jp: "経営する",  reading: "けいえいする", zh: "经营",        grammar: "動詞" },
          { jp: "〜にとって", reading: "〜にとって", zh: "对〜来说",     grammar: "表現" },
          { jp: "重要",      reading: "じゅうよう",  zh: "重要",         grammar: "ナ形容詞" }
        ]
      },
      {
        image: "scene5.webp", audio: "s5.mp3",
        jpHtml: r(`{今|いま}の{私|わたし}は{何|なに}を{考|かんが}えていますか？{当|あ}ててみて？<br>{飛行機|ひこうき}の{弁当|べんとう}のことを{考|かんが}えていますよ！`),
        zhText: "现在的我在想什么？你猜猜看？我在想飞机上的便当！",
        vocab: [
          { jp: "当てる",  reading: "あてる",   zh: "猜中",  grammar: "動詞" },
          { jp: "飛行機",  reading: "ひこうき", zh: "飞机",  grammar: "名詞" },
          { jp: "弁当",    reading: "べんとう", zh: "便当",  grammar: "名詞" }
        ]
      }
    ]
  },

  // ── EP 02 カフェ ─────────────────────────
  {
    title:    "カフェ",
    subtitle: "EP 02",
    basePath: CDN + "episodes/EP002_咖啡馆/",
    pages: [
      {
        image: "title.webp", audio: "title.mp3",
        jpHtml: "カフェ", isCover: true, vocab: []
      },
      {
        image: "scene1.webp", audio: "s1.mp3",
        jpHtml: `<span class="sp">スタッフ</span>いらっしゃいませ！<br><span class="sp">蘭</span>こんにちは、<ruby>一人<rt>ひとり</rt></ruby>です。<br><span class="sp">スタッフ</span>こちらへどうぞ！`,
        zhText: "店员：欢迎光临！\n蘭：你好，我一个人。\n店员：请往这边走！",
        vocab: [
          { jp: "いらっしゃいませ", reading: "いらっしゃいませ", zh: "欢迎光临",   grammar: "慣用句（敬語）", icon: "🎌" },
          { jp: "一人",             reading: "ひとり",           zh: "一个人",     grammar: "名詞",          icon: "🧍" },
          { jp: "こちら",           reading: "こちら",           zh: "这边、这里", grammar: "指示詞",        icon: "👉" }
        ]
      },
      {
        image: "scene2.webp", audio: "s2.mp3",
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
        image: "scene3.webp", audio: "s3.mp3",
        jpHtml: `<span class="sp">蘭</span>ホットですか。<ruby>私<rt>わたし</rt></ruby>は<ruby>冷<rt>つめ</rt></ruby>たいのが<ruby>好<rt>す</rt></ruby>きですけど。<br><span class="sp">スタッフ</span>そうですか。それでは、アイスカフェラテで<br><ruby>ご用意<rt>ごようい</rt></ruby>いたします。`,
        zhText: "蘭：是热的吗？我比较喜欢冷的。\n店员：这样啊。那我们为您准备冰拿铁。",
        vocab: [
          { jp: "冷たい",   reading: "つめたい", zh: "冷的、凉的",   grammar: "形容詞 い-adj",  icon: "🧊" },
          { jp: "好き",     reading: "すき",     zh: "喜欢",         grammar: "な形容詞",       icon: "💙" },
          { jp: "ご用意",   reading: "ごようい", zh: "为您准备",     grammar: "名詞・する動詞（敬語）", icon: "☕" }
        ]
      },
      {
        image: "scene4.webp", audio: "s4.mp3",
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
    basePath: CDN + "episodes/EP003_打电话/",
    pages: [
      {
        image: "title.webp", audio: "title.mp3",
        jpHtml: r(`{電話|でんわ}をかける`), isCover: true, vocab: []
      },
      {
        image: "scene1.webp", audio: "s1.mp3",
        jpHtml: r(`<span class="sp">{渡辺|わたなべ}さん</span>もしもし、{渡辺|わたなべ}です。<br><span class="sp">蘭</span>もしもし、{邵|しょう}です。<br><span class="sp">{渡辺|わたなべ}さん</span>{明日|あした}、{空|あ}いていますか？<br><span class="sp">蘭</span>{明日|あした}の{午後|ごご}は{空|あ}いていますよ。{何|なん}ですか？`),
        zhText: "渡辺：喂，我是渡辺。\n蘭：喂，我是邵。\n渡辺：明天有空吗？\n蘭：明天下午有空哦。怎么了？",
        vocab: [
          { jp: "もしもし",   reading: "もしもし",   zh: "喂（打电话用语）", grammar: "慣用句" },
          { jp: "空いている", reading: "あいている", zh: "有空、空着",       grammar: "動詞" },
          { jp: "午後",       reading: "ごご",       zh: "下午",            grammar: "名詞" }
        ]
      },
      {
        image: "scene2.webp", audio: "s2.mp3",
        jpHtml: r(`<span class="sp">{渡辺|わたなべ}さん</span>バスケットボールやりましょうか。<br><span class="sp">蘭</span>やりたいですけど、{天気予報|てんきよほう}を{聞|き}きましたか？<br><span class="sp">{渡辺|わたなべ}さん</span>いや、{聞|き}いていないですけど……`),
        zhText: "渡辺：要不要打篮球？\n蘭：想打，但你看天气预报了吗？\n渡辺：没有……没看。",
        vocab: [
          { jp: "天気予報",    reading: "てんきよほう", zh: "天气预报",        grammar: "名詞" },
          { jp: "〜ましょうか", reading: "〜ましょうか", zh: "要不要〜（提议）", grammar: "助動詞" }
        ]
      },
      {
        image: "scene3.webp", audio: "s3.mp3",
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
    basePath: CDN + "episodes/EP004_巧克力/",
    pages: [
      {
        image: "title.webp", audio: "title.mp3",
        jpHtml: r(`チョコレート`), isCover: true, vocab: []
      },
      {
        image: "scene1.webp", audio: "s1.mp3",
        jpHtml: r(`<span class="sp">蘭</span>{友達|ともだち}にプレゼントをあげたいですけど。<br>　{何|なに}がいいかな。{困|こま}りますね。`),
        zhText: "蘭：我想送朋友礼物，送什么好呢。真让人烦恼。",
        vocab: [
          { jp: "プレゼント", reading: "ぷれぜんと", zh: "礼物",        grammar: "名詞" },
          { jp: "あげる",     reading: "あげる",     zh: "给（对方）",  grammar: "動詞" },
          { jp: "困る",       reading: "こまる",     zh: "为难、烦恼",  grammar: "動詞" }
        ]
      },
      {
        image: "scene2.webp", audio: "s2.mp3",
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
        image: "scene3.webp", audio: "s3.mp3",
        jpHtml: r(`<span class="sp">蘭</span>いいですね。それでは、２つをお{願|ねが}いします。<br><span class="sp">店員</span>はい、かしこまりました。<br><span class="sp">蘭</span>お{会計|かいけい}はカードでいいですか。<br><span class="sp">店員</span>もちろんです。`),
        zhText: "蘭：不错。那就要两个吧。\n店员：好的，明白了。\n蘭：结账可以刷卡吗？\n店员：当然可以。",
        vocab: [
          { jp: "かしこまりました", reading: "かしこまりました", zh: "明白了（敬语）", grammar: "慣用句" },
          { jp: "お会計",          reading: "おかいけい",       zh: "结账",          grammar: "名詞" },
          { jp: "もちろん",        reading: "もちろん",         zh: "当然",          grammar: "副詞" }
        ]
      },
      {
        image: "scene4.webp", audio: "s4.mp3",
        jpHtml: r(`<span class="sp">蘭</span>あのう、{明日|あした}も{割引|わりびき}がありますか？<br><span class="sp">店員</span>え、なんですか？<br><span class="sp">蘭</span>{財布|さいふ}をホテルに{忘|わす}れました。`),
        zhText: "蘭：那个……明天也有折扣吗？\n店员：嗯？什么？\n蘭：我把钱包忘在酒店了。",
        vocab: [
          { jp: "財布",    reading: "さいふ",   zh: "钱包",  grammar: "名詞" },
          { jp: "忘れる",  reading: "わすれる", zh: "忘记",  grammar: "動詞" },
          { jp: "〜に忘れる", reading: "〜にわすれる", zh: "忘在〜（地方）", grammar: "動詞句" }
        ]
      }
    ]
  },

  // ── EP 05 映画館 ───────────────────
  {
    title:    "映画館",
    subtitle: "EP 05",
    basePath: CDN + "episodes/EP005_电影/",
    pages: [
      {
        image: "title.webp", audio: "title.mp3",
        jpHtml: r(`{映画館|えいがかん}`), isCover: true, vocab: []
      },
      {
        image: "scene1.webp", audio: "s1.mp3",
        jpHtml: r(`<span class="sp">{田中|たなか}さん</span>どれも{面白|おもしろ}そうですね。<br><span class="sp">蘭</span>そうですね、{何|なに}を{見|み}たらいいでしょうか。`),
        zhText: "田中：每一部看起来都很有趣呢。\n蘭：是啊，看什么好呢。",
        vocab: [
          { jp: "面白い",     reading: "おもしろい", zh: "有趣",    grammar: "イ形容詞" },
          { jp: "〜そう",     reading: "〜そう",     zh: "看起来〜", grammar: "助動詞" },
          { jp: "〜たらいい", reading: "〜たらいい", zh: "〜好呢",   grammar: "表現" }
        ]
      },
      {
        image: "scene2.webp", audio: "s2.mp3",
        jpHtml: r(`<span class="sp">{田中|たなか}さん</span>{邵|しょう}さんはどんな{種類|しゅるい}の{映画|えいが}が{好|す}きですか？<br><span class="sp">蘭</span>アクションとホラーかな。{田中|たなか}さんは？<br><span class="sp">{田中|たなか}さん</span>{探偵|たんてい}が{一番|いちばん}{好|す}きです。<br><span class="sp">蘭</span>あ、なるほど。ドキドキして{面白|おもしろ}いですね。`),
        zhText: "田中：邵小姐喜欢什么类型的电影？\n蘭：动作和恐怖片吧。田中你呢？\n田中：我最喜欢侦探片。\n蘭：啊，原来如此。让人心跳加速，很有意思呢。",
        vocab: [
          { jp: "種類",       reading: "しゅるい",  zh: "种类",     grammar: "名詞" },
          { jp: "探偵",       reading: "たんてい",  zh: "侦探",     grammar: "名詞" },
          { jp: "なるほど",   reading: "なるほど",  zh: "原来如此", grammar: "感動詞" },
          { jp: "ドキドキ",   reading: "どきどき",  zh: "心跳加速", grammar: "副詞" }
        ]
      },
      {
        image: "scene3.webp", audio: "s3.mp3",
        jpHtml: r(`<span class="sp">{田中|たなか}さん</span>でもポスターを{見|み}るとアクションもホラーも{探偵|たんてい}もないですね。<br><span class="sp">蘭</span>それではこれ、{恋愛|れんあい}のテーマのものにしましょう。`),
        zhText: "田中：但是看海报，动作、恐怖、侦探片都没有呢。\n蘭：那就选这个吧，恋爱主题的。",
        vocab: [
          { jp: "ポスター",      reading: "ぽすたー",      zh: "海报",    grammar: "名詞" },
          { jp: "恋愛",          reading: "れんあい",      zh: "恋爱",    grammar: "名詞" },
          { jp: "テーマ",        reading: "てーま",        zh: "主题",    grammar: "名詞" },
          { jp: "〜にしましょう", reading: "〜にしましょう", zh: "就定〜吧", grammar: "表現" }
        ]
      },
      {
        image: "scene4.webp", audio: "s4.mp3",
        jpHtml: r(`<span class="sp">{田中|たなか}さん</span>{僕|ぼく}、{泣|な}きますからいやです。<br><span class="sp">蘭</span>{田中|たなか}さんは{泣|な}きますか？じゃ、これにしましょう。<br>　{僕|ぼく}はチケットを{買|か}ってきます。`),
        zhText: "田中：我会哭的，不太好。\n蘭：田中你会哭啊？那就选这个吧。我去买票。",
        vocab: [
          { jp: "泣く",       reading: "なく",       zh: "哭",     grammar: "動詞" },
          { jp: "いやだ",     reading: "いやだ",     zh: "不喜欢", grammar: "ナ形容詞" },
          { jp: "チケット",   reading: "ちけっと",   zh: "票",     grammar: "名詞" },
          { jp: "買ってくる", reading: "かってくる", zh: "去买来", grammar: "動詞" }
        ]
      }
    ]
  },

  // ── EP 06 朝ごはん ───────────────────
  {
    title:    "朝ごはん",
    subtitle: "EP 06",
    basePath: CDN + "episodes/EP006_早饭/",
    pages: [
      {
        image: "title.webp", audio: "title.mp3",
        jpHtml: r(`{朝|あさ}ごはん`), isCover: true, vocab: []
      },
      {
        image: "scene1.webp", audio: "s1.mp3",
        jpHtml: r(`{毎日|まいにち}、{朝|あさ}ごはんは{何|なに}を{食|た}べますか？<br>{中国|ちゅうごく}では、{朝|あさ}ごはんに{饅頭|まんとう}やお{粥|かゆ}、{卵|たまご}を<br>{食|た}べる{習慣|しゅうかん}があります。`),
        zhText: "每天早饭吃什么？在中国，早饭有吃馒头、粥、鸡蛋的习惯。",
        vocab: [
          { jp: "朝ごはん", reading: "あさごはん", zh: "早饭",  grammar: "名詞" },
          { jp: "饅頭",     reading: "まんとう",   zh: "馒头",  grammar: "名詞" },
          { jp: "習慣",     reading: "しゅうかん", zh: "习惯",  grammar: "名詞" }
        ]
      },
      {
        image: "scene2.webp", audio: "s2.mp3",
        jpHtml: r(`アメリカでは、パンとコーヒーでしょう。`),
        zhText: "在美国，应该是面包和咖啡吧。",
        vocab: [
          { jp: "〜でしょう", reading: "〜でしょう", zh: "应该是〜吧", grammar: "表現" },
          { jp: "パン",       reading: "ぱん",       zh: "面包",      grammar: "名詞" }
        ]
      },
      {
        image: "scene3.webp", audio: "s3.mp3",
        jpHtml: r(`フランスはどうでしょうか？{私|わたし}は{行|い}ったことがありますよ。<br>あそこの{朝|あさ}ごはんは……タバコです。<br>ははは、{冗談|じょうだん}です、{冗談|じょうだん}です。`),
        zhText: "法国怎么样呢？我去过哦。那里的早饭是……香烟。哈哈哈，开玩笑的，开玩笑的。",
        vocab: [
          { jp: "〜たことがある", reading: "〜たことがある", zh: "曾经做过〜", grammar: "表現" },
          { jp: "冗談",           reading: "じょうだん",     zh: "玩笑",      grammar: "名詞" }
        ]
      },
      {
        image: "scene4.webp", audio: "s4.mp3",
        jpHtml: r(`{日本|にほん}にはまだ{行|い}ったことがありませんが、<br>{大切|たいせつ}なのは{食事|しょくじ}の{前|まえ}に「いただきます」と{言|い}うことです。<br>{神様|かみさま}に{対|たい}して、{感謝|かんしゃ}の{気持|きも}ちを{持|も}つことが{大切|たいせつ}です。`),
        zhText: "我还没去过日本，但重要的是饭前说「いただきます」。对神灵抱有感恩之心，这很重要。",
        vocab: [
          { jp: "いただきます", reading: "いただきます",   zh: "我开动了（饭前用语）", grammar: "慣用句" },
          { jp: "神様",         reading: "かみさま",       zh: "神、神灵",             grammar: "名詞" },
          { jp: "感謝",         reading: "かんしゃ",       zh: "感谢",                 grammar: "名詞・する動詞" }
        ]
      },
      {
        image: "scene5.webp", audio: "s5.mp3",
        jpHtml: r(`{私|わたし}の{秘密|ひみつ}を{聞|き}きたいですか？<br>{実|じつ}は、{神様|かみさま}よりもマクドナルドに{感謝|かんしゃ}しています。<br>{内緒|ないしょ}にしてね！`),
        zhText: "想听我的秘密吗？其实，比起神灵，我更感谢麦当劳。保密哦！",
        vocab: [
          { jp: "秘密",  reading: "ひみつ",   zh: "秘密",     grammar: "名詞" },
          { jp: "実は",  reading: "じつは",   zh: "其实",     grammar: "副詞" },
          { jp: "内緒",  reading: "ないしょ", zh: "秘密、保密", grammar: "名詞" }
        ]
      }
    ]
  },

  // ── EP 07 スーパー ───────────────────
  {
    title:    "スーパー",
    subtitle: "EP 07",
    basePath: CDN + "episodes/EP008_超市/",
    pages: [
      {
        image: "title.webp", audio: "title.mp3",
        jpHtml: r(`スーパー`), isCover: true, vocab: []
      },
      {
        image: "scene1.webp", audio: "s1.mp3",
        jpHtml: r(`<span class="sp">蘭</span>リンゴが{食|た}べたいです。<br><span class="sp">{渡辺|わたなべ}</span>でも{見|み}て、この{西瓜|すいか}、{大|おお}きいですね。`),
        zhText: "蘭：我想吃苹果。\n渡辺：但是你看，这个西瓜好大啊。",
        vocab: [
          { jp: "リンゴ",   reading: "りんご",   zh: "苹果",   grammar: "名詞" },
          { jp: "西瓜",     reading: "すいか",   zh: "西瓜",   grammar: "名詞" },
          { jp: "〜たい",   reading: "〜たい",   zh: "想〜",   grammar: "助動詞" }
        ]
      },
      {
        image: "scene2.webp", audio: "s2.mp3",
        jpHtml: r(`<span class="sp">蘭</span>{重|おも}いでしょう。{私|わたし}も{一緒|いっしょ}に{持|も}ちましょう。<br><span class="sp">{渡辺|わたなべ}</span>ありがとうございます。カートに{入|い}れましょう。`),
        zhText: "蘭：很重吧。我也一起拿吧。\n渡辺：谢谢。放进购物车吧。",
        vocab: [
          { jp: "重い",     reading: "おもい",   zh: "重",      grammar: "イ形容詞" },
          { jp: "一緒に",   reading: "いっしょに", zh: "一起",  grammar: "副詞" },
          { jp: "カート",   reading: "かーと",   zh: "购物车",  grammar: "名詞" }
        ]
      },
      {
        image: "scene3.webp", audio: "s3.mp3",
        jpHtml: r(`<span class="sp">蘭</span>{後|あと}は{牛乳|ぎゅうにゅう}とパンですね。{明日|あした}の{朝|あさ}ごはんに{食|た}べます。<br><span class="sp">{渡辺|わたなべ}</span>それではお{会計|かいけい}しますね。{買|か}い{物|もの}リストをチェックしましょう。<br><span class="sp">蘭</span>あ、ビールを{忘|わす}れました。`),
        zhText: "蘭：还有牛奶和面包吧。明天早饭吃。\n渡辺：那去结账吧。检查一下购物清单。\n蘭：啊，忘了啤酒了。",
        vocab: [
          { jp: "牛乳",       reading: "ぎゅうにゅう", zh: "牛奶",    grammar: "名詞" },
          { jp: "買い物リスト", reading: "かいものりすと", zh: "购物清单", grammar: "名詞" },
          { jp: "忘れる",     reading: "わすれる",     zh: "忘记",    grammar: "動詞" }
        ]
      },
      {
        image: "scene4.webp", audio: "s4.mp3",
        jpHtml: r(`<span class="sp">{渡辺|わたなべ}</span>{大丈夫|だいじょうぶ}。ビールはコンビニで{買|か}いましょう。<br><span class="sp">蘭</span>え、どうして？`),
        zhText: "渡辺：没关系。啤酒去便利店买吧。\n蘭：哦？为什么？",
        vocab: [
          { jp: "大丈夫", reading: "だいじょうぶ", zh: "没关系、没问题", grammar: "ナ形容詞" },
          { jp: "どうして", reading: "どうして",   zh: "为什么",        grammar: "副詞" }
        ]
      },
      {
        image: "scene5.webp", audio: "s5.mp3",
        jpHtml: r(`<span class="sp">{渡辺|わたなべ}</span>コンビニの{店員|てんいん}さん、かっこいいですよ。`),
        zhText: "渡辺：便利店的店员，很帅哦。",
        vocab: [
          { jp: "店員",     reading: "てんいん", zh: "店员",   grammar: "名詞" },
          { jp: "かっこいい", reading: "かっこいい", zh: "帅气、酷", grammar: "イ形容詞" }
        ]
      }
    ]
  },

  // ── EP 08 暑い ───────────────────
  {
    title:    "暑い",
    subtitle: "EP 08",
    basePath: CDN + "episodes/EP007_热/",
    pages: [
      {
        image: "title.webp", audio: "title.mp3",
        jpHtml: r(`{暑|あつ}い`), isCover: true, vocab: []
      },
      {
        image: "scene1.webp", audio: "s1.mp3",
        jpHtml: r(`<span class="sp">蘭</span>おはようございます。<br><span class="sp">{渡辺|わたなべ}</span>おはようございます。<br><span class="sp">蘭</span>{今日|きょう}は{暑|あつ}いですね。<br><span class="sp">{渡辺|わたなべ}</span>そうですね。{雨|あめ}が{降|ふ}った{後|あと}、{蒸|む}し{暑|あつ}くなりますね。`),
        zhText: "蘭：早上好。\n渡辺：早上好。\n蘭：今天好热啊。\n渡辺：是啊。下完雨之后会变得闷热呢。",
        vocab: [
          { jp: "暑い",   reading: "あつい",     zh: "热",    grammar: "イ形容詞" },
          { jp: "蒸し暑い", reading: "むしあつい", zh: "闷热", grammar: "イ形容詞" },
          { jp: "〜後",   reading: "〜あと",     zh: "〜之后", grammar: "表現" }
        ]
      },
      {
        image: "scene2.webp", audio: "s2.mp3",
        jpHtml: r(`<span class="sp">蘭</span>{今年|ことし}の{天気|てんき}はおかしいですよね。{渡辺|わたなべ}さんの{故郷|こきょう}はどうですか？<br><span class="sp">{渡辺|わたなべ}</span>{私|わたし}の{故郷|こきょう}は{今|いま}、{梅雨|つゆ}ですよ。{梅雨|つゆ}が{終|お}わると、めちゃくちゃ{暑|あつ}くなります。<br><span class="sp">蘭</span>そうですか。{大変|たいへん}ですね。`),
        zhText: "蘭：今年的天气真奇怪。渡辺老家那边怎么样？\n渡辺：我老家现在是梅雨季节。梅雨结束之后会超级热。\n蘭：这样啊。真辛苦呢。",
        vocab: [
          { jp: "故郷",       reading: "こきょう",     zh: "故乡、老家",   grammar: "名詞" },
          { jp: "梅雨",       reading: "つゆ",         zh: "梅雨季节",     grammar: "名詞" },
          { jp: "めちゃくちゃ", reading: "めちゃくちゃ", zh: "超级、非常",  grammar: "副詞" }
        ]
      },
      {
        image: "scene3.webp", audio: "s3.mp3",
        jpHtml: r(`<span class="sp">{渡辺|わたなべ}</span>そうだ、これを{食|た}べてください。<br><span class="sp">蘭</span>え？{渡辺|わたなべ}さん、カバンの{中|なか}にアイスクリームも{入|はい}っていますか？`),
        zhText: "渡辺：对了，请吃这个。\n蘭：哦？渡辺，包包里面还有冰淇淋吗？",
        vocab: [
          { jp: "カバン",       reading: "かばん",       zh: "包、包包",  grammar: "名詞" },
          { jp: "アイスクリーム", reading: "あいすくりーむ", zh: "冰淇淋", grammar: "名詞" },
          { jp: "〜の中に",     reading: "〜のなかに",   zh: "在〜里面",  grammar: "表現" }
        ]
      },
      {
        image: "scene4.webp", audio: "s4.mp3",
        jpHtml: r(`<span class="sp">{渡辺|わたなべ}</span>ええ、チョコレートと{苺|いちご}、どっちがいいですか？<br><span class="sp">蘭</span>へへへ、{僕|ぼく}、マンゴが{好|す}きですけど。`),
        zhText: "渡辺：是啊，巧克力和草莓，哪个好？\n蘭：嘿嘿嘿，我喜欢芒果。",
        vocab: [
          { jp: "苺",     reading: "いちご", zh: "草莓",          grammar: "名詞" },
          { jp: "どっち", reading: "どっち", zh: "哪个（两者中）", grammar: "代名詞" },
          { jp: "マンゴ", reading: "まんご", zh: "芒果",          grammar: "名詞" }
        ]
      },
      {
        image: "scene5.webp", audio: "s5.mp3",
        jpHtml: r(`<span class="sp">{渡辺|わたなべ}</span>ごめんなさい。これしかありません。`),
        zhText: "渡辺：对不起。只有这个了。",
        vocab: [
          { jp: "〜しかない", reading: "〜しかない", zh: "只有〜", grammar: "表現" }
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
  const newSrc = episode.basePath + p.image;
  if (illusImg.src !== newSrc) {
    illusImg.style.opacity = '0';
    illusImg.onload = () => { illusImg.style.opacity = '1'; };
    illusImg.src = newSrc;
  }

  // 预加载下一页图片和音频
  const next = episode.pages[idx + 1];
  if (next) {
    const pre = new Image(); pre.src = episode.basePath + next.image;
    const preAudio = new Audio(); preAudio.preload = 'auto'; preAudio.src = episode.basePath + next.audio;
  }

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
      <img class="ep-card-img" src="${ep.basePath}title.webp" alt="${ep.title}">
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

document.addEventListener('DOMContentLoaded', () => {
  // 页面加载后立即播放封面音效，浏览器拦截则等用户第一次点击再播
  splashAudio.play().catch(() => {
    document.addEventListener('pointerdown', () => {
      splashAudio.play().catch(() => {});
    }, { once: true });
  });

  // 后台预加载所有集封面图和第一集第一场景
  setTimeout(() => {
    episodes.forEach((ep, i) => {
      const img = new Image();
      img.src = ep.basePath + 'title.webp';
      if (i === 0) {
        const img2 = new Image();
        img2.src = ep.basePath + 'scene1.webp';
      }
    });
  }, 1000);
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
  playIcon.src = 'assets/icons/play.webp';
  btnPlay.classList.remove('on');
}
audioEl.addEventListener('play', () => {
  playing = true;
  playIcon.src = 'assets/icons/pause.webp';
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
