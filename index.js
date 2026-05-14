// 🔮 CrystalMagic 魔法能量守護與狀態管理

document.addEventListener('DOMContentLoaded', function() {
    // --- A. 登入狀態轉換邏輯 ---
    // 檢查瀏覽器中是否存有登入標記與用戶名
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username') || "魔法使者";

    if (isLoggedIn === 'true') {
        const authGroup = document.querySelector('.auth-group');
        if (authGroup) {
            // 動態更換原本的「登入/註冊」按鈕為用戶資訊與「登出」按鈕
            authGroup.innerHTML = `
                <span style="color: var(--primary-purple); font-weight: bold; margin-right: 15px;">
                    ✨ 歡迎，${username}
                </span>
                <a href="#" id="logout-btn" class="btn-login-outline">登出</a>
            `;

            // 處理登出邏輯
            document.getElementById('logout-btn').addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('username');
                alert('🔮 能量連結已斷開，期待下次相見。');
                window.location.reload(); // 重新整理頁面回到未登入狀態
            });
        }
    }

    // --- B. 頁面平滑滾動 ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// --- C. 全域安全性守護 (禁用右鍵與開發者工具) ---
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

document.onkeydown = function (e) {
    // 禁用 F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
    if (e.keyCode === 123) return false;
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) return false;
    if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) return false;
};
