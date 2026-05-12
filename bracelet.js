/**
 * CrystalLight 專業電商版整合 JS
 */

const baseSettings = [
    { name: "粉紅戀語", color: "pink", effect: "love", keywords: "好人緣、桃花" },
    { name: "招財金光", color: "yellow", effect: "wealth", keywords: "事業、財運" },
    { name: "智慧藍海", color: "blue", effect: "wisdom", keywords: "冷靜、思考" },
    { name: "靜心黑曜", color: "black", effect: "protection", keywords: "避邪、擋煞" },
    { name: "紫色夢境", color: "purple", effect: "wisdom", keywords: "靈感、貴人" }
];

const styles = ["彈性手串", "精緻細鍊", "能量原礦吊墜", "簡約繞圈手鍊", "文青編織款", "純銀扣頭款"];
const crystalProducts = [];

// 生成 30 款親民價位商品 (NT$ 390 - 1190)
let counter = 1;
baseSettings.forEach(base => {
    styles.forEach((style, index) => {
        const randomPrice = Math.floor(Math.random() * 80) * 10 + 390;
        crystalProducts.push({
            id: counter++,
            name: `${base.name} ${style}`,
            effect: base.effect,
            color: base.color,
            price: randomPrice,
            tag: counter % 8 === 0 ? 'HOT' : (counter % 5 === 0 ? 'NEW' : null),
            desc: `【${base.keywords}】專屬您的能量飾品，輕盈無負擔。`
        });
    });
});

let cart = JSON.parse(localStorage.getItem('cl-cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('cl-wish')) || [];

// 自定義通知函式
function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    const effectFilter = document.getElementById('effect-filter').value;
    const colorFilter = document.getElementById('color-filter').value;
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    
    grid.innerHTML = '';

    const filtered = crystalProducts.filter(p => {
        const matchEffect = (effectFilter === 'all' || p.effect === effectFilter);
        const matchColor = (colorFilter === 'all' || p.color === colorFilter);
        const matchSearch = p.name.toLowerCase().includes(searchQuery);
        return matchEffect && matchColor && matchSearch;
    });

    if(filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:100px 20px;">
                <i class="fas fa-search" style="font-size:3rem; color:#f0f0f0; margin-bottom:20px;"></i>
                <p style="color:#bbb;">找不到相關商品，試試看其他關鍵字？</p>
                <button onclick="resetFilters()" style="margin-top:10px; border:none; background:none; color:var(--primary); text-decoration:underline; cursor:pointer;">重設篩選條件</button>
            </div>`;
        return;
    }

    filtered.forEach(p => {
        const isWished = wishlist.some(item => item.id === p.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            ${p.tag ? `<span class="badge ${p.tag === 'NEW' ? 'badge-new' : 'badge-hot'}">${p.tag}</span>` : ''}
            <div class="img-box">
                <img src="picture/${p.color}01.jpg" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400?text=Crystal'">
            </div>
            <div class="info-box">
                <h3>${p.name}</h3>
                <div class="price-tag">NT$ ${p.price.toLocaleString()}</div>
            </div>
            <div class="card-btns">
                <button class="btn-action" onclick="addToCart(${p.id})">加入購物車</button>
                <button class="btn-action" style="border-left:1px solid #f9f9f9; flex:none; width:60px;" onclick="toggleWish(${p.id})">
                    <i class="${isWished ? 'fas' : 'far'} fa-heart" style="color:${isWished ? '#ff7675' : '#eee'}"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function resetFilters() {
    document.getElementById('effect-filter').value = 'all';
    document.getElementById('color-filter').value = 'all';
    document.getElementById('search-input').value = '';
    renderProducts();
}

function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if(existing) {
        existing.qty += 1;
    } else {
        const p = crystalProducts.find(x => x.id === id);
        cart.push({...p, qty: 1});
    }
    updateUI();
    showToast("✨ 已加入購物車");
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if(cart[index].qty <= 0) cart.splice(index, 1);
    updateUI();
    openCheckout();
}

function toggleWish(id) {
    const idx = wishlist.findIndex(item => item.id === id);
    if(idx === -1) {
        wishlist.push(crystalProducts.find(x => x.id === id));
        showToast("💖 已收藏商品");
    } else {
        wishlist.splice(idx, 1);
    }
    updateUI();
    renderProducts();
}

function updateUI() {
    localStorage.setItem('cl-cart', JSON.stringify(cart));
    localStorage.setItem('cl-wish', JSON.stringify(wishlist));
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    document.getElementById('cartCount').innerText = totalQty;
    document.getElementById('wishCount').innerText = wishlist.length;
}

function openModal(content) {
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('commonModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('commonModal').style.display = 'none';
}

function openCheckout() {
    let html = `<h3 style="font-family:'Montserrat'">Shopping Cart</h3><hr style="border:none; border-top:1px solid #eee; margin:15px 0;">`;
    if(cart.length === 0) {
        html += "<p style='text-align:center; padding:40px; color:#999;'>您的購物車目前是空的。</p>";
    } else {
        let total = 0;
        cart.forEach((item, index) => {
            total += (item.price * item.qty);
            html += `
            <div class="modal-item">
                <img src="picture/${item.color}01.jpg" class="modal-img">
                <div style="flex:1">
                    <div style="font-weight:bold; font-size:0.9rem;">${item.name}</div>
                    <div style="color:var(--price-color); font-size:0.85rem;">NT$ ${item.price}</div>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                        <span style="font-size:0.9rem; font-weight:bold;">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </div>
                <div style="font-weight:bold;">$${(item.price * item.qty).toLocaleString()}</div>
            </div>`;
        });
        html += `<h3 style="text-align:right; margin-top:20px;">總計: NT$ ${total.toLocaleString()}</h3>`;
        html += `<button class="btn-action" style="width:100%; background:var(--primary); color:white; margin-top:20px; border-radius:12px;" onclick="alert('導向結帳頁面...')">立即結帳</button>`;
    }
    openModal(html);
}

function openWishlist() {
    let html = `<h3>My Wishlist</h3><br>`;
    if(wishlist.length === 0) {
        html += "<p style='text-align:center; color:#999; padding:20px;'>尚無收藏商品</p>";
    } else {
        wishlist.forEach(item => {
            html += `
            <div class="modal-item">
                <img src="picture/${item.color}01.jpg" class="modal-img">
                <div style="flex:1">
                    <div style="font-weight:bold">${item.name}</div>
                    <div style="color:var(--price-color)">NT$ ${item.price}</div>
                </div>
                <button class="btn-action" style="padding:8px 12px; font-size:0.75rem; flex:none; border-radius:5px;" onclick="addToCart(${item.id})">移至購物車</button>
            </div>`;
        });
    }
    openModal(html);
}

// 啟動渲染
renderProducts();
updateUI();
