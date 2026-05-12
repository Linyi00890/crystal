/**
 * CrystalMagic 頂級珠寶 JS - 30款獨一無二中高階商品
 */

// 基礎類型定義
const baseTypes = [
    { name: "極光粉晶", color: "pink", effect: "love", desc: "頂級馬達加斯加粉晶，對應心輪，吸引高頻率桃花。" },
    { name: "金鈦晶", color: "yellow", effect: "wealth", desc: "水晶之王，強大招財能量，助事業突破瓶頸與偏財運。" },
    { name: "深海青金石", color: "blue", effect: "wisdom", desc: "阿富汗精選，開啟智慧之眼，提升覺知與冷靜判斷力。" },
    { name: "極黑曜石", color: "black", effect: "protection", desc: "墨西哥彩虹黑曜，強效避邪，阻隔外界所有負面磁場。" },
    { name: "夢幻紫水晶", color: "purple", effect: "wisdom", desc: "烏拉圭深紫晶，守護純真愛情，開發靈感與貴人運。" }
];

// 形容詞與款式組合，確保 30 款全部不同
const adjectives = ["大師級", "珍藏版", "靈氣", "純淨", "典藏", "皇家"];
const formats = ["圓珠手鍊", "切面手串", "能量原礦", "18K金鑲嵌", "設計師款", "古法金串飾"];

const crystalProducts = [];

// 生成 30 個完全不同的中高價位商品
let idCounter = 1;
baseTypes.forEach(base => {
    formats.forEach(fmt => {
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        // 價格隨機訂在 2800 ~ 8800
        const randomPrice = Math.floor(Math.random() * 60) * 100 + 2800;
        
        crystalProducts.push({
            id: idCounter++,
            name: `${adj}${base.name}${fmt}`,
            effect: base.effect,
            color: base.color,
            price: randomPrice,
            desc: `${base.desc} 此件作品能量純淨，經大師親自開光祈福。`
        });
    });
});

// 資料儲存 (localStorage)
let cart = JSON.parse(localStorage.getItem('cm-cart-premium')) || [];
let wishlist = JSON.parse(localStorage.getItem('cm-wish-premium')) || [];

function renderProducts() {
    const grid = document.getElementById('productGrid');
    const filter = document.getElementById('effect-filter').value;
    if(!grid) return;
    grid.innerHTML = '';

    const filtered = crystalProducts.filter(p => filter === 'all' || p.effect === filter);

    filtered.forEach(p => {
        const isWished = wishlist.some(item => item.id === p.id);
        const item = document.createElement('article');
        item.className = 'product-item';
        item.innerHTML = `
            <div class="image-container">
                <img src="picture/${p.color}01.jpg" onerror="this.src='https://via.placeholder.com/400x500?text=${p.name}'">
                <button class="quick-view-btn" onclick="openQuickView(${p.id})">鑑賞細節</button>
            </div>
            <div style="padding:20px; text-align:center;">
                <h3 style="font-size:1.1rem; margin-bottom:10px;">${p.name}</h3>
                <div style="color:var(--sale-red); font-weight:700; font-size:1.2rem;">NT$ ${p.price.toLocaleString()}</div>
            </div>
            <div class="action-group">
                <button class="btn-add-cart" onclick="addToCart(${p.id})">加入購物袋</button>
                <button class="btn-wish ${isWished ? 'active' : ''}" onclick="toggleWish(${p.id})">
                    <i class="${isWished ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
        `;
        grid.appendChild(item);
    });
}

// 核心功能：加入購物車
function addToCart(id) {
    const p = crystalProducts.find(x => x.id === id);
    cart.push(p);
    saveData();
    alert(`【${p.name}】已加入您的購物清單`);
}

// 核心功能：切換收藏
function toggleWish(id) {
    const p = crystalProducts.find(x => x.id === id);
    const idx = wishlist.findIndex(item => item.id === id);
    if(idx === -1) wishlist.push(p);
    else wishlist.splice(idx, 1);
    saveData();
    renderProducts();
}

function saveData() {
    localStorage.setItem('cm-cart-premium', JSON.stringify(cart));
    localStorage.setItem('cm-wish-premium', JSON.stringify(wishlist));
    document.getElementById('cartCount').innerText = cart.length;
    document.getElementById('wishCount').innerText = wishlist.length;
}

