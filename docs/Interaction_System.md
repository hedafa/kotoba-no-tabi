# Interaction System

## 1. Modes

- STORY_MODE（剧情模式）
- LEARNING_MODE（学习模式）

---

## 2. Core Flow

Story Mode：

- 自动播放日语音频
- 显示剧情画面（图片 + 日语字幕）
- 可点击「学习解析」

Learning Mode：

- 暂停音频
- 显示学习内容（翻译 / 语法 / 文化）
- 可点击「返回剧情」

---

## 3. State Rules

- STORY → LEARNING：暂停音频 + 打开学习界面
- LEARNING → STORY：关闭学习界面 + 返回剧情

---

## 4. Audio Rules

- 进入 Story：自动播放
- 进入 Learning：自动暂停
- Replay：重新播放当前句子

---

## 5. UI Rules

- Story 只保留：
  Play / Pause / Learn / Replay
- Learning 只保留：
  Back

---

## 6. Principle

- 剧情不重置
- 学习是覆盖层
- 音频独立运行