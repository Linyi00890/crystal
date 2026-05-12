document.addEventListener('DOMContentLoaded', () => {
    /**
     * 1. 粒子背景 (金粉流沙效果)
     */
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    document.body.appendChild(canvas);
    
    // 設定 Canvas 樣式確保它在底層
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1'; 
    canvas.style.pointerEvents = 'none';

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
            this.x += this.vx; 
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = "rgba(191, 149, 63, 0.4)"; // 金色粒子
            ctx.beginPath(); 
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); 
            ctx.fill();
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
    resize(); 
    initParticles(); 
    animate();

    /**
     * 2. 側邊欄與手風琴互動
     */
    // 偵測手風琴點擊 (適配新的 .accordion-tab 類名)
    const accordionTabs = document.querySelectorAll('.accordion-tab');
    accordionTabs.forEach(tab => {
        tab.style.cursor = 'pointer'; // 確保滑鼠游標是手型
        tab.addEventListener('click', function() {
            const content = this.nextElementSibling; // 抓取下一個兄弟元素 (p標籤)
            if (content.style.display === 'none') {
                content.style.display = 'block';
                this.querySelector('span').innerText = '▲';
            } else {
                content.style.display = 'none';
                this.querySelector('span').innerText = '▼';
            }
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
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
            (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) // Ctrl+U / Ctrl+S
        ) {
            e.preventDefault();
            alert("🔮 能量不穩：偵測到異常存取行為，防禦機制已啟動。");
            return false;
        }
    });

    // 偵測開發者工具 (Debug 陷阱)
    setInterval(() => {
        const start = performance.now();
        debugger;
        if (performance.now() - start > 100) {
            document.body.innerHTML = `
                <div style="background:#1a0a2e; color:white; text-align:center; padding-top:20%; font-family:'Noto Sans TC'; height:100vh;">
                    <h1>🔮 魔法迴路過載</h1>
                    <p>偵測到異常檢視行為，能量連線已重置。</p>
                    <button onclick="location.reload()" style="padding:10px 20px; border-radius:20px; cursor:pointer; margin-top:20px;">重新讀取能量</button>
                </div>`;
        }
    }, 1000);
});
