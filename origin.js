document.addEventListener('DOMContentLoaded', () => {
    /**
     * 1. 粒子背景
     */
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5;
            this.vx = Math.random() * 0.2 - 0.1;
            this.vy = Math.random() * 0.2 - 0.1;
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = "rgba(191, 149, 63, 0.4)";
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 60; i++) particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => { resize(); initParticles(); });
    resize(); initParticles(); animate();

    /**
     * 2. 手風琴互動
     */
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.accordion-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    /**
     * 3. 🔮 魔法能量守護 (安全防護)
     */
    // 禁止右鍵
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
        alert("🔮 魔法能量守護中：本站內容受保護，無法使用右鍵選單。");
    });

    // 禁止 F12, Ctrl+U, Ctrl+S, Ctrl+Shift+I
    document.addEventListener('keydown', e => {
        if (
            e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || 
            (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83))
        ) {
            e.preventDefault();
            alert("🔮 能量不穩：偵測到開發者工具存取行為，防禦機制已啟動。");
            return false;
        }
    });

    // 偵測開發者工具 (Debug 陷阱)
    setInterval(() => {
        const start = performance.now();
        debugger;
        if (performance.now() - start > 100) {
            document.body.innerHTML = "<div style='color:white;text-align:center;margin-top:20%;font-family:Cinzel;'><h1>魔法迴路過載</h1><p>偵測到異常檢視行為，連線已重置。</p></div>";
        }
    }, 1000);
});
