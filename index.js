// 🔮 CrystalMagic 魔法能量守護與狀態管理

document.addEventListener('DOMContentLoaded', function() {
    // --- A. 登入狀態轉換與個人資訊選單 ---
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username') || "魔法使者";

    if (isLoggedIn === 'true') {
        const authGroup = document.querySelector('.auth-group');
        if (authGroup) {
            // 動態替換為個人資訊下拉選單
            authGroup.style.position = 'relative'; // 確保選單定位正確
            authGroup.innerHTML = `
                <div class="user-menu" style="cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <span style="color: var(--primary-purple); font-weight: bold;">
                        ✨ 歡迎，${username}
                    </span>
                    <div id="user-dropdown" style="display: none; position: absolute; top: 40px; right: 0; background: white; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #eee; min-width: 150px; z-index: 10001; overflow: hidden;">
                        <a href="profile.html" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; transition: 0.3s; font-size: 0.9rem;">👤 個人資料確認</a>
                        <a href="profile.html#edit" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; transition: 0.3s; font-size: 0.9rem; border-top: 1px solid #f5f5f5;">⚙️ 資料修改</a>
                        <a href="#" id="logout-btn" style="display: block; padding: 12px 20px; text-decoration: none; color: #d32f2f; transition: 0.3s; font-size: 0.9rem; border-top: 1px solid #f5f5f5; font-weight: bold;">🌙 斷開能量連結</a>
                    </div>
                </div>
            `;

            const userMenu = document.querySelector('.user-menu');
            const dropdown = document.getElementById('user-dropdown');

            // 點擊顯示/隱藏選單
            userMenu.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
            });

            // 點擊外部關閉選單
            document.addEventListener('click', function() {
                dropdown.style.display = 'none';
            });

            // 登出邏輯
            document.getElementById('logout-btn').addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('username');
                alert('🔮 能量連結已斷開，期待下次相見。');
                window.location.reload();
            });

            // 選單滑過效果
            const dropdownLinks = dropdown.querySelectorAll('a');
            dropdownLinks.forEach(link => {
                link.addEventListener('mouseover', () => link.style.background = '#f3e5f5');
                link.addEventListener('mouseout', () => link.style.background = 'transparent');
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
    if (e.keyCode === 123) return false;
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) return false;
    if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) return false;
};
