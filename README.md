# 💒 Wedding Invitation

一個精美的互動式數位婚禮邀請函網站，具有動畫效果、倒數計時器和背景音樂。

## ✨ 功能特色

- 🌸 **花瓣動畫效果** - 逼真的飄落花瓣視覺效果
- ⏱️ **婚禮倒數計時** - 實時顯示距離婚禮的時間
- 🎵 **背景音樂** - 優雅的婚禮背景樂
- 📱 **響應式設計** - 在各種裝置上完美顯示
- 🖼️ **高質量圖像** - 精選的婚禮封面圖片
- 💻 **純前端技術** - 無需後端服務器，易於部署

## 📁 專案結構

```
wedding-invitation
│
├── index.html          # 主要HTML頁面
├── css/
│   └── style.css       # 樣式表
├── js/
│   ├── petals.js       # 花瓣動畫效果
│   └── countdown.js    # 倒數計時器
├── images/
│   └── cover.jpg       # 婚禮封面圖片
├── music/
│   └── wedding.mp3     # 背景音樂
└── README.md           # 本文件
```

## 🚀 快速開始

### 安裝

1. 克隆此倉庫
```bash
git clone https://github.com/jack3c3r0225-netizen/wedding-invitation.git
cd wedding-invitation
```

2. 打開瀏覽器訪問
```
直接在瀏覽器中打開 index.html 文件
或使用本地服務器：
python -m http.server 8000
```

### 自定義邀請函

編輯 `index.html` 中的以下內容：
- 新郎新娘名字
- 婚禮日期和時間
- 婚禮地點
- 邀請函文案

編輯 `js/countdown.js` 中的婚禮日期：
```javascript
const weddingDate = new Date('2024-12-25').getTime(); // 修改為你的婚禮日期
```

編輯 `css/style.css` 以自定義：
- 顏色方案
- 字體風格
- 布局設計

## 🛠️ 技術棧

- **HTML5** - 網頁結構
- **CSS3** - 樣式與動畫
- **JavaScript (Vanilla)** - 互動效果
- **Canvas API** - 花瓣動畫渲染

## 📋 功能詳解

### 花瓣動畫 (petals.js)
使用 Canvas 在背景中繪製不斷飄落的花瓣，營造浪漫氛圍。

**特點：**
- 隨機生成花瓣位置和尺寸
- 流暢的下落和旋轉動畫
- 性能優化的渲染方式

### 倒數計時 (countdown.js)
顯示距離婚禮的天數、小時、分鐘和秒數。

**特點：**
- 實時更新計時器
- 動態顯示時間單位
- 活動開始後可切換顯示感謝信息

## 📱 瀏覽器相容性

- ✅ Chrome (推薦)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE 不支援

## 🎨 自定義選項

### 修改花瓣顏色
在 `js/petals.js` 中修改顏色值

### 修改背景音樂
將你的 MP3 文件替換 `music/wedding.mp3`

### 調整倒數計時器
在 `js/countdown.js` 中修改婚禮日期

### 更換封面圖片
將你的圖片替換 `images/cover.jpg`

## 📊 部署

### GitHub Pages 部署

1. 確保倉庫為 public
2. 進入 Settings → Pages
3. 選擇 Source 為 main 分支
4. 訪問 `https://jack3c3r0225-netizen.github.io/wedding-invitation`

### 其他主機部署

將所有文件上傳到任何靜態網頁主機（如 Netlify、Vercel 等）

## 📝 使用許可

此專案採用 MIT 許可證。詳見 LICENSE 文件。

## 🤝 貢獻

歡迎提交問題報告和改進建議！

## 👥 作者

- **jack3c3r0225-netizen**

## 📧 聯絡方式

如有任何問題，請提交 Issue 或 Pull Request。

---

**祝福滿滿的婚禮！** 💕

Made with ❤️ for a special day
