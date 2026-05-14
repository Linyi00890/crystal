// 🔮 CrystalMagic 魔法能量管理與狀態守護
document.addEventListener('DOMContentLoaded', function() {
    // --- 1. 登入狀態檢查與選單注入 ---
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('loggedInUserEmail'); 

    if (isLoggedIn === 'true' && userEmail) {
        // 尋找 HTML 中的入口容器
        const authGroup = document.querySelector('.auth-group');
        const userData = JSON.parse(localStorage.getItem(userEmail));
        
        if (authGroup && userData) {
            // 動態替換原本的登入/註冊按鈕
            authGroup.style.position = 'relative';
            authGroup.innerHTML = `
                <div class="user-menu" style="cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <span style="color: #6a1b9a; font-weight: bold;">✨ 歡迎，${userData.username}</span>
                    <div id="user-dropdown" style="display: none; position: absolute; top: 45px; right: 0; background: white; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #eee; min-width: 160px; z-index: 10001; overflow: hidden;">
                        <a href="profile.html?mode=view" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; font-size: 0.9rem; transition: 0.3s;">👤 個人資料確認</a>
                        <a href="profile.html?mode=edit" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; font-size: 0.9rem; border-top: 1px solid #f5f5f5; transition: 0.3s;">⚙️ 資料修改</a>
                        <a href="#" id="logout-btn" style="display: block; padding: 12px 20px; text-decoration: none; color: #d32f2f; font-size: 0.9rem; border-top: 1px solid #f5f5f5; font-weight: bold; transition: 0.3s;">🌙 斷開能量連結</a>
                    </div>
                </div>
            `;

            const userMenu = document.querySelector('.user-menu');
            const dropdown = document.getElementById('user-dropdown');

            // 選單切換邏輯
            userMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
            });

            document.addEventListener('click', () => { if(dropdown) dropdown.style.display = 'none'; });

            // 登出邏輯
            document.getElementById('logout-btn').addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('loggedInUserEmail');
                alert('🔮 期待下次相見。');
                window.location.reload();
            });
        }
    }

    // --- 2. 頁面平滑滾動 ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// --- 3. 安全守護 ---
document.addEventListener('contextmenu', e => e.preventDefault());
