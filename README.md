# CO8 Interview Kit

CO8 公司研究、Software Architect 面試準備、中英逐句練習與英文語音教材。

## 開啟教材

在 macOS 執行：

```bash
open -a "Google Chrome" "CO8_企業研究與面試簡報_繁中.html"
```

## 專案內容

- `CO8_企業研究與面試簡報_繁中.html`：主要教材與互動式逐句朗讀
- `audio/`：8 段英文面試講稿 MP3
- `generate_audio.py`：從 HTML 重新產生段落語音
- `CHANGELOG.md`：文件版號與異動紀錄

## 版號規則

採用 Semantic Versioning：

- Patch（`v1.0.x`）：文字修正、小幅補充
- Minor（`v1.x.0`）：新增完整章節、教材或功能
- Major（`vx.0.0`）：文件定位或結構全面改版

每次文件異動必須同步：

1. 更新 HTML 的 `document-version`、頁首版號與頁尾版號
2. 更新 `CHANGELOG.md`
3. 建立清楚的 Git commit
4. 發布版本時建立同版號 Git tag
