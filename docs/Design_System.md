# ことばの旅 Design System v1.0

## 1. 产品定位

ことばの旅不是课程。

不是播放器。

不是视频。

它是一本可以阅读、可以倾听、可以学习的电子旅行绘本。

每一个章节都是一次旅行。

每一个名词都是一个故事。

---

## 2. 核心原则

### 2.1 插画优先

画面永远是主角。

文字和按钮都不能压过插画。

---

### 2.2 像书，不像软件

界面应该像一本翻开的绘本。

不要像学习软件。

不要像PPT。

不要像视频播放器。

---

### 2.3 留白很重要

页面必须有足够留白。

留白让故事变得安静、舒服、有呼吸感。

---

### 2.4 先体验，再学习

用户先看到画面。

先听到日语。

先进入故事。

学习解析应该放在后面，不要一开始就出现。

---

### 2.5 慢一点

动画要柔和。

切换要安静。

不要快速闪动。

不要制造紧张感。

---

## 3. 页面结构

每一页固定由以下部分组成：

```text
Header
Episode Title
Illustration
Story Text
Page Number
Controls
```

---

## 4. Header

固定显示：

```text
ことばの旅
```

Header 不使用复杂 Logo。

不使用强装饰。

保持安静、轻盈。

---

## 5. Episode Title

每一集标题使用一个名词。

例如：

```text
空港
北京
東京
秋
りんご
雨
家族
```

标题不翻译成中文。

标题是进入这一段旅程的入口。

---

## 6. Illustration

所有剧情插画统一使用横向比例。

标准比例：

```text
16:9
```

推荐生成尺寸：

```text
1536 × 864
```

插画不得被拉伸。

不得变形。

不得强制裁成竖图。

---

## 7. Story Text

正文不是字幕。

正文是绘本里的文字。

日语正文应该像书页文字一样排版。

示例：

```text
空港は、
私が出発する場所であり、
そして到着する場所でもあります。
```

正文保持安静、清晰、可朗读。

---

## 8. Controls

V1.0 固定使用以下按钮：

```text
Home
Back
Play / Pause
Next
Learn
```

按钮使用 assets/icons/ 中的 PNG 图标。

不要使用浏览器默认按钮。

按钮不覆盖插画。

按钮固定放在书页下方。

---

## 9. Learn

学习解析不是新页面。

点击 Learn 后，从页面底部弹出一张解析纸。

解析纸关闭后，用户回到原来的故事页。

学习不能打断阅读体验。

---

## 10. Page Number

每一页显示页码。

格式：

```text
01 / 04
```

页码让用户感觉自己正在读一本书。

---

## 11. Color System

整体颜色保持温暖、低饱和。

推荐基础色：

```text
Paper Background: #F3EFE7
Page White: #FFFDF8
Story Text: #333333
Sub Text: #777777
Soft Brown: #B8906B
Warm Beige: #E8D8C3
Muted Blue: #8B9CCB
Muted Green: #7FA8A7
```

避免高饱和颜色。

避免纯黑大面积使用。

避免强烈霓虹色。

---

## 12. Typography

整体字体方向：

```text
出版物感
绘本感
安静
清晰
```

正文建议使用：

```text
Japanese: Noto Serif JP / Source Han Serif JP
Chinese: Source Han Serif SC / Noto Serif SC
Fallback: serif
```

按钮、辅助文字可使用无衬线字体。

---

## 13. Spacing

所有间距遵循 8px 系统。

常用间距：

```text
8px
16px
24px
32px
48px
64px
```

页面不要拥挤。

插画和文字之间必须有足够距离。

---

## 14. Motion

动画时间：

```text
250ms – 400ms
```

动画方向：

```text
轻微淡入
轻微滑动
像翻纸
```

禁止：

```text
剧烈弹跳
快速闪烁
复杂炫技动画
```

---

## 15. Desktop Layout

电脑端不是全屏播放器。

电脑端应该像一张居中的书页。

页面宽度建议：

```text
Book Width: 900px – 1100px
```

插画区域保持：

```text
16:9
```

两侧保留大量空白。

---

## 16. Mobile Layout

手机端保持同一套结构。

不是重新设计一套产品。

手机端顺序仍然是：

```text
Header
Title
Illustration
Story Text
Page Number
Controls
```

只调整宽度和字号。

---

## 17. Asset Rules

图片放在：

```text
episodes/EP01_空港/
```

通用按钮图标放在：

```text
assets/icons/
```

角色参考图放在：

```text
assets/travelers/
```

不要把临时文件混入正式素材目录。

---

## 18. Naming Rules

章节命名：

```text
EP01_空港
EP02_北京
EP03_秋
```

图片命名：

```text
title.png
scene1.png
scene2.png
scene3.png
```

音频命名：

```text
title.mp3
s1.mp3
s2.mp3
s3.mp3
```

---

## 19. V1.0 页面目标

V1.0 只实现以下内容：

```text
封面
目录
阅读页
学习解析抽屉
```

不做：

```text
打卡
积分
排行榜
复杂测验
用户系统
```

---

## 20. 最终判断标准

每次修改页面时，都问自己：

```text
它是否更像一本绘本？
它是否更安静？
它是否让用户更愿意继续翻下去？
```

如果答案是否定的，就不要加入这个设计。
