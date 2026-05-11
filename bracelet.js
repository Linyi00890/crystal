/**
 * bracelet.js
 * 整合內容：
 * 1. 購物車數量累加與動畫回饋
 * 2. 頁面右鍵禁用與防護提示
 * 3. 開發者工具與系統存檔快捷鍵禁用
 */

// ==========================================
// --- 1. 簡易購物車邏輯 ---
// ==========================================
let count = 0;

/**
 * 處理加入購物車點擊事件
 * @param {string} itemName - 產品名稱
 */
function addToCart(itemName) {
    // 增加計數
    count++;
    
    // 更新網頁上的購物車數字 (確保 HTML 中有 id="cartCount")
    const countDisplay = document.getElementById('cartCount');
    if (countDisplay) {
        countDisplay.innerText = count;
    }
    
    // 簡單的視覺回饋
    alert('✨ ' + itemName + ' 已成功加入購物車！');
    
    // 讓購物車按鈕產生跳動效果 (確保 HTML 中有 id="cartButton")
    const cartBtn = document.getElementById('cartButton');
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.3) rotate(-10deg)';
        cartBtn.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    }
}

// ==========================================
// --- 2. 魔法守護腳本 (防護功能) ---
// ==========================================

// A. 禁用右鍵選單並跳出提醒
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

// B. 禁用快捷鍵 (F12, Ctrl+U, Ctrl+Shift+I 等)
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
    
    // 禁用 Ctrl+S (存檔功能)
    if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault(); // 額外防止瀏覽器預設存檔動作
        return false;
    }
    
    // 禁用 Ctrl+P (列印)
    if (e.ctrlKey && e.keyCode === 80) {
        return false;
    }
};

// 在控制台留下一個優雅的警告（針對從選單強行打開控制台的用戶）
console.log(
    "%c🔮 CrystalMagic 提醒", 
    "color: #ad1457; font-size: 20px; font-weight: bold; text-shadow: 1px 1px 2px #f8bbd0;"
);
console.log("水晶能量在此守護，請尊重版權，勿非法複製內容。");
