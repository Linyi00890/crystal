/**
 * bracelet.js
 * 包含：購物車邏輯 與 魔法守護腳本
 */

// --- 簡易購物車邏輯 ---
let count = 0;

function addToCart(itemName) {
    count++;
    document.getElementById('cartCount').innerText = count;
    
    // 簡單的視覺回饋
    alert('✨ ' + itemName + ' 已加入購物車！');
    
    // 讓購物車按鈕動一下
    const cartBtn = document.getElementById('cartButton');
    cartBtn.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}


// --- 魔法守護腳本 ---

// 1. 禁用右鍵選單並跳出提醒
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

// 2. 禁用快捷鍵 (F12, Ctrl+U, Ctrl+Shift+I 等)
document.onkeydown = function (e) {
    // 禁用 F12 (keyCode 123)
    if (e.keyCode === 123) {
        return false;
    }
    // 禁用 Ctrl+Shift+I (開發者工具)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        return false;
    }
    // 禁用 Ctrl+Shift+J (開發者工具)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        return false;
    }
    // 禁用 Ctrl+U (檢視原始碼)
    if (e.ctrlKey && e.keyCode === 85) {
        return false;
    }
    // 禁用 Ctrl+S (存檔)
    if (e.ctrlKey && e.keyCode === 83) {
        return false;
    }
};
