/**
 * CrystalMagic 終極整合 JS
 */

const crystalProducts = [
    { id: 1, name: "極光粉晶手鍊", effect: "love", color: "pink", icon: "❤", price: 1680, desc: "招來正桃花與完美人緣。" },
    { id: 2, name: "王者黃水晶", effect: "wealth", color: "yellow", icon: "💰", price: 2200, desc: "招正財與偏財，增強事業心。" },
    { id: 3, name: "烏拉圭紫晶", effect: "wisdom", color: "purple", icon: "🧠", price: 1350, desc: "開發智慧、集中精神。" },
    { id: 4, name: "金曜石護盾", effect: "protection", color: "black", icon: "🛡", price: 980, desc: "吸收負能量，辟邪擋煞。" },
    { id: 5, name: "天河石之泉", effect: "health", color: "blue", icon: "🌿", price: 1580, desc: "平復焦慮，帶來勇氣。" }
];

// 補充生成至 30 樣
for(let i=6; i<=30; i++) {
    const base = crystalProducts[i % 5];
    crystalProducts.push({...base, id: i, name: `${base.name.substring(0,4)} No.${i}`, price: base.price + i});
}

let cart = JSON.parse(localStorage.getItem('cm-cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('cm-wish')) || [];

// 渲染商品
function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    crystalProducts.forEach(p => {
        const isWished = wishlist.some(item => item.id === p.id);
        const item = document.createElement('article');
        item.className = 'product-item';
        item.innerHTML = `
            <div class="image-container">
                <img src="picture/${p.color}01.jpg" onerror="this.src='https://via.placeholder.com/300x300?text=Crystal'">
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

// 購物車與收藏邏輯
function addToCart(id) {
    const p = crystalProducts.find(x => x.id === id);
    cart.push(p);
    saveData();
    alert(`已將 ${p.name} 加入購物車`);
}

function toggleWish(id) {
    const p = crystalProducts.find(x => x.id === id);
    const index = wishlist.findIndex(item => item.id === id);
    if (index === -1) wishlist.push(p);
    else wishlist.splice(index, 1);
    saveData();
    renderProducts();
}

function saveData() {
    localStorage.setItem('cm-cart', JSON.stringify(cart));
    localStorage.setItem('cm-wish', JSON.stringify(wishlist));
    document.getElementById('cartCount').innerText = cart.length;
    document.getElementById('wishCount').innerText = wishlist.length;
}

// 彈窗顯示核心
function openModal(contentHtml) {
    document.getElementById('modalBodyContent').innerHTML = contentHtml;
    document.getElementById('commonModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('commonModal').style.display = 'none';
}

// 1. 快速預覽
function openQuickView(id) {
    const p = crystalProducts.find(x => x.id === id);
    const html = `
        <img src="picture/${p.color}01.jpg" style="width:100%; border-radius:15px;" onerror="this.src='https://via.placeholder.com/300x300'">
        <h2 style="margin:15px 0;">${p.name}</h2>
        <p style="color:#666; margin-bottom:15px;">${p.desc}</p>
        <div style="font-size:1.5rem; color:var(--sale-red); font-weight:bold;">NT$ ${p.price}</div>
        <button class="btn-add-cart" style="width:100%; margin-top:20px;" onclick="addToCart(${p.id}); closeModal();">立即購買</button>
    `;
    openModal(html);
}

// 2. 收藏清單
function openWishlist() {
    let html = `<h2>❤ 我的收藏</h2><hr style="margin:15px 0;">`;
    if(wishlist.length === 0) html += "<p style='text-align:center; padding:20px;'>清單空空如也</p>";
    else {
        wishlist.forEach((p, i) => {
            html += `<div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #eee;">
                <span>${p.name}</span>
                <span style="color:red; cursor:pointer;" onclick="removeFromWish(${i})">移除</span>
            </div>`;
        });
    }
    openModal(html);
}

function removeFromWish(index) {
    wishlist.splice(index, 1);
    saveData();
    openWishlist(); // 刷新彈窗內容
    renderProducts(); // 刷新主頁面愛心狀態
}

// 3. 購物車/結算畫面
function openCheckout() {
    let total = cart.reduce((sum, p) => sum + p.price, 0);
    let html = `<h2>🛒 購物清單</h2><hr style="margin:15px 0;">`;
    if(cart.length === 0) html += "<p style='text-align:center; padding:20px;'>購物車是空的</p>";
    else {
        cart.forEach((p, i) => {
            html += `<div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span>${p.name}</span><span>$${p.price} <i class="fas fa-trash" onclick="removeFromCart(${i})" style="cursor:pointer; color:#ccc; margin-left:10px;"></i></span>
            </div>`;
        });
        html += `<hr><h3 style="text-align:right; margin-top:15px;">總計: NT$ ${total}</h3>`;
        html += `<button class="btn-add-cart" style="width:100%; margin-top:20px;" onclick="processFinal()">確認結帳</button>`;
    }
    openModal(html);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveData();
    openCheckout();
}

function processFinal() {
    alert("訂單已送出，感謝購買！");
    cart = [];
    saveData();
    closeModal();
}

// 安全防護
(function() {
    document.onkeydown = e => { if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) return false; };
    setInterval(() => { debugger; }, 2000);
})();

// 初始化
renderProducts();
saveData();
