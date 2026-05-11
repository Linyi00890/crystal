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

    // 2. 禁用關鍵快捷鍵
    document.onkeydown = function (e) {
        // F12
        if (e.keyCode === 123) return false;
        
        // Ctrl+Shift+I (開發者工具)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) return false;
        
        // Ctrl+Shift+J (控制台)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) return false;
        
        // Ctrl+U (原始碼)
        if (e.ctrlKey && e.keyCode === 85) return false;
        
        // Ctrl+S (儲存)
        if (e.ctrlKey && e.keyCode === 83) return false;
        
        // Ctrl+C (複製)
        if (e.ctrlKey && e.keyCode === 67) {
            alert("✨ 水晶能量無法被複製，請用心感受其靈氣。");
            return false;
        }
    };

    // 3. 防止圖片拖曳
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].onmousedown = function(e) {
            e.preventDefault();
        };
    }

    // 4. 增加表格行互動（讓畫面更生動）
    const rows = document.querySelectorAll('.needs-table tbody tr');
    rows.forEach(row => {
        row.style.cursor = 'default';
        row.onmouseover = () => row.style.backgroundColor = '#f3e5f5';
        row.onmouseout = () => row.style.backgroundColor = 'transparent';
    });
});
