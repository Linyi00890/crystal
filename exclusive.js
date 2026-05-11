/**
 * 魔法守護腳本
 * 保護網站內容不被輕易複製與存取
 */

// 1. 禁用右鍵選單並跳出提醒
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

// 2. 禁用快捷鍵 (F12, Ctrl+U, Ctrl+S 等)
document.addEventListener('keydown', function (e) {
    // 禁用 F12
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // 禁用 Ctrl+Shift+I (開發者工具)
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.keyCode === 73)) {
        e.preventDefault();
        return false;
    }

    // 禁用 Ctrl+Shift+J (主控台)
    if (e.ctrlKey && e.shiftKey && (e.key === "J" || e.keyCode === 74)) {
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
