document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 自定義魔法提示框
    function showMagicToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
            background: rgba(0, 131, 143, 0.9); color: white;
            padding: 12px 25px; border-radius: 50px; z-index: 10001;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2); backdrop-filter: blur(5px);
            font-size: 14px; transition: 0.5s; opacity: 0; pointer-events: none;
        `;
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.style.opacity = '1', 50);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    // 2. 守護功能 (修正 alert 問題)
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
        showMagicToast("🔮 魔法能量守護中：本站圖文受智慧財產保護。");
    });

    document.addEventListener('keydown', e => {
        const forbiddenKeys = ['F12', 'u', 'i', 'j', 's'];
        if (forbiddenKeys.includes(e.key.toLowerCase()) && (e.ctrlKey || e.metaKey || e.key === 'F12')) {
            e.preventDefault();
            return false;
        }
    });

    // 3. 滾動顯現動畫監聽
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                el.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // 初始檢查
});