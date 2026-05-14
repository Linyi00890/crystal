/**
 * 🔮 CrystalMagic 核心腳本 (index.js)
 * 功能：登入狀態管理、導覽列動態轉換、安全性守護、頁面平滑滾動
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. 登入狀態轉換與個人資訊選單 ---
    // 取得 login.html 存入的登入狀態與使用者 Email
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('loggedInUserEmail');

    if (isLoggedIn === 'true' && userEmail) {
        // 尋找 index.html 中的登入/註冊容器
        const authGroup = document.querySelector('.auth-group');
        
        // 從資料庫 (localStorage) 根據 Email 提取該使用者的完整資料
        const savedData = localStorage.getItem(userEmail);
        
        if (authGroup && savedData) {
            const userData = JSON.parse(savedData);

            // 設定容器為相對定位，以利下拉選單對齊
            authGroup.style.position = 'relative';

            // 動態替換 HTML 內容為個人資料選單
            authGroup.innerHTML = `
                <div class="user-menu" style="cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <span style="color: var(--primary-purple); font-weight: bold;">
                        ✨ 歡迎，${userData.username}
                    </span>
                    <div id="user-dropdown" style="display: none; position: absolute; top: 45px; right: 0; background: white; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #eee; min-width: 170px; z-index: 10001; overflow: hidden;">
                        <a href="profile.html?mode=view" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; transition: 0.3s; font-size: 0.9rem;">👤 個人資料確認</a>
                        <a href="profile.html?mode=edit" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; transition: 0.3s; font-size: 0.9rem; border-top: 1px solid #f5f5f5;">⚙️ 修改個人資料</a>
                        <a href="#" id="logout-btn" style="display: block; padding: 12px 20px; text-decoration: none; color: #d32f2f; transition: 0.3s; font-size: 0.9rem; border-top: 1px solid #f5f5f5; font-weight: bold;">🌙 斷開能量連結</a>
                    </div>
                </div>
            `;

            const userMenu = document.querySelector('.user-menu');
            const dropdown = document.getElementById('user-dropdown');

            // 點擊選單切換顯示/隱藏
            userMenu.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
            });

            // 點擊頁面其他地方時關閉選單
            document.addEventListener('click', function() {
                if (dropdown) dropdown.style.display = 'none';
            });

            // 選單滑過變色效果 (使用 JS 補足動態生成的樣式)
            const dropdownLinks = dropdown.querySelectorAll('a');
            dropdownLinks.forEach(link => {
                link.addEventListener('mouseover', () => link.style.background = '#f3e5f5');
                link.addEventListener('mouseout', () => link.style.background = 'transparent');
            });

            // 登出按鈕邏輯
            document.getElementById('logout-btn').addEventListener('click', function(e) {
                e.preventDefault();
                // 移除登入相關標籤，但不刪除使用者註冊資料
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('loggedInUserEmail');
                alert('🔮 能量連結已斷開，期待下次相見。');
                window.location.reload(); // 重新整理頁面，恢復成原始的「登入/註冊」按鈕
            });
        }
    }

    // --- 2. 頁面平滑滾動 ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// --- 3. 魔法能量守護 (安全性功能) ---
// 禁用右鍵選單
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

// 禁用 F12 與開發者工具組合鍵
document.onkeydown = function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67))) {
        return false;
    }
};
