/**
 * 🔮 CrystalMagic 魔法守護腳本
 * 功能：保護圖文內容，防止右鍵與原始碼查看
 */

// 1. 禁用右鍵選單並跳出提醒
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

// 2. 禁用快捷鍵 (F12, Ctrl+U, Ctrl+Shift+I 等)
document.onkeydown = function (e) {
    // 禁用 F12 (keyCode 123)
    if (e.keyCode === 123) {
        return false;
    }
    
    // 禁用 Ctrl+Shift+I / J (開發者工具)
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        return false;
    }
    
    // 禁用 Ctrl+U (檢視原始碼)
    if (e.ctrlKey && e.keyCode === 85) {
        return false;
    }
    
    // 禁用 Ctrl+S (網頁另存新檔)
    if (e.ctrlKey && e.keyCode === 83) {
        return false;
    }
};
