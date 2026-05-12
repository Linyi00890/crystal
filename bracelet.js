/**
 * bracelet.js - 專業升級版
 */

// --- 1. 購物車邏輯 (增加微震動反饋) ---
let cartCount = 0;
function addToCart(name) {
    cartCount++;
    const countLabel = document.getElementById('cartCount');
    const cartBtn = document.getElementById('cartButton');
    
    if (countLabel) {
        countLabel.innerText = cartCount;
        countLabel.style.transform = 'scale(1.5)';
        setTimeout(() => countLabel.style.transform = 'scale(1)', 200);
    }
    
    // 使用更溫和的提示，或者你可以改用 Toast UI
    console.log(`✨ 【${name}】已加入`); 
    
    // 動畫效果
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.2) rotate(-10deg)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    }
}

// --- 2. 強化版篩選邏輯 (增加「查無結果」提示) ---
const effectFilter = document.getElementById('effect-filter');
const colorFilter = document.getElementById('color-filter');
const products = document.querySelectorAll('.product-item');
const productGrid = document.getElementById('productGrid');

// 建立一個提示訊息容器
const noResultMsg = document.createElement('div');
noResultMsg.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px; color: #888;">
    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 15px; color: #ddd;"></i>
    <p>目前沒有找到符合條件的能量飾品，嘗試換個組合吧！</p>
</div>`;
noResultMsg.style.display = 'none';
productGrid.appendChild(noResultMsg);

function filterProducts() {
    const effectValue = effectFilter.value;
    const colorValue = colorFilter.value;
    let visibleCount = 0;

    products.forEach(item => {
        const itemEffect = item.getAttribute('data-effect');
        const itemColor = item.getAttribute('data-color');

        const effectMatch = (effectValue === 'all' || itemEffect === effectValue);
        const colorMatch = (colorValue === 'all' || itemColor === colorValue);

        if (effectMatch && colorMatch) {
            item.style.display = 'flex'; // 配合 CSS 佈局
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transition = 'opacity 0.4s ease';
            }, 10);
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    // 顯示/隱藏「無結果」訊息
    noResultMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
}

if (effectFilter) effectFilter.addEventListener('change', filterProducts);
if (colorFilter) colorFilter.addEventListener('change', filterProducts);

// --- 3. 頁面捲動監聽 (讓 Header 更專業) ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.padding = '0.6rem 5%';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.85)';
        header.style.padding = '1rem 5%';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    }
});

// --- 4. 魔法守護 (保留原本邏輯) ---
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = e => {
    if (e.keyCode === 123 || (e.ctrlKey && [83, 85, 73, 74].includes(e.keyCode))) return false;
};
