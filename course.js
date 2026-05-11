// --- 魔法守護腳本 ---

// 1. 禁用右鍵選單並跳出提醒
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

// 2. 禁用快捷鍵 (F12, Ctrl+U, Ctrl+Shift+I 等)
document.onkeydown = function (e) {
    // 禁用 F12
    if (e.keyCode === 123) {
        return false;
    }
    
    // 判斷 Ctrl 組合鍵 (在 macOS 可能是 Command，但通常網頁開發以 Ctrl 為主)
    if (e.ctrlKey) {
        // U: 檢視原始碼, S: 存檔
        if (e.keyCode === 85 || e.keyCode === 83) {
            return false;
        }
        
        // Shift + I / J: 開發者工具
        if (e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
            return false;
        }
    }
};
