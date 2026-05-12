/**
 * CrystalMagic 30樣商品資料庫
 */
const crystalProducts = [
    { id: 1, name: "極光粉晶手鍊", effect: "love", color: "pink", icon: "❤", tag: "熱銷", desc: "開啟心輪力量，招來正桃花與完美人緣。", stock: 5 },
    { id: 2, name: "王者黃水晶", effect: "wealth", color: "yellow", icon: "💰", tag: "限量", desc: "招正財與偏財，增強自信與事業野心。", stock: 2 },
    { id: 3, name: "烏拉圭紫晶", effect: "wisdom", color: "purple", icon: "🧠", tag: "新品", desc: "開發智慧、集中精神，適合學生與考生。", stock: 8 },
    { id: 4, name: "金曜石護盾", effect: "protection", color: "black", icon: "🛡", tag: "強效", desc: "吸收負能量，辟邪擋煞，護佑平安。", stock: 12 },
    { id: 5, name: "天河石之泉", effect: "health", color: "blue", icon: "🌿", tag: "推薦", desc: "平復焦慮，帶來平靜與勇氣。", stock: 4 },
    { id: 6, name: "草莓晶仙子", effect: "love", color: "pink", icon: "❤", tag: "熱銷", desc: "增進人際關係，散發溫柔魅力。", stock: 3 },
    { id: 7, name: "綠幽靈貴人", effect: "wealth", color: "green", icon: "💰", tag: "稀有", desc: "事業貴人石，招來正財與工作好運。", stock: 1 },
    { id: 8, name: "頂級金鈦晶", effect: "wealth", color: "yellow", icon: "💰", tag: "奢華", desc: "水晶之王，強力招財、提升領導力。", stock: 3 },
    { id: 9, name: "月光石戀人", effect: "love", color: "white", icon: "❤", tag: "熱銷", desc: "溫和守護愛情，調節女性內分泌與情緒。", stock: 9 },
    { id: 10, name: "黑髮晶領袖", effect: "protection", color: "black", icon: "🛡", tag: "強效", desc: "消除病氣，增強決斷力與領導氣場。", stock: 6 },
    { id: 11, name: "白水晶鑽切", effect: "health", color: "white", icon: "🌿", tag: "經典", desc: "全能淨化，排除身體負能量，提升專注力。", stock: 20 },
    { id: 12, name: "藍光拉長石", effect: "wisdom", color: "blue", icon: "🧠", tag: "新品", desc: "激發潛能、靈感與創造力，招喚契合的靈魂。", stock: 7 },
    { id: 13, name: "太陽石暖陽", effect: "wealth", color: "yellow", icon: "💰", tag: "正能量", desc: "驅散負面情緒，帶來好運與自信心。", stock: 5 },
    { id: 14, name: "青金石秘境", effect: "wisdom", color: "blue", icon: "🧠", tag: "限量", desc: "開啟眉心輪，增強觀察力與心靈層次。", stock: 2 },
    { id: 15, name: "多彩螢石", effect: "wisdom", color: "green", icon: "🧠", tag: "推薦", desc: "清理頭腦思緒，維持理智與學習效率。", stock: 15 },
    { id: 16, name: "黑金金運石", effect: "wealth", color: "black", icon: "💰", tag: "強效", desc: "極強守財與招財，適合投資、博弈者。", stock: 4 },
    { id: 17, name: "粉紫鋰輝石", effect: "health", color: "purple", icon: "🌿", tag: "推薦", desc: "緩解壓力，增加包容力與柔和磁場。", stock: 8 },
    { id: 18, name: "黑碧璽障壁", effect: "protection", color: "black", icon: "🛡", tag: "強烈", desc: "阻隔電子設備輻射，吸收濁氣。", stock: 10 },
    { id: 19, name: "紅紋石真愛", effect: "love", color: "pink", icon: "❤", tag: "限量", desc: "喚醒內心愛意，吸引靈魂伴侶。", stock: 3 },
    { id: 20, name: "海藍寶勇氣", effect: "health", color: "blue", icon: "🌿", tag: "熱銷", desc: "強化表達能力，護佑旅途平安。", stock: 12 },
    { id: 21, name: "葡萄石希望", effect: "health", color: "green", icon: "🌿", tag: "清爽", desc: "象徵新生與希望，緩解焦慮。", stock: 6 },
    { id: 22, name: "紅石榴石焰", effect: "health", color: "red", icon: "🌿", tag: "熱銷", desc: "補充氣血能量，維持身心活力。", stock: 18 },
    { id: 23, name: "舒俱徠皇家", effect: "health", color: "purple", icon: "🌿", tag: "高貴", desc: "頂級療癒石，開發靈性力量。", stock: 2 },
    { id: 24, name: "琥珀金珀", effect: "protection", color: "yellow", icon: "🛡", tag: "古老", desc: "定驚安神，消除負向情緒與病氣。", stock: 4 },
    { id: 25, name: "天鐵能量", effect: "protection", color: "black", icon: "🛡", tag: "罕見", desc: "來自宇宙的禮物，極高頻率保護磁場。", stock: 1 },
    { id: 26, name: "透輝石森林", effect: "health", color: "green", icon: "🌿", tag: "療癒", desc: "平復創傷，找回與大地的連接。", stock: 5 },
    { id: 27, name: "橄欖石陽光", effect: "wealth", color: "green", icon: "💰", tag: "推薦", desc: "排除嫉妒，吸引財富與幸福感。", stock: 7 },
    { id: 28, name: "磷灰石深藍", effect: "wisdom", color: "blue", icon: "🧠", tag: "個性", desc: "激發溝通欲望，消除自我封閉。", stock: 9 },
    { id: 29, name: "摩根石甜點", effect: "love", color: "pink", icon: "❤", tag: "新品", desc: "愛與慈悲，平衡情感，舒緩受傷的心。", stock: 11 },
    { id: 30, name: "瑪瑙守護", effect: "protection", color: "orange", icon: "🛡", tag: "經典", desc: "護身穩定，增加勇氣與耐力。", stock: 25 }
];

