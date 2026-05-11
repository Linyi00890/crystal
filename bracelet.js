/**
 * bracelet.js
 */

// 1. 購物車
let cartCount = 0;
function addToCart(name) {
    cartCount++;
    const countLabel = document.getElementById('cartCount');
    const cartBtn = document.getElementById('cartButton');
    
    if (countLabel) countLabel.innerText = cartCount;
    alert(`✨ 【${name}】已成功加入魔法購物車！`);

    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.3) rotate(-10deg)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1) rotate(0deg)';
        }, 250);
    }
}

// 2. 雙重篩選邏輯
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

if (effectFilter) effectFilter.addEventListener('change', filterProducts);
if (colorFilter) colorFilter.addEventListener('change', filterProducts);

// 3. 安全守護
document.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護。");
});

document.onkeydown = e => {
    if (e.keyCode === 123) return false;
    if ((e.ctrlKey || e.metaKey) && [83, 85].includes(e.keyCode)) return false;
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && [73, 74].includes(e.keyCode)) return false;
};
