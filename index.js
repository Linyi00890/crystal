// 🔮 CrystalMagic 魔法能量守護

// 1. 防止右鍵點擊與 F12 開發者工具
document.addEventListener('contextmenu', e => e.preventDefault());

document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) {
        return false;
    }
};

// 2. 頁面平滑滾動效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 3. 簡單的卡片載入動畫
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
