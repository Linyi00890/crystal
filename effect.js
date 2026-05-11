/**
 * CrystalMagic 魔法守護腳本
 * 功能：保護網站內容，防止未授權複製與右鍵操作
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 禁用右鍵選單
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert("🔮 魔法能量守護中：本站內容受保護，無法使用右鍵選單。");
    }, false);

    // 2. 禁用關鍵快捷鍵 (F12, Ctrl+Shift+I, Ctrl+U 等)
    document.onkeydown = function (e) {
        // 禁用 F12
        if (e.keyCode === 123) {
            return false;
        }
        // 禁用 Ctrl+Shift+I (開發者工具)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            return false;
        }
        // 禁用 Ctrl+Shift+J (開發者控制台)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            return false;
        }
        // 禁用 Ctrl+U (檢視原始碼)
        if (e.ctrlKey && e.keyCode === 85) {
            return false;
        }
        // 禁用 Ctrl+S (儲存網頁)
        if (e.ctrlKey && e.keyCode === 83) {
            return false;
        }
    };

    // 額外魔法：防止拖曳圖片
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].onmousedown = function(e) {
            e.preventDefault();
        };
    }
});
