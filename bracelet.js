/**
 * CrystalMagic 核心控制系統
 * 功能：動態渲染、聯動篩選、收藏夾、購物車、倒數計時、安全防護
 */

const crystalProducts = [
    { id: 1, name: "極光粉晶手鍊", effect: "love", color: "pink", icon: "❤", tag: "熱銷", desc: "開啟心輪力量，招來正桃花與完美人緣。", price: 1680, stock: 5 },
    { id: 2, name: "王者黃水晶", effect: "wealth", color: "yellow", icon: "💰", tag: "限量", desc: "招正財與偏財，增強自信與事業野心。", price: 2200, stock: 2 },
    { id: 3, name: "烏拉圭紫晶", effect: "wisdom", color: "purple", icon: "🧠", tag: "新品", desc: "開發智慧、集中精神，適合學生與考生。", price: 1350, stock: 8 },
    { id: 4, name: "金曜石護盾", effect: "protection", color: "black", icon: "🛡", tag: "強效", desc: "吸收負能量，辟邪擋煞，護佑平安。", price: 980, stock: 12 },
    { id: 5, name: "天河石之泉", effect: "health", color: "blue", icon: "🌿", tag: "推薦", desc: "平復焦慮，帶來平靜與勇氣。", price: 1580, stock: 4 },
    { id: 6, name: "草莓晶仙子", effect: "love", color: "pink", icon: "❤", tag: "熱銷", desc: "增進人際關係，散發溫柔魅力。", price: 1200, stock: 3 },
    { id: 7, name: "綠幽靈貴人", effect: "wealth", color: "green", icon: "💰", tag: "稀有", desc: "事業貴人石，招來正財與工作好運。", price: 3600, stock: 1 },
    { id: 8, name: "頂級金鈦晶", effect: "wealth", color: "yellow", icon: "💰", tag: "奢華", desc: "水晶之王，強力招財、提升領導力。", price: 5800, stock: 3 },
    { id: 9, name: "月光石戀人", effect: "love", color: "white", icon: "❤", tag: "熱銷", desc: "溫和守護愛情，調節情緒。", price: 1980, stock: 9 },
    { id: 10, name: "黑髮晶領袖", effect: "protection", color: "black", icon: "🛡", tag: "強效", desc: "消除病氣，增強決斷力。", price: 2100, stock: 6 },
    { id: 11, name: "白水晶鑽切", effect: "health", color: "white", icon: "🌿", tag: "經典", desc: "全能淨化，提升專注力。", price: 880, stock: 20 },
    { id: 12, name: "藍光拉長石", effect: "wisdom", color: "blue", icon: "🧠", tag: "新品", desc: "激發潛能、創造力。", price: 1450, stock: 7 },
    { id: 13, name: "太陽石暖陽", effect: "wealth", color: "yellow", icon: "💰", tag: "正能量", desc: "驅散負面情緒。", price: 1720, stock: 5 },
    { id: 14, name: "青金石秘境", effect: "wisdom", color: "blue", icon: "🧠", tag: "限量", desc: "增強觀察力。", price: 2400, stock: 2 },
    { id: 15, name: "多彩螢石", effect: "wisdom", color: "green", icon: "🧠", tag: "推薦", desc: "清理頭腦思緒。", price: 950, stock: 15 },
    { id: 16, name: "黑金金運石", effect: "wealth", color: "black", icon: "💰", tag: "強效", desc: "極強守財與招財。", price: 2880, stock: 4 },
    { id: 17, name: "粉紫鋰輝石", effect: "health", color: "purple", icon: "🌿", tag: "推薦", desc: "緩解壓力。", price: 3200, stock: 8 },
    { id: 18, name: "黑碧璽障壁", effect: "protection", color: "black", icon: "🛡", tag: "強烈", desc: "阻隔電子設備輻射。", price: 790, stock: 10 },
    { id: 19, name: "紅紋石真愛", effect: "love", color: "pink", icon: "❤", tag: "限量", desc: "吸引靈魂伴侶。", price: 4500, stock: 3 },
    { id: 20, name: "海藍寶勇氣", effect: "health", color: "blue", icon: "🌿", tag: "熱銷", desc: "強化表達能力。", price: 1380, stock: 12 },
    { id: 21, name: "葡萄石希望", effect: "health", color: "green", icon: "🌿", tag: "清爽", desc: "象徵新生與希望。", price: 1150, stock: 6 },
    { id: 22, name: "紅石榴石焰", effect: "health", color: "red", icon: "🌿", tag: "熱銷", desc: "補充氣血能量。", price: 1080, stock: 18 },
    { id: 23, name: "舒俱徠皇家", effect: "health", color: "purple", icon: "🌿", tag: "高貴", desc: "頂級療癒石。", price: 8800, stock: 2 },
    { id: 24, name: "琥珀金珀", effect: "protection", color: "yellow", icon: "🛡", tag: "古老", desc: "定驚安神。", price: 4200, stock: 4 },
    { id: 25, name: "天鐵能量", effect: "protection", color: "black", icon: "🛡", tag: "罕見", desc: "極高頻率保護磁場。", price: 9500, stock: 1 },
    { id: 26, name: "透輝石森林", effect: "health", color: "green", icon: "🌿", tag: "療癒", desc: "找回與大地的連接。", price: 2100, stock: 5 },
    { id: 27, name: "橄欖石陽光", effect: "wealth", color: "green", icon: "💰", tag: "推薦", desc: "排除嫉妒。", price: 1480, stock: 7 },
    { id: 28, name: "磷灰石深藍", effect: "wisdom", color: "blue", icon: "🧠", tag: "個性", desc: "激發溝通欲望。", price: 1250, stock: 9 },
    { id: 29, name: "摩根石甜點", effect: "love", color: "pink", icon: "❤", tag: "新品", desc: "平衡情感。", price: 2300, stock: 11 },
    { id: 30, name: "瑪瑙守護", effect: "protection", color: "orange", icon: "🛡", tag: "經典", desc: "護身穩定。", price: 680, stock: 25 }
];

