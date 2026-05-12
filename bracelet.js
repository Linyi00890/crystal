// 商品數據初始化
const crystals = [
    { id: 1, name: "草莓晶鎖骨鍊", color: "pink", effect: "love", price: 490 },
    { id: 2, name: "黃水晶事業球", color: "yellow", effect: "wealth", price: 680 },
    { id: 3, name: "海藍寶靜心串", color: "blue", effect: "wisdom", price: 550 },
    { id: 4, name: "黑曜石辟邪環", color: "black", effect: "protection", price: 390 },
    { id: 5, name: "薰衣草紫晶", color: "purple", effect: "wisdom", price: 720 },
    { id: 6, name: "粉晶招財貓", color: "pink", effect: "love", price: 420 }
];

let cart = [];
let wishlist = [];

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerText = msg;
    container.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    const q = document.getElementById('search-input').value.toLowerCase();
    const eff = document.getElementById('effect-filter').value;
    const col = document.getElementById('color-filter').value;

    const filtered = crystals.filter(p => 
        (eff === 'all' || p.effect === eff) &&
        (col === 'all' || p.color === col) &&
        (p.name.includes(q))
    );

    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="img-container border-${p.color}">
                <img src="picture/${p.color}01.jpg" onerror="this.src='https://via.placeholder.com/300x300?text=${p.name}'">
            </div>
            <div style="padding:15px; text-align:center;">
                <h3 style="font-size:1rem; margin-bottom:10px;">${p.name}</h3>
                <div style="color:var(--accent); font-weight:bold;">NT$ ${p.price}</div>
                <div style="display:flex; gap:10px; margin-top:10px;">
                    <button class="primary-btn" style="margin:0; flex:4" onclick="addToCart(${p.id})">加入</button>
                    <button class="primary-btn" style="margin:0; flex:1; background:#f0f0f0; color:#333" onclick="toggleWish(${p.id})">❤</button>
                </div>
            </div>
        </div>
    `).join('');
}

// 購物車邏輯
function addToCart(id) {
    const p = crystals.find(x => x.id === id);
    cart.push(p);
    updateCount();
    showToast("✨ 已加入購物袋");
}

function toggleWish(id) {
    wishlist.push(crystals.find(x => x.id === id));
    updateCount();
    showToast("💖 已收藏");
}

function updateCount() {
    document.getElementById('cartCount').innerText = cart.length;
    document.getElementById('wishCount').innerText = wishlist.length;
}

// 彈窗系統
function openModal(content) {
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('commonModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('commonModal').style.display = 'none';
}

// 分步觀看：購物車 -> 填寫資料 -> 完成
function openCheckout() {
    renderCartStep();
}

function renderCartStep() {
    let total = cart.reduce((s, i) => s + i.price, 0);
    let html = `
        <div class="step-header"><span class="active">1.確認清單</span> <span>2.配送資訊</span></div>
        <div style="max-height:300px; overflow-y:auto;">
            ${cart.length === 0 ? '<p>購物車空空的</p>' : cart.map(i => `
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
                    <span>${i.name}</span><span>NT$ ${i.price}</span>
                </div>
            `).join('')}
        </div>
        <h3 style="text-align:right; margin-top:20px;">總額：NT$ ${total}</h3>
        <button class="primary-btn" onclick="renderInfoStep()" ${cart.length === 0 ? 'disabled' : ''}>下一步：填寫資料</button>
    `;
    openModal(html);
}

function renderInfoStep() {
    let html = `
        <div class="step-header"><span>1.確認清單</span> <span class="active">2.配送資訊</span></div>
        <div class="checkout-form">
            <input type="text" id="ship-name" placeholder="收件人姓名">
            <input type="tel" id="ship-phone" placeholder="聯絡電話">
            <input type="text" id="ship-address" placeholder="收件地址">
            <select class="fancy-select">
                <option>信用卡付款</option>
                <option>貨到付款</option>
            </select>
        </div>
        <button class="primary-btn" onclick="processOrder()">確認結帳</button>
        <button onclick="renderCartStep()" style="background:none; border:none; width:100%; margin-top:10px; color:#999; cursor:pointer;">返回上一步</button>
    `;
    openModal(html);
}

function processOrder() {
    const name = document.getElementById('ship-name').value;
    if(!name) { alert("請填寫姓名"); return; }
    
    openModal(`
        <div style="text-align:center; padding:30px;">
            <i class="fa-solid fa-circle-check" style="font-size:4rem; color:var(--accent); margin-bottom:20px;"></i>
            <h2>訂單已成立！</h2>
            <p>感謝 ${name} 的訂購，能量水晶即將啟程。</p>
            <button class="primary-btn" onclick="finishOrder()">回到商店</button>
        </div>
    `);
}

function finishOrder() {
    cart = [];
    updateCount();
    closeModal();
    renderProducts();
}

// 初始渲染
renderProducts();
