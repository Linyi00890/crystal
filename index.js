// 🔮 CrystalMagic 魔法能量守護腳本

// 1. 禁用右鍵選單
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站內容受保護，無法使用右鍵選單。");
}, false);

// 2. 禁用開發者工具快捷鍵 (F12, Ctrl+Shift+I, Ctrl+U 等)
document.onkeydown = function (e) {
    // 禁用 F12
    if (e.keyCode === 123) {
        return false;
    }
    // 禁用 Ctrl+Shift+I (檢視原始碼)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        return false;
    }
    // 禁用 Ctrl+Shift+J (主控台)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        return false;
    }
    // 禁用 Ctrl+U (檢視網頁原始碼)
    if (e.ctrlKey && e.keyCode === 85) {
        return false;
    }
    // 禁用 Ctrl+S (存檔)
    if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }
};