const productGrid = document.getElementById('productGrid');

// 動態渲染商品卡片
function renderProducts(data) {
    productGrid.innerHTML = '';
    data.forEach(p => {
        const item = document.createElement('article');
        item.className = 'product-item';
        item.dataset.effect = p.effect;
        item.dataset.color = p.color;
        item.innerHTML = `
            <span class="sale-tag">${p.tag}</span>
            <div class="image-container">
                <img src="picture/${p.color}01.jpg" class="img-primary" onerror="this.src='https://via.placeholder.com/300x350?text=${p.name}'">
                <img src="picture/${p.color}02.jpg" class="img-secondary" onerror="this.src='https://via.placeholder.com/300x350?text=Detail+View'">
                <button class="quick-view-btn" onclick="openModal(${p.id})">快速預覽</button>
            </div>
            <div class="product-info">
                <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                <h4>${p.name}</h4>
                <div class="attr-badge">${p.icon} ${getEffectName(p.effect)}</div>
                <p class="stock-status">最後庫存：${p.stock} 件</p>
                <div style="font-weight:bold; font-size:1.2rem; color:var(--sale-red); margin:10px 0;">NT$ XXXXX</div>
                <button class="btn-modal-add" onclick="updateCart('${p.name}')">加入購物車</button>
            </div>
        `;
        productGrid.appendChild(item);
    });
}

function getEffectName(eff) {
    const map = { love: '提升人緣', wealth: '招財旺運', wisdom: '智慧覺醒', protection: '避邪護身', health: '身心療癒' };
    return map[eff] || '能量石';
}

// 篩選功能
const effectFilter = document.getElementById('effect-filter');
const colorFilter = document.getElementById('color-filter');

function filterLogic() {
    const eff = effectFilter.value;
    const col = colorFilter.value;
    const filtered = crystalProducts.filter(p => {
        return (eff === 'all' || p.effect === eff) && (col === 'all' || p.color === col);
    });
    renderProducts(filtered);
}

effectFilter.addEventListener('change', filterLogic);
colorFilter.addEventListener('change', filterLogic);

// Modal 邏輯
const modal = document.getElementById('quickViewModal');
function openModal(id) {
    const p = crystalProducts.find(x => x.id === id);
    document.getElementById('modalImg').src = `picture/${p.color}01.jpg`;
    document.getElementById('modalTitle').innerText = p.name;
    document.getElementById('modalDesc').innerText = p.desc;
    modal.style.display = 'block';
}

document.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

// 購物車數量
let cartTotal = 0;
function updateCart(name) {
    cartTotal++;
    document.getElementById('cartCount').innerText = cartTotal;
    alert(`【${name}】已成功加入魔法購物車！`);
}

// 倒數計時器 (8小時)
function countdown() {
    let seconds = 8 * 60 * 60;
    const timer = setInterval(() => {
        seconds--;
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        document.getElementById('countdown').innerText = 
            `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        if (seconds <= 0) clearInterval(timer);
    }, 1000);
}

// 初始化
renderProducts(crystalProducts);
countdown();
