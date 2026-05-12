/**
 * CrystalMagic - 專業版 JS
 */

// 1. 購物車互動
let cartCount = 0;
function addToCart(name) {
    cartCount++;
    const countLabel = document.getElementById('cartCount');
    const cartBtn = document.getElementById('cartButton');
    
    if (countLabel) {
        countLabel.innerText = cartCount;
        countLabel.style.transform = 'scale(1.4)';
        setTimeout(() => countLabel.style.transform = 'scale(1)', 200);
    }

    // 觸覺反饋（在行動裝置上效果佳）
    if (window.navigator.vibrate) window.navigator.vibrate(50);
    
    // 自訂通知效果 (這裡暫用 console 模擬)
    console.log(`✨ 【${name}】已成功加入您的能量購物車！`);

    // 按鈕動態
    if (cartBtn) {
        cartBtn.style.transform = 'translateY(-10px) scale(1.1)';
        setTimeout(() => cartBtn.style.transform = 'translateY(0) scale(1)', 300);
    }
}

// 2. 高階篩選邏輯
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
            item.style.display = 'flex';
            setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => { item.style.display = 'none'; }, 300);
        }
    });
}

effectFilter.addEventListener('change', filterProducts);
colorFilter.addEventListener('change', filterProducts);

// 3. Header 捲動效果
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 4. 安全保護
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = e => {
    if (e.keyCode === 123 || (e.ctrlKey && [83, 85, 73, 74].includes(e.keyCode))) return false;
};
