// --- 1. 表單提交處理 ---
const form = document.getElementById('customRequirementForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('您的客製化需求已收到！我們的設計師會盡快與您聯繫。');
        // 這裡可以加入 AJAX 或 Fetch API 來傳送資料到後端
    });
}

// --- 2. 魔法守護腳本 (防拷貝/防調試) ---

// 禁用右鍵選單
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

// 禁用開發者工具快捷鍵
document.onkeydown = function (e) {
    // 禁用 F12
    if (e.keyCode === 123) {
        return false;
    }
    // 禁用 Ctrl+Shift+I (開發者工具)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        return false;
    }
    // 禁用 Ctrl+Shift+J (開發者工具)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        return false;
    }
    // 禁用 Ctrl+U (檢視原始碼)
    if (e.ctrlKey && e.keyCode === 85) {
        return false;
    }
    // 禁用 Ctrl+S (存檔)
    if (e.ctrlKey && e.keyCode === 83) {
        return false;
    }
};
