// 商品資料庫 (模擬 30 款)
const baseData = [
    { name: "靜謐星空", color: "blue", effect: "wisdom", tags: ["HOT"] },
    { name: "春之朝露", color: "pink", effect: "love", tags: ["NEW"] },
    { name: "沐金時刻", color: "yellow", effect: "wealth", tags: null },
    { name: "深邃防護", color: "black", effect: "protection", tags: null },
    { name: "靈感紫霧", color: "purple", effect: "wisdom", tags: ["NEW"] }
];

const styles = ["圓珠手串", "幾何切面", "極細鎖骨鍊", "編織手繩", "原石吊墜", "簡約耳環"];
const products = [];

// 生成資料
baseData.forEach(base => {
    styles.forEach((style, i) => {
        products.push({
            id: products.length + 1,
            name: `${base.name} ${style}`,
            color: base.color,
            effect: base.effect,
            price: Math.floor(Math.random() * 600) + 390,
            tag: base.tags ? base.tags[0] : (i === 0 ? "NEW" : null)
        });
    });
});

let cart = JSON.parse(localStorage.getItem('cl_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('cl_wish')) || [];

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-check-circle" style="color:#b59f8a; margin-right:10px;"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    const q = document.getElementById('search-input').value.toLowerCase();
    const effect = document.getElementById('effect-filter').value;
    const color = document.getElementById('color-filter').value;

    const filtered = products.filter(p => {
        return (effect === 'all' || p.effect === effect) &&
               (color === 'all' || p.color === color) &&
               (p.name.toLowerCase().includes(q));
    });

    grid.innerHTML = filtered.map(p => {
        const inWish = wishlist.some(w => w.id === p.id);
        return `
            <div class="product-card">
                <div class="img-box">
                    ${p.tag ? `<span class="badge" style="position:absolute; top:15px; left:15px; background:rgba(0,0,0,0.7); color:white; padding:4px 10px; font-size:10px; z-index:1;">${p.tag}</span>` : ''}
                    <img src="picture/${p.color}01.jpg" onerror="this.src='https://via.placeholder.com/400x500?text=Crystal'">
                </div>
                <div class="info-box">
                    <h3>${p.name}</h3>
                    <div class="price-tag">NT$ ${p.price.toLocaleString()}</div>
                </div>
                <div class="card-btns">
                    <button class="btn-buy" onclick="addToCart(${p.id})">加入購物車</button>
                    <button class="btn-buy" style="flex:0; padding:18px 25px;" onclick="toggleWish(${p.id})">
                        <i class="${inWish ? 'fa-solid' : 'fa-regular'} fa-heart" style="color:${inWish ? '#e74c3c' : '#ccc'}"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function addToCart(id) {
    const p = products.find(x => x.id === id);
    const exist = cart.find(x => x.id === id);
    if(exist) exist.qty++; else cart.push({...p, qty: 1});
    updateUI();
    showToast("成功加入購物袋");
}

function toggleWish(id) {
    const idx = wishlist.findIndex(x => x.id === id);
    if(idx > -1) wishlist.splice(idx, 1); 
    else {
        wishlist.push(products.find(x => x.id === id));
        showToast("已加入收藏清單");
    }
    updateUI();
    renderProducts();
}

function updateUI() {
    localStorage.setItem('cl_cart', JSON.stringify(cart));
    localStorage.setItem('cl_wish', JSON.stringify(wishlist));
    document.getElementById('cartCount').innerText = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById('wishCount').innerText = wishlist.length;
}

// 初始化
updateUI();
renderProducts();

// 點擊 Modal 外部關閉
window.onclick = function(e) {
    if(e.target.className === 'modal-overlay') closeModal();
}