// 彈窗控制
function openModal(html) {
    document.getElementById('modalBodyContent').innerHTML = html;
    document.getElementById('commonModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('commonModal').style.display = 'none';
}

// 快速預覽 (含細節)
function openQuickView(id) {
    const p = crystalProducts.find(x => x.id === id);
    openModal(`
        <img src="picture/${p.color}01.jpg" style="width:100%; height:350px; object-fit:cover; border-radius:10px;" onerror="this.src='https://via.placeholder.com/400'">
        <h2 style="font-family:'Playfair Display'; margin-top:20px;">${p.name}</h2>
        <p style="color:#666; margin:15px 0; line-height:1.8;">${p.desc}</p>
        <div style="font-size:1.8rem; color:var(--sale-red); font-weight:bold;">NT$ ${p.price.toLocaleString()}</div>
        <button class="btn-add-cart" style="width:100%; margin-top:20px;" onclick="addToCart(${p.id}); closeModal();">立即典藏</button>
    `);
}

// 購物車結帳清單 (含圖片縮圖)
function openCheckout() {
    let total = cart.reduce((sum, p) => sum + p.price, 0);
    let html = `<h2>您的選購清單</h2><hr style="margin:15px 0; border:0; border-top:1px solid #eee;">`;
    
    if(cart.length === 0) {
        html += "<p style='padding:30px;'>清單目前空無一物。</p>";
    } else {
        cart.forEach((p, i) => {
            html += `
            <div class="modal-list-item">
                <img src="picture/${p.color}01.jpg" class="modal-list-img" onerror="this.src='https://via.placeholder.com/80'">
                <div class="modal-list-info">
                    <div class="modal-list-name">${p.name}</div>
                    <div class="modal-list-price">NT$ ${p.price.toLocaleString()}</div>
                </div>
                <i class="fas fa-trash-alt" style="cursor:pointer; color:#ddd;" onclick="removeFromCart(${i})"></i>
            </div>`;
        });
        html += `<h3 style="text-align:right; margin:25px 0;">結帳金額：NT$ ${total.toLocaleString()}</h3>`;
        html += `<button class="btn-add-cart" style="width:100%" onclick="openShippingForm()">前往寄件資訊</button>`;
    }
    openModal(html);
}

function removeFromCart(i) {
    cart.splice(i, 1);
    saveData();
    openCheckout();
}

// 我的收藏夾 (含圖片縮圖)
function openWishlist() {
    let html = `<h2>願望收藏夾</h2><hr style="margin:15px 0; border:0; border-top:1px solid #eee;">`;
    if(wishlist.length === 0) {
        html += "<p style='padding:30px;'>尚未收藏任何心動好物。</p>";
    } else {
        wishlist.forEach((p, i) => {
            html += `
            <div class="modal-list-item">
                <img src="picture/${p.color}01.jpg" class="modal-list-img" onerror="this.src='https://via.placeholder.com/80'">
                <div class="modal-list-info">
                    <div class="modal-list-name">${p.name}</div>
                    <div class="modal-list-price">NT$ ${p.price.toLocaleString()}</div>
                </div>
                <button style="border:none; background:none; color:red; cursor:pointer;" onclick="removeWish(${i})">移除</button>
            </div>`;
        });
    }
    openModal(html);
}

function removeWish(i) {
    wishlist.splice(i, 1);
    saveData();
    openWishlist();
    renderProducts();
}

// 寄件資料 (含清單摘要圖)
function openShippingForm() {
    let total = cart.reduce((sum, p) => sum + p.price, 0);
    let thumbs = `<div style="display:flex; gap:8px; overflow-x:auto; margin-bottom:20px; padding-bottom:10px;">`;
    cart.forEach(p => {
        thumbs += `<img src="picture/${p.color}01.jpg" style="width:50px; height:50px; border-radius:4px; object-fit:cover; flex-shrink:0; border:1px solid #eee;">`;
    });
    thumbs += `</div>`;

    let html = `
        <h2>🚛 貴賓配送資訊</h2>
        <p style="font-size:0.85rem; color:#888; margin-bottom:15px;">您選購的珍寶如下：</p>
        ${thumbs}
        <div class="shipping-form">
            <label>收件人貴賓姓名</label><input type="text" id="ship_name" placeholder="請輸入姓名">
            <label>聯繫電話</label><input type="tel" id="ship_phone" placeholder="請輸入聯繫電話">
            <label>配送詳細地址</label><input type="text" id="ship_addr" placeholder="請輸入收件地址">
            <div style="background:#f9f9f9; padding:15px; border-radius:5px; margin-top:10px;">
                <p>運送方式：全程保價專車宅配</p>
                <h3 style="margin-top:10px; color:var(--sale-red);">應付總額：NT$ ${total.toLocaleString()}</h3>
            </div>
            <button class="btn-add-cart" style="width:100%; margin-top:20px;" onclick="submitOrder()">確認提交訂單</button>
        </div>
    `;
    openModal(html);
}

function submitOrder() {
    const name = document.getElementById('ship_name').value;
    if(!name) { alert("請填寫貴賓姓名"); return; }
    alert(`感謝您的訂購，${name} 貴賓。\n專屬珠寶顧問將於 24 小時內連繫您確認。`);
    cart = [];
    saveData();
    closeModal();
}

// 初始化啟動
renderProducts();
saveData();