let cart = JSON.parse(localStorage.getItem('cm-cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('cm-wish')) || [];

const productGrid = document.getElementById('productGrid');

// 1. 渲染商品
function renderProducts(data) {
    productGrid.innerHTML = '';
    data.forEach(p => {
        const isWished = wishlist.includes(p.id) ? 'active' : '';
        const item = document.createElement('article');
        item.className = 'product-item';
        item.innerHTML = `
            <button class="wish-btn ${isWished}" onclick="toggleWish(${p.id}, this)">
                <i class="${isWished ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <span class="sale-tag">${p.tag}</span>
            <div class="image-container">
                <img src="picture/${p.color}01.jpg" class="img-primary" onerror="this.src='https://via.placeholder.com/300x350?text=${p.name}'">
                <img src="picture/${p.color}02.jpg" class="img-secondary" onerror="this.src='https://via.placeholder.com/300x350?text=Energy+View'">
                <button class="quick-view-btn" onclick="openModal(${p.id})">快速預覽</button>
            </div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <div class="attr-badge">${p.icon} ${getEffectName(p.effect)}</div>
                <div style="font-weight:bold; font-size:1.2rem; color:var(--sale-red); margin:10px 0;">NT$ ${p.price}</div>
                <button class="btn-modal-add" onclick="addToCart(${p.id})">加入購物車</button>
            </div>
        `;
        productGrid.appendChild(item);
    });
}

function getEffectName(eff) {
    const map = { love: '提升人緣', wealth: '招財旺運', wisdom: '智慧覺醒', protection: '避邪護身', health: '身心療癒' };
    return map[eff] || '能量石';
}

// 2. 收藏與購物車邏輯
function toggleWish(id, btn) {
    const idx = wishlist.indexOf(id);
    if (idx === -1) { wishlist.push(id); btn.classList.add('active'); btn.innerHTML = '<i class="fas fa-heart"></i>'; }
    else { wishlist.splice(idx, 1); btn.classList.remove('active'); btn.innerHTML = '<i class="far fa-heart"></i>'; }
    localStorage.setItem('cm-wish', JSON.stringify(wishlist));
}

function addToCart(id) {
    const p = crystalProducts.find(x => x.id === id);
    cart.push(p);
    localStorage.setItem('cm-cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cartCount').innerText = cart.length;
}

function openCheckout() {
    const list = document.getElementById('checkoutList');
    const totalDiv = document.getElementById('checkoutTotal');
    list.innerHTML = '';
    let total = 0;
    cart.forEach((p, i) => {
        total += p.price;
        list.innerHTML += `<div class="checkout-item"><span>${p.name}</span><span>NT$ ${p.price} <i class="fas fa-times" onclick="removeFromCart(${i})" style="cursor:pointer;margin-left:10px;color:#ccc"></i></span></div>`;
    });
    totalDiv.innerText = `總計：NT$ ${total}`;
    document.getElementById('checkoutModal').style.display = 'block';
}

function removeFromCart(i) { cart.splice(i, 1); localStorage.setItem('cm-cart', JSON.stringify(cart)); updateCartUI(); openCheckout(); }
function closeCheckout() { document.getElementById('checkoutModal').style.display = 'none'; }
function processOrder() { if(cart.length === 0) return; alert("能量訂單已送出，感謝購買！"); cart=[]; localStorage.removeItem('cm-cart'); updateCartUI(); closeCheckout(); }

// 3. Modal 控制
function openModal(id) {
    const p = crystalProducts.find(x => x.id === id);
    document.getElementById('modalImg').src = `picture/${p.color}01.jpg`;
    document.getElementById('modalTitle').innerText = p.name;
    document.getElementById('modalDesc').innerText = p.desc;
    document.querySelector('.modal-price').innerText = `NT$ ${p.price}`;
    document.getElementById('modalAddBtn').onclick = () => addToCart(id);
    document.getElementById('quickViewModal').style.display = 'block';
}
function closeModal() { document.getElementById('quickViewModal').style.display = 'none'; }

// 4. 篩選邏輯
const effectFilter = document.getElementById('effect-filter');
const colorFilter = document.getElementById('color-filter');
function filterLogic() {
    const eff = effectFilter.value;
    const col = colorFilter.value;
    const filtered = crystalProducts.filter(p => (eff === 'all' || p.effect === eff) && (col === 'all' || p.color === col));
    renderProducts(filtered);
}
effectFilter.addEventListener('change', filterLogic);
colorFilter.addEventListener('change', filterLogic);

// 5. 倒數計時
function startCountdown() {
    let sec = 8 * 3600;
    setInterval(() => {
        sec--;
        let h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), s = sec%60;
        document.getElementById('countdown').innerText = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }, 1000);
}

// 6. 高級安全防護 (禁止快捷鍵與 Debugger 陷阱)
(function() {
    document.onkeydown = function(e) {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || (e.ctrlKey && e.keyCode == 85)) {
            return false;
        }
    };
    // 開啟開發者工具會卡死
    setInterval(() => { debugger; }, 100);
})();

// 初始化
renderProducts(crystalProducts);
updateCartUI();
startCountdown();
