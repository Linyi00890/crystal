document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. 表單提交處理 ---
    const contactForm = document.getElementById('crystalContactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // 這裡可以加入 API 傳送邏輯
            alert('✨ 能量訊息已發送！\n感謝您的諮詢，水晶守護者將盡快回覆您。');
            contactForm.reset(); // 清空表單
        });
    }

    // --- 2. 魔法守護腳本 (防拷貝與開發者工具) ---

    // 禁用右鍵選單
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
    }, false);

    // 禁用特定快捷鍵
    document.addEventListener('keydown', function (e) {
        // 禁用 F12
        if (e.key === "F12" || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        
        // 禁用 Ctrl+Shift+I, J (開發者工具)
        if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.keyCode === 73 || e.keyCode === 74)) {
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

});
