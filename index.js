// 🔮 CrystalMagic 魔法能量管理與安全守護
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('loggedInUserEmail');

    if (isLoggedIn === 'true' && userEmail) {
        const authGroup = document.querySelector('.auth-group');
        const userData = JSON.parse(localStorage.getItem(userEmail));
        
        if (authGroup && userData) {
            authGroup.style.position = 'relative';
            authGroup.innerHTML = `
                <div class="user-menu" style="cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <span style="color: var(--primary-purple); font-weight: bold;">✨ 歡迎，${userData.username}</span>
                    <div id="user-dropdown" style="display: none; position: absolute; top: 45px; right: 0; background: white; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #eee; min-width: 160px; z-index: 10001; overflow: hidden;">
                        <a href="profile.html?mode=view" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; font-size: 0.9rem;">👤 個人資料確認</a>
                        <a href="profile.html?mode=edit" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; font-size: 0.9rem; border-top: 1px solid #f5f5f5;">⚙️ 資料修改</a>
                        <a href="#" id="logout-btn" style="display: block; padding: 12px 20px; text-decoration: none; color: #d32f2f; font-size: 0.9rem; border-top: 1px solid #f5f5f5; font-weight: bold;">🌙 斷開能量連結</a>
                    </div>
                </div>
            `;

            const userMenu = document.querySelector('.user-menu');
            const dropdown = document.getElementById('user-dropdown');

            userMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
            });

            document.addEventListener('click', () => { if(dropdown) dropdown.style.display = 'none'; });

            document.getElementById('logout-btn').addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('loggedInUserEmail');
                alert('🔮 期待下次相見。');
                window.location.reload();
            });
        }
    }
});
