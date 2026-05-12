// 8. 商品資料庫 (30樣)
const crystalData = [
    { id: 1, name: "極光粉晶", effect: "love", color: "pink", icon: "❤", tag: "熱銷", desc: "開啟心輪力量，招來正桃花與好人緣。" },
    { id: 2, name: "王者黃晶", effect: "wealth", color: "yellow", icon: "💰", tag: "限量", desc: "強勢聚財，增強事業野心與財富氣場。" },
    { id: 3, name: "深海紫晶", effect: "wisdom", color: "purple", icon: "🧠", tag: "新品", desc: "提升直覺力，平定情緒，幫助思考與學業。" },
    { id: 4, name: "金曜石盾", effect: "protection", color: "black", icon: "🛡", tag: "熱銷", desc: "最強辟邪聖物，吸收負能量，護佑平安。" },
    { id: 5, name: "天河石泉", effect: "health", color: "blue", icon: "🌿", tag: "推薦", desc: "平復焦慮，找回自信，療癒身心不安心緒。" },
    // ... 此處快速生成後續資料結構 ...
    { id: 6, name: "草莓晶簇", effect: "love", color: "pink", icon: "❤", tag: "熱銷", desc: "增加個人魅力。" },
    { id: 7, name: "綠幽靈影", effect: "wealth", color: "green", icon: "💰", tag: "限量", desc: "正財貴人必備。" },
    { id: 8, name: "鈦晶之光", effect: "wealth", color: "yellow", icon: "💰", tag: "高端", desc: "水晶之王。" },
    { id: 9, name: "月光石影", effect: "love", color: "white", icon: "❤", tag: "熱銷", desc: "守護愛情與柔和。" },
    { id: 10, name: "黑髮晶刺", effect: "protection", color: "black", icon: "🛡", tag: "推薦", desc: "領袖之石。" },
    { id: 11, name: "白水晶鑽", effect: "health", color: "white", icon: "🌿", tag: "必備", desc: "淨化磁場。" },
    { id: 12, name: "拉長石幻", effect: "wisdom", color: "blue", icon: "🧠", tag: "新品", desc: "靈感湧現。" },
    { id: 13, name: "太陽石艷", effect: "wealth", color: "orange", icon: "💰", tag: "熱銷", desc: "自信向上。" },
    { id: 14, name: "青金石海", effect: "wisdom", color: "blue", icon: "🧠", tag: "限量", desc: "智慧與真理。" },
    { id: 15, name: "螢石幻夢", effect: "wisdom", color: "green", icon: "🧠", tag: "推薦", desc: "思維清晰。" },
    { id: 16, name: "金運石墨", effect: "wealth", color: "black", icon: "💰", tag: "熱銷", desc: "守財之石。" },
    { id: 17, name: "紫鋰輝柔", effect: "health", color: "purple", icon: "🌿", tag: "新品", desc: "情緒療癒。" },
    { id: 18, name: "黑碧璽障", effect: "protection", color: "black", icon: "🛡", tag: "限量", desc: "阻絕輻射。" },
    { id: 19, name: "紅紋石心", effect: "love", color: "pink", icon: "❤", tag: "熱銷", desc: "喚醒真愛。" },
    { id: 20, name: "海藍寶歌", effect: "health", color: "blue", icon: "🌿", tag: "推薦", desc: "勇氣溝通。" },
    { id: 21, name: "葡萄石翠", effect: "health", color: "green", icon: "🌿", tag: "新品", desc: "希望與平靜。" },
    { id: 22, name: "石榴石焰", effect: "health", color: "red", icon: "🌿", tag: "熱銷", desc: "循環能量。" },
    { id: 23, name: "舒俱徠紫", effect: "health", color: "purple", icon: "🌿", tag: "稀有", desc: "皇家療癒。" },
    { id: 24, name: "琥珀蜜蠟", effect: "protection", color: "yellow", icon: "🛡", tag: "推薦", desc: "辟邪定驚。" },
    { id: 25, name: "捷克隕石", effect: "wisdom", color: "green", icon: "🧠", tag: "限量", desc: "宇宙覺醒。" },
    { id: 26, name: "透輝石光", effect: "health", color: "green", icon: "🌿", tag: "新品", desc: "大地的眼淚。" },
    { id: 27, name: "橄欖石欣", effect: "wealth", color: "green", icon: "💰", tag: "熱銷", desc: "幸福財富。" },
    { id: 28, name: "磷灰石深", effect: "wisdom", color: "blue", icon: "🧠", tag: "推薦", desc: "突破阻礙。" },
    { id: 29, name: "摩根石柔", effect: "love", color: "pink", icon: "❤", tag: "熱銷", desc: "甜美純真。" },
    { id: 30, name: "瑪瑙盾牌", effect: "protection", color: "orange", icon: "🛡", tag: "必備", desc: "護身穩定。" }
];

// 動態渲染商品
const grid = document.getElementById('productGrid');
crystalData.forEach(item => {
    const el = document.createElement('article');
    el.className = 'product-item';
    el.dataset.effect = item.effect;
    el.dataset.color = item.color;
    el.innerHTML = `
        <span class="sale-tag">${item.tag}</span>
        <div class="image-container">
            <img src="picture/product_${item.id}.jpg" class="img-primary">
            <img src="picture/hover_${item.id}.jpg" class="img-secondary">
            <button class="quick-view-btn" onclick="openQuickView(${item.id})">快速預覽</button>
        </div>
        <div class="product-info" style="padding: 15px;">
            <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <span>(5.0)</span></div>
            <h4 style="margin: 10px 0;">${item.name}</h4>
            <div class="attr-badge">${item.icon} ${item.effect === 'love' ? '提升情緣' : '增強氣場'}</div>
            <p class="stock-warning">⚠️ 最後庫存：僅剩 3 件</p>
            <div class="price" style="font-size: 1.2rem; color: var(--sale-red); font-weight: bold; margin: 10px 0;">NT$ XXXXX</div>
            <button class="btn-add-cart" onclick="addToCart('${item.name}')" style="width:100%; background:var(--deep-purple); color:white; border:none; padding:10px; border-radius:5px; cursor:pointer;">加入購物車</button>
        </div>
    `;
    grid.appendChild(el);
});

// 6. 今日倒數功能
function startCountdown() {
    let timeLeft = 28800; // 8 小時
    setInterval(() => {
        timeLeft--;
        let h = Math.floor(timeLeft / 3600);
        let m = Math.floor((timeLeft % 3600) / 60);
        let s = timeLeft % 60;
        document.getElementById('countdown').innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }, 1000);
}
startCountdown();

// 5. 快速預覽功能
const modal = document.getElementById('quickViewModal');
function openQuickView(id) {
    const item = crystalData.find(c => c.id === id);
    document.getElementById('modalImg').src = `picture/product_${id}.jpg`;
    document.getElementById('modalTitle').innerText = item.name;
    document.getElementById('modalDesc').innerText = item.desc;
    modal.style.display = 'block';
}
document.querySelector('.close-modal').onclick = () => modal.style.display = 'none';

// 購物車數量
let cart = 0;
function addToCart(name) {
    cart++;
    document.getElementById('cartCount').innerText = cart;
    alert(`【${name}】已成功加入！`);
}
