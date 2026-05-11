/**
 * bracelet.js
 */

// --- 1. 購物車邏輯 ---
let cartCount = 0;
function addToCart(name) {
    cartCount++;
    const countLabel = document.getElementById('cartCount');
    const cartBtn = document.getElementById('cartButton');
    
    if (countLabel) countLabel.innerText = cartCount;
    alert(`✨ 【${name}】已成功加入魔法購物車！`);

    // 動畫效果
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.3) rotate(-10deg)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    }
}

// --- 2. 下拉式篩選邏輯 ---
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

        // 必須同時符合「功效」與「顏色」才會顯示
        if (effectMatch && colorMatch) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

if (effectFilter) effectFilter.addEventListener('change', filterProducts);
if (colorFilter) colorFilter.addEventListener('change', filterProducts);

// --- 3. 魔法守護腳本 ---
document.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站內容受保護，無法使用右鍵選單。");
});

document.onkeydown = e => {
    if (e.keyCode === 123 || 
        (e.ctrlKey && [83, 85].includes(e.keyCode)) || 
        (e.ctrlKey && e.shiftKey && [73, 74].includes(e.keyCode))) {
        return false;
    }
};
