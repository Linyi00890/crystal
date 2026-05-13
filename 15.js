/**
 * 專業版守護與互動腳本
 */

// 1. 浮動購物車切換功能
function toggleCartMenu() {
    const menu = document.getElementById('cartMenu');
    menu.classList.toggle('active');
}

// 點擊外面自動關閉菜單
window.addEventListener('click', function(e) {
    const cart = document.getElementById('floatingCart');
    const menu = document.getElementById('cartMenu');
    if (menu && !cart.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// 2. 原始保護機制 (不變動)
document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('keydown', e => {
    if (e.key === "F12" || 
       (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
       (e.ctrlKey && (e.key === "u" || e.key === "s"))) {
        e.preventDefault();
        return false;
    }
});