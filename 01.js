/**
 * 魔法守護腳本 v2.0
 * 專業優化版：保護內容的同時減少對一般用戶的干擾
 */

// 1. 禁用右鍵選單
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    console.log("🔮 CrystalMagic: 內容受智慧財產權保護。");
}, false);

// 2. 禁用圖片拖拽 (防止直接存圖)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

// 3. 禁用開發者常用快捷鍵
document.addEventListener('keydown', function (e) {
    // 禁用 F12
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // 禁用 Ctrl+Shift+I / J / C (開發者工具)
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) {
        e.preventDefault();
        return false;
    }

    // 禁用 Ctrl+U (檢視原始碼)
    if (e.ctrlKey && (e.key === "u" || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }

    // 禁用 Ctrl+S (存檔)
    if (e.ctrlKey && (e.key === "s" || e.keyCode === 83)) {
        e.preventDefault();
        return false;
    }
});