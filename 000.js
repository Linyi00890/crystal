// 🔮 CrystalMagic 魔法能量守護

// 1. 基本安全保護（防止右鍵與 F12）
document.addEventListener('contextmenu', e => e.preventDefault());

document.onkeydown = function(e) {
    // 禁用 F12 (123), Ctrl+Shift+I (73), Ctrl+Shift+J (74), Ctrl+U (85)
    if (e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) ||
        (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
};

// 2. 頁面平滑滾動（針對 # 連結）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3. 滾動淡入效果 (Scroll Reveal)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// 初始化卡片動畫狀態
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`; // 增加錯開的延遲感
        observer.observe(card);
    });
});
