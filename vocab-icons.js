// ════════════════════════════════════════
//  黏土风格 SVG 图标库
//  - 柔和渐变模拟黏土圆润感
//  - feDisplacementMap 让边缘有手工捏制感
//  - feTurbulence + feBlend 增加表面纹理
//  - CSS drop-shadow 由父元素提供
// ════════════════════════════════════════

const VOCAB_ICONS = {};

// 每个图标通用的黏土纹理滤镜（seed 不同产生不同纹理）
function clayFilter(id, seed = 1) {
  return `<filter id="${id}" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="4" seed="${seed}" result="wn"/>
    <feDisplacementMap in="SourceGraphic" in2="wn" scale="2.4" xChannelSelector="R" yChannelSelector="G" result="warped"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" seed="${seed + 10}" result="grain"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94 0 0 0 0 0.82 0 0 0 0.09 0" in="grain" result="tg"/>
    <feBlend in="warped" in2="tg" mode="multiply" result="tx"/>
    <feComposite in="tx" in2="warped" operator="in"/>
  </filter>`;
}

// ─── 空港 (airport) — 胖圆飞机，蓝调 ───────────────────────────────
VOCAB_ICONS['空港'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_kk" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#c8e0f8"/>
    <stop offset="100%" stop-color="#4e82b8"/>
  </radialGradient>
  ${clayFilter('f_kk', 1)}
</defs>
<path d="M27 37 Q15 46 8 48 Q14 40 27 37Z" fill="#5c8ec8"/>
<path d="M11 35 Q8 24 14 25 L19 33Z" fill="#5080b8"/>
<ellipse cx="30" cy="34" rx="20" ry="8.5" fill="url(#rg_kk)" filter="url(#f_kk)"/>
<ellipse cx="48" cy="34" rx="5.5" ry="7.5" fill="#80acd8"/>
<path d="M26 30 Q14 19 7 17 Q12 27 26 30Z" fill="#72a4d4"/>
<ellipse cx="37" cy="31" rx="2.8" ry="2.2" fill="#ddf0ff" opacity="0.9"/>
<ellipse cx="30" cy="31" rx="2.8" ry="2.2" fill="#ddf0ff" opacity="0.85"/>
<ellipse cx="24" cy="31" rx="2.2" ry="2.2" fill="#ddf0ff" opacity="0.8"/>
<ellipse cx="28" cy="27" rx="10" ry="3" fill="white" opacity="0.30"/>
</svg>`;

// ─── 出発 (departure) — 敞开的门，温橙 ─────────────────────────────
VOCAB_ICONS['出発'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_sp" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#f8d0a0"/>
    <stop offset="100%" stop-color="#c07838"/>
  </radialGradient>
  ${clayFilter('f_sp', 2)}
</defs>
<rect x="13" y="11" width="30" height="40" rx="7" fill="#c88040" filter="url(#f_sp)"/>
<rect x="16" y="14" width="24" height="34" rx="6" fill="url(#rg_sp)" filter="url(#f_sp)"/>
<ellipse cx="24" cy="28" rx="7" ry="9" fill="white" opacity="0.20"/>
<path d="M30 31 L42 31 M37 26 L42 31 L37 36"
      stroke="white" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.88"/>
<circle cx="34" cy="32" r="2.2" fill="#e8b868" opacity="0.7"/>
<ellipse cx="22" cy="19" rx="5" ry="3.5" fill="white" opacity="0.22"/>
</svg>`;

// ─── 到着 (arrival) — 向下箭头+地面，草绿 ───────────────────────────
VOCAB_ICONS['到着'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_ta" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#b8ddb8"/>
    <stop offset="100%" stop-color="#4a8858"/>
  </radialGradient>
  ${clayFilter('f_ta', 3)}
</defs>
<rect x="10" y="46" width="40" height="9" rx="4.5" fill="#58a068" filter="url(#f_ta)"/>
<rect x="25" y="10" width="10" height="26" rx="5" fill="url(#rg_ta)" filter="url(#f_ta)"/>
<path d="M16 28 L30 48 L44 28Z" fill="url(#rg_ta)" filter="url(#f_ta)"/>
<ellipse cx="29" cy="22" rx="3" ry="7" fill="white" opacity="0.26"/>
<ellipse cx="26" cy="35" rx="5" ry="3.5" fill="white" opacity="0.20" transform="rotate(-10,26,35)"/>
<ellipse cx="18" cy="50" rx="6" ry="2.5" fill="white" opacity="0.22"/>
</svg>`;

// ─── 場所 (place) — 地图钉，玫瑰红 ─────────────────────────────────
VOCAB_ICONS['場所'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_bs" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#f0c0c0"/>
    <stop offset="100%" stop-color="#b85858"/>
  </radialGradient>
  ${clayFilter('f_bs', 4)}
</defs>
<circle cx="30" cy="24" r="16" fill="url(#rg_bs)" filter="url(#f_bs)"/>
<path d="M22 34 Q30 54 30 54 Q30 54 38 34Z" fill="#c06868" filter="url(#f_bs)"/>
<circle cx="30" cy="24" r="7.5" fill="white" opacity="0.88"/>
<circle cx="30" cy="24" r="4.5" fill="#d47878"/>
<ellipse cx="23" cy="17" rx="5.5" ry="4.5" fill="white" opacity="0.32"/>
</svg>`;

// ─── 待つ (wait) — 砂漏，浅紫 ──────────────────────────────────────
VOCAB_ICONS['待つ'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_mt" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#d8c8f0"/>
    <stop offset="100%" stop-color="#8060c0"/>
  </radialGradient>
  ${clayFilter('f_mt', 5)}
</defs>
<rect x="14" y="8"  width="32" height="6" rx="3" fill="#9870d0" filter="url(#f_mt)"/>
<rect x="14" y="46" width="32" height="6" rx="3" fill="#9870d0" filter="url(#f_mt)"/>
<path d="M17 14 Q17 30 30 30 Q43 30 43 14Z" fill="url(#rg_mt)" filter="url(#f_mt)"/>
<path d="M17 46 Q17 30 30 30 Q43 30 43 46Z" fill="url(#rg_mt)" filter="url(#f_mt)"/>
<ellipse cx="30" cy="44" rx="10" ry="4.5" fill="#b090e0" opacity="0.55"/>
<ellipse cx="24" cy="18" rx="4.5" ry="5.5" fill="white" opacity="0.26"/>
<rect x="27" y="27.5" width="6" height="5" rx="2.5" fill="#b898e0" opacity="0.7"/>
</svg>`;

// ─── コンビニ (convenience store) — 小店铺，薄荷绿 ────────────────────
VOCAB_ICONS['コンビニ'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_cv" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#a8dcd8"/>
    <stop offset="100%" stop-color="#3e8880"/>
  </radialGradient>
  ${clayFilter('f_cv', 6)}
</defs>
<rect x="9"  y="22" width="42" height="32" rx="6" fill="url(#rg_cv)" filter="url(#f_cv)"/>
<rect x="7"  y="16" width="46" height="10" rx="5" fill="#4e9c98" filter="url(#f_cv)"/>
<rect x="11" y="18" width="38" height="6"  rx="3" fill="#72bab6"/>
<rect x="12" y="30" width="10" height="8"  rx="3" fill="#c8efec" opacity="0.7"/>
<rect x="38" y="30" width="10" height="8"  rx="3" fill="#c8efec" opacity="0.7"/>
<rect x="23" y="38" width="14" height="16" rx="3" fill="#c8efec" opacity="0.65"/>
<ellipse cx="30" cy="20" rx="13" ry="2.5" fill="white" opacity="0.28"/>
<ellipse cx="18" cy="33" rx="3.5" ry="2.5" fill="white" opacity="0.18"/>
</svg>`;

// ─── 軽い (light) — 羽毛，薰衣草紫 ─────────────────────────────────
VOCAB_ICONS['軽い'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_kr" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#dcd4f8"/>
    <stop offset="100%" stop-color="#8870c8"/>
  </radialGradient>
  ${clayFilter('f_kr', 7)}
</defs>
<path d="M30 7 Q50 20 46 46 Q30 36 18 28 Q14 18 30 7Z" fill="url(#rg_kr)" filter="url(#f_kr)"/>
<path d="M30 7 Q35 28 28 54" stroke="#a090e0" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M35 18 Q28 23 23 30" stroke="white" stroke-width="1.3" fill="none" opacity="0.48"/>
<path d="M38 25 Q30 30 26 37" stroke="white" stroke-width="1.3" fill="none" opacity="0.40"/>
<path d="M39 33 Q33 37 29 43" stroke="white" stroke-width="1.3" fill="none" opacity="0.32"/>
<ellipse cx="36" cy="17" rx="6" ry="9" fill="white" opacity="0.24" transform="rotate(-28,36,17)"/>
</svg>`;

// ─── 食べ物 (food) — 饭碗+蒸汽，暖橙 ──────────────────────────────
VOCAB_ICONS['食べ物'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_tb" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#f8d0a8"/>
    <stop offset="100%" stop-color="#b87840"/>
  </radialGradient>
  <radialGradient id="rg_tb2" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#fffaf0"/>
    <stop offset="100%" stop-color="#ece0c0"/>
  </radialGradient>
  ${clayFilter('f_tb', 8)}
</defs>
<path d="M9 36 Q9 56 30 56 Q51 56 51 36Z" fill="url(#rg_tb)" filter="url(#f_tb)"/>
<ellipse cx="30" cy="36" rx="21" ry="6.5" fill="#c89060"/>
<ellipse cx="30" cy="31" rx="18" ry="8.5" fill="url(#rg_tb2)" filter="url(#f_tb)"/>
<ellipse cx="23" cy="29" rx="3.5" ry="2.8" fill="white" opacity="0.48"/>
<ellipse cx="30" cy="27" rx="4"   ry="2.8" fill="white" opacity="0.42"/>
<ellipse cx="37" cy="29" rx="3.5" ry="2.8" fill="white" opacity="0.48"/>
<path d="M23 22 Q21 17 23 12" stroke="#c8b888" stroke-width="2"   fill="none" stroke-linecap="round" opacity="0.55"/>
<path d="M30 20 Q28 14 30  9" stroke="#c8b888" stroke-width="2"   fill="none" stroke-linecap="round" opacity="0.55"/>
<path d="M37 22 Q39 17 37 12" stroke="#c8b888" stroke-width="2"   fill="none" stroke-linecap="round" opacity="0.55"/>
<ellipse cx="19" cy="40" rx="4.5" ry="2.5" fill="white" opacity="0.20"/>
</svg>`;

// ─── 買う (buy) — 购物袋，淡粉 ──────────────────────────────────────
VOCAB_ICONS['買う'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_ka" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#f4c0d8"/>
    <stop offset="100%" stop-color="#b06888"/>
  </radialGradient>
  ${clayFilter('f_ka', 9)}
</defs>
<path d="M15 28 Q13 54 30 54 Q47 54 45 28Z" fill="url(#rg_ka)" filter="url(#f_ka)"/>
<rect x="13" y="23" width="34" height="7" rx="3.5" fill="#c07898" filter="url(#f_ka)"/>
<path d="M21 23 Q19 11 26 9 Q30 8 30 12" stroke="#b07088" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M39 23 Q41 11 34 9 Q30 8 30 12" stroke="#b07088" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M30 35 L32.5 40.5 L38 40.5 L34 44 L36 49.5 L30 46 L24 49.5 L26 44 L22 40.5 L27.5 40.5Z"
      fill="#f0d0e0" opacity="0.78"/>
<ellipse cx="21" cy="36" rx="4.5" ry="9" fill="white" opacity="0.20"/>
</svg>`;

// ─── いつも (always) — 时钟，天蓝 ──────────────────────────────────
VOCAB_ICONS['いつも'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_it" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#b0d4f0"/>
    <stop offset="100%" stop-color="#3e7eb0"/>
  </radialGradient>
  ${clayFilter('f_it', 10)}
</defs>
<circle cx="30" cy="30" r="21" fill="url(#rg_it)" filter="url(#f_it)"/>
<circle cx="30" cy="30" r="18" fill="#d4ecfc" opacity="0.50"/>
<rect x="29" y="11" width="2" height="5"  rx="1" fill="#3a6e98"/>
<rect x="29" y="44" width="2" height="5"  rx="1" fill="#3a6e98"/>
<rect x="11" y="29" width="5" height="2"  rx="1" fill="#3a6e98"/>
<rect x="44" y="29" width="5" height="2"  rx="1" fill="#3a6e98"/>
<line x1="30" y1="30" x2="30" y2="17" stroke="#2a5880" stroke-width="2.8" stroke-linecap="round"/>
<line x1="30" y1="30" x2="41" y2="25" stroke="#2a5880" stroke-width="2.2" stroke-linecap="round"/>
<circle cx="30" cy="30" r="3"  fill="#2a5880"/>
<ellipse cx="22" cy="21" rx="6" ry="5" fill="white" opacity="0.30"/>
</svg>`;

// ─── 人生 (life) — 盆栽幼苗，嫩绿 ─────────────────────────────────
VOCAB_ICONS['人生'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_js" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#f0d0a8"/>
    <stop offset="100%" stop-color="#b07840"/>
  </radialGradient>
  ${clayFilter('f_js', 11)}
</defs>
<ellipse cx="30" cy="51" rx="16" ry="6" fill="#b87848" filter="url(#f_js)"/>
<path d="M14 46 Q14 56 30 56 Q46 56 46 46Z" fill="url(#rg_js)" filter="url(#f_js)"/>
<ellipse cx="30" cy="46" rx="16" ry="5" fill="#a07040"/>
<path d="M30 46 Q30 28 30 20" stroke="#6ab058" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M30 34 Q18 27 16 17 Q24 23 30 34Z" fill="#78c068"/>
<path d="M30 27 Q42 20 44 10 Q36 18 30 27Z" fill="#88d078"/>
<path d="M30 21 Q28 12 30  8 Q32 12 30 21Z" fill="#68b850"/>
<path d="M28 32 Q21 27 18 21" stroke="white" stroke-width="1.2" fill="none" opacity="0.32"/>
<path d="M32 25 Q39 20 42 14" stroke="white" stroke-width="1.2" fill="none" opacity="0.32"/>
</svg>`;

// ─── 旅 (travel) — 行李箱，暖棕 ─────────────────────────────────────
VOCAB_ICONS['旅'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_tb3" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#e0cca8"/>
    <stop offset="100%" stop-color="#907048"/>
  </radialGradient>
  ${clayFilter('f_tb3', 12)}
</defs>
<rect x="11" y="20" width="38" height="35" rx="8" fill="url(#rg_tb3)" filter="url(#f_tb3)"/>
<rect x="20" y="13" width="20" height="10" rx="4" fill="#a88050"/>
<rect x="22" y="11" width="16" height="5"  rx="2.5" fill="#c09c68"/>
<rect x="11" y="34" width="38" height="4"  rx="2" fill="#a08048" opacity="0.65"/>
<rect x="26" y="30" width="8"  height="10" rx="2.5" fill="#b89050"/>
<circle cx="30" cy="35" r="2"  fill="#d4b070"/>
<ellipse cx="20" cy="27" rx="5" ry="7.5" fill="white" opacity="0.20"/>
<circle cx="16" cy="24" r="3.2" fill="#b09060" opacity="0.8"/>
<circle cx="44" cy="24" r="3.2" fill="#b09060" opacity="0.8"/>
<circle cx="16" cy="51" r="3.2" fill="#b09060" opacity="0.8"/>
<circle cx="44" cy="51" r="3.2" fill="#b09060" opacity="0.8"/>
</svg>`;

// ─── 大切 (precious) — 心形，温柔粉红 ──────────────────────────────
VOCAB_ICONS['大切'] = `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="rg_dk" cx="36%" cy="28%" r="66%">
    <stop offset="0%" stop-color="#f8b8cc"/>
    <stop offset="100%" stop-color="#b85870"/>
  </radialGradient>
  ${clayFilter('f_dk', 13)}
</defs>
<path d="M30 51 Q7 37 7 22 Q7 9 20 9 Q26 9 30 16 Q34 9 40 9 Q53 9 53 22 Q53 37 30 51Z"
      fill="url(#rg_dk)" filter="url(#f_dk)"/>
<path d="M30 45 Q13 33 13 22 Q13 15 20 15 Q24 15 28 20 L30 23 L32 20 Q36 15 40 15 Q47 15 47 22 Q47 33 30 45Z"
      fill="#e8889c" opacity="0.38"/>
<ellipse cx="21" cy="18" rx="7" ry="5.5" fill="white" opacity="0.34"/>
<path d="M43 15 L44.5 11.5 L46 15 L49.5 16.5 L46 18 L44.5 21.5 L43 18 L39.5 16.5Z"
      fill="white" opacity="0.65"/>
</svg>`;
