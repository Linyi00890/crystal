/**
 * 粒子背景動畫系統
 */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

// 初始化畫布大小
function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// 粒子類別
class P {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.s = Math.random() * 1.5;
        this.vx = Math.random() * 0.2 - 0.1;
        this.vy = Math.random() * 0.2 - 0.1;
    }
    draw() {
        ctx.fillStyle = "rgba(191, 149, 63, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
        ctx.fill();
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        // 邊界碰撞檢測
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
}

// 建立粒子群
function setup() {
    particles = []; // 重置陣列
    for (let i = 0; i < 80; i++) {
        particles.push(new P());
    }
}

// 動畫迴圈
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(loop);
}

// 視窗大小改變監聽
window.addEventListener('resize', () => {
    init();
    setup(); // 重新分配粒子防止超出範圍
});

// 啟動動畫
init();
setup();
loop();

/**
 * 手風琴互動選單邏輯
 */
document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
        // 取得點擊的項目父層 (accordion-item)
        const item = btn.closest('.accordion-item');
        const isActive = item.classList.contains('active');
        
        // 關閉所有其他已開啟的項目 (單選模式)
        document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
        });
        
        // 如果原本不是開啟狀態，則切換為開啟
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
