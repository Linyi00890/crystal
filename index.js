// 🔮 CrystalMagic 魔法能量守護
document.addEventListener('contextmenu', e => e.preventDefault());

document.onkeydown = function(e) {
    // 禁用 F12 與 開發者工具組合鍵
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74))) {
        return false;
    }
};

// 頁面平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
