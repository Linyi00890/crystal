/**
 * CrystalMagic 終極整合版
 */

// 1. 商品數據 (包含 30 樣商品定義)
const crystalProducts = [
    { id: 1, name: "極光粉晶手鍊", effect: "love", color: "pink", icon: "❤", price: 1680, desc: "開啟心輪力量，招來正桃花與完美人緣。" },
    { id: 2, name: "王者黃水晶", effect: "wealth", color: "yellow", icon: "💰", price: 2200, desc: "招正財與偏財，增強自信與事業野心。" },
    { id: 3, name: "烏拉圭紫晶", effect: "wisdom", color: "purple", icon: "🧠", price: 1350, desc: "開發智慧、集中精神，適合考生。" },
    { id: 4, name: "金曜石護盾", effect: "protection", color: "black", icon: "🛡", price: 980, desc: "吸收負能量，辟邪擋煞。" },
    { id: 5, name: "天河石之泉", effect: "health", color: "blue", icon: "🌿", price: 1580, desc: "平復焦慮，帶來勇氣與好運。" },
    { id: 6, name: "草莓晶仙子", effect: "love", color: "pink", icon: "❤", price: 1200, desc: "增進人際關係，散發溫柔魅力。" },
    { id: 7, name: "綠幽靈貴人", effect: "wealth", color: "green", icon: "💰", price: 3600, desc: "招來正財與工作好運。" }
];

// 自動生成剩餘的 23 樣商品作為範例
for(let i = 8; i <= 30; i++) {
    const base = crystalProducts[i % 5];
    crystalProducts.push({
        ...base,
        id: i,
        name: `${base.name.substring(2)} - 能量增強版 ${i}`,
        price: base.price + (i * 10)
    });
}

// 狀態管理
let cart = JSON.parse(localStorage.getItem('cm-cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('cm-wish')) || [];

// 2. 渲染商品網格
function renderProducts(data) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    data.forEach(p => {
        const isWished = wishlist.some(item => item.id === p.id);
        const item = document.createElement('article');
        item.className = 'product-item';
        item.innerHTML = `
            <div class="image-container">
                <img src="picture/${p.color}01.jpg" onerror="this.src='https://via.placeholder.com/300x300?text=${p.name}'">
                <button class="quick-view-btn" onclick="openQuickView(${p.id})">快速預覽</button>
            </div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <div class="price-tag">NT$ ${p.price}</div>
            </div>
            <div class="action-group">
                <button class="btn-add-cart" onclick="addToCart(${p.id})">加入購物車</button>
                <button class="btn-wish ${isWished ? 'active' : ''}" onclick="toggleWish(${p.id})">
                    <i class="${isWished ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
        `;
        grid.appendChild(item);
    });
}

// 3. 核心功能
function addToCart(id) {
    const p = crystalProducts.find(x => x.id === id);
    cart.push(p);
    saveAndUpdate();
}

function toggleWish(id) {
    const p = crystalProducts.find(x => x.id === id);
    const index = wishlist.findIndex(item => item.id === id);
    if (index === -1) {
        wishlist.push(p);
    } else {
        wishlist.splice(index, 1);
    }
    saveAndUpdate();
    renderProducts(crystalProducts); // 刷新介面狀態
}

function saveAndUpdate() {
    localStorage.setItem('cm-cart', JSON.stringify(cart));
    localStorage.setItem('cm-wish', JSON.stringify(wishlist));
    document.getElementById('cartCount').innerText = cart.length;
    document.getElementById('wishCount').innerText = wishlist.length;
}

// 4. Modal 控制器
function openQuickView(id) {
    const p = crystalProducts.find(x => x.id === id);
    const body = document.getElementById('modalBodyContent');
    body.innerHTML = `
        <img src="picture/${p.color}01.jpg" style="width:100%; border-radius:15px;" onerror="this.src='https://via.placeholder.com/300x300'">
        <h2 style="margin: 20px 0 10px;">${p.name}</h2>
        <p style="color:#666; margin-bottom: 20px;">${p.desc}</p>
        <div style="font-size: 1.5rem; color:var(--sale-red); font-weight:bold; margin-bottom: 20px;">NT$ ${p.price}</div>
        <button class="btn-add-cart" style="width:100%" onclick="addToCart(${p.id}); closeModal();">立即加入購物車</button>
    `;
    document.getElementById('commonModal').style.display = 'block';
}

function openWishlist() {
    const body = document.getElementById('modalBodyContent');
    body.innerHTML = `<h2>❤ 我的收藏清單</h2><hr style="margin:15px 0;">`;
    if(wishlist.length === 0) {
        body.innerHTML += `<p style="text-align:center; padding:20px;">目前清單空空如也...</p>`;
    } else {
        wishlist.forEach((p, index) => {
            body.innerHTML += `
                <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #eee;">
                    <span>${p.name}</span>
                    <span style="color:var(--sale-red); cursor:pointer;" onclick="removeFromWish(${index})">移除</span>
                </div>`;
        });
    }
    document.getElementById('commonModal').style.display = 'block';
}

function removeFromWish(index) {
    wishlist.splice(index, 1);
    saveAndUpdate();
    openWishlist();
    renderProducts(crystalProducts);
}

function openCheckout() {
    const body = document.getElementById('modalBodyContent');
    let total = cart.reduce((sum, p) => sum + p.price, 0);
    body.innerHTML = `<h2>🛒 結帳確認</h2><hr style="margin:15px 0;">`;
    if(cart.length === 0) {
        body.innerHTML += `<p style="text-align:center; padding:20px;">購物車是空的</p>`;
    } else {
        cart.forEach(p => {
            body.innerHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span>${p.name}</span><span>$${p.price}</span>
            </div>`;
        });
        body.innerHTML += `<hr style="margin:15px 0;"><h3 style="text-align:right;">總計金額: NT$ ${total}</h3>`;
        body.innerHTML += `<button class="btn-add-cart" style="width:100%; margin-top:20px;" onclick="alert('下單成功！能量準備發送中')">確認結帳</button>`;
    }
    document.getElementById('commonModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('commonModal').style.display = 'none';
}

// 5. 高級防護：禁止開發者工具與快捷鍵
(function() {
    // 禁止 F12, Ctrl+Shift+I, Ctrl+U
    document.onkeydown = function(e) {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.keyCode == 85)) {
            return false;
        }
    };
    // 斷點陷阱：開啟工具會自動卡死
    setInterval(function() { debugger; }, 1000);
})();

// 初始化啟動
renderProducts(crystalProducts);
saveAndUpdate();
