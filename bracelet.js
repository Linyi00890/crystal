/**
 * bracelet.js
 * 整合：篩選、購物車、魔法守護
 */

// --- A. 購物車邏輯 ---
let cartCount = 0;
function addToCart(name) {
    cartCount++;
    const countLabel = document.getElementById('cartCount');
    const cartBtn = document.getElementById('cartButton');
    
    countLabel.innerText = cartCount;
    alert(`✨ 【${name}】已成功加入魔法購物車！`);

    // 動畫效果
    cartBtn.style.transform = 'scale(1.3) rotate(-10deg)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1) rotate(0deg)';
    }, 200);
}

// --- B. 下拉式篩選邏輯 ---
const effectFilter = document.getElementById('effect-filter');
const colorFilter = document.getElementById('color-filter');
const products = document.querySelectorAll('.product-item');

function filterProducts() {
    const effectValue = effectFilter.value;
    const colorValue = colorFilter.value;

    products.forEach(item => {
        const itemEffect = item.getAttribute('data-effect');
        const itemColor = item.getAttribute('data-color');

        const effectMatch = (effectValue === 'all' || itemEffect === effectValue);
        const colorMatch = (colorValue === 'all' || itemColor === colorValue);

        if (effectMatch && colorMatch) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

effectFilter.addEventListener('change', filterProducts);
colorFilter.addEventListener('change', filterProducts);

// --- C. 魔法守護腳本 (防拷貝) ---
document.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護。");
});

document.onkeydown = e => {
    // 禁用 F12, Ctrl+U, Ctrl+S, Ctrl+Shift+I/J
    if (e.keyCode === 123 || 
        (e.ctrlKey && [83, 85].includes(e.keyCode)) || 
        (e.ctrlKey && e.shiftKey && [73, 74].includes(e.keyCode))) {
        return false;
    }
};

console.log("%c🔮 CrystalMagic 提醒：能量流動中，請尊重原創。", "color: purple; font-size: 16px;");
