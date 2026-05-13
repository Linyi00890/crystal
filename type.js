const crystals = [
    // 白色系
    { id: "white01", name: "白水晶", tag: "水晶之王", effect: "peace", color: "white", desc: "淨化能量、放大焦距、平衡身心。", img: "picture/white02.webp" },
    { id: "white02", name: "透石膏", tag: "療癒之光", effect: "peace", color: "white", desc: "淨化空間、安定心神、清除負能量。", img: "picture/selenite01.jfif" },
    { id: "white03", name: "白月光石", tag: "戀人之石", effect: "love", color: "white", desc: "守護愛情、調節情緒、增添溫柔氣質。", img: "picture/moonstone03.jpg" },
    { id: "white04", name: "白紋石", tag: "安定之石", effect: "peace", color: "white", desc: "緩解壓力、幫助入眠、消除焦躁情緒。", img: "picture/howlite01.webp" },
    { id: "white05", name: "白瑪瑙", tag: "和諧之石", effect: "health", color: "white", desc: "提升正能量、加強協調、避邪保平安。", img: "picture/agate01.webp" },
    // 粉紅系
    { id: "rose-quartz", name: "粉晶", tag: "招人緣", effect: "love", color: "pink", desc: "增進感情、舒緩情緒、吸引良緣。", img: "picture/rose02.jpg" },
    { id: "rhodochrosite", name: "紅紋石", tag: "愛神之石", effect: "love", color: "pink", desc: "喚醒愛意、緩解憂慮、修補心靈創傷。", img: "picture/rhodochrosite02.jpg" },
    { id: "strawberry-quartz", name: "草莓晶", tag: "魅力之石", effect: "love", color: "pink", desc: "提升個人魅力、主動招攬美好姻緣。", img: "picture/strawberry02.webp" },
    { id: "morganite", name: "摩根石", tag: "人緣之石", effect: "love", color: "pink", desc: "建立人際關係、舒緩緊張、開拓心胸。", img: "picture/morganite02.jfif" },
    { id: "pink-opal", name: "粉紅蛋白石", tag: "天使之淚", effect: "love", color: "pink", desc: "守護愛情、激發靈感、平衡感情焦慮。", img: "picture/pink01.jpg" },
    // 黃金色系
    { id: "citrine", name: "黃水晶", tag: "商人之石", effect: "wealth", color: "yellow", desc: "招偏財、提振自信、幫助消化系統。", img: "picture/yellow02.webp" },
    { id: "tigereye-yellow", name: "黃虎眼石", tag: "力量之石", effect: "wealth", color: "yellow", desc: "激發勇氣、帶來果斷與財富能量。", img: "picture/yellow03.jfif" },
    { id: "rutilated-quartz", name: "金髮晶", tag: "財富之王", effect: "wealth", color: "yellow", desc: "招正財偏財、加強決斷力與氣場。", img: "picture/rutilated02.webp" },
    { id: "amber", name: "琥珀", tag: "古老護身符", effect: "health", color: "yellow", desc: "安神定驚、活血化瘀、趨吉避凶。", img: "picture/amber01.jpg" },
    { id: "yellow-calcite", name: "黃方解石", tag: "心靈陽光", effect: "spirit", color: "yellow", desc: "提升專注、消除疲勞、吸收負能量。", img: "picture/calcite01.jfif" },
    // 紫色系
    { id: "amethyst", name: "紫水晶", tag: "智慧之石", effect: "spirit", color: "purple", desc: "開發智慧、提升專注、守護愛情。", img: "picture/purple02.jpg" },
    { id: "charoite", name: "紫龍晶", tag: "靈感之石", effect: "spirit", color: "purple", desc: "提升洞察力、消除恐懼、整合人格。", img: "picture/charoite01.jfif" },
    { id: "kunzite", name: "紫鋰輝石", tag: "情感平衡", effect: "love", color: "purple", desc: "平撫心碎、釋放壓力、加強溝通能量。", img: "picture/kunzite02.jfif" },
    { id: "grape-agate", name: "葡萄紫玉隨", tag: "鎮定安神", effect: "health", color: "purple", desc: "加強修養、美容養顏、增強抵抗力。", img: "picture/agate01.jpg" },
    { id: "lepidolite", name: "紫鋰雲母", tag: "變革之石", effect: "peace", color: "purple", desc: "促進改變、平衡焦慮、穩定情緒波動。", img: "picture/lepidolite01.webp" },
    // 綠色系
    { id: "green-phantom", name: "綠幽靈", tag: "正財之王", effect: "wealth", color: "green", desc: "幫助事業發展、增進財運、吸引貴人。", img: "picture/green02.jpg" },
    { id: "malachite", name: "孔雀石", tag: "守護之石", effect: "protection", color: "green", desc: "吸收負能量、保平安、幫助情感療癒。", img: "picture/malachite02.jpg" },
    { id: "aventurine", name: "東菱玉", tag: "機會之石", effect: "wealth", color: "green", desc: "招財運、緩解心壓、帶來新的機遇。", img: "picture/aventurine01.jfif" },
    { id: "prehnite", name: "葡萄石", tag: "希望之光", effect: "health", color: "green", desc: "舒緩壓力、提升感知、對應心輪能量。", img: "picture/prehnite02.jpg" },
    { id: "emerald", name: "祖母綠", tag: "療癒之王", effect: "love", color: "green", desc: "像徵重生與愛、保持心境和諧與忠誠。", img: "picture/emerald01.jpg" },
    // 藍色系
    { id: "aquamarine", name: "海藍寶", tag: "勇氣之石", effect: "peace", color: "blue", desc: "強化表達、守護航行、緩解呼吸系統。", img: "picture/aquamarine01.jfif" },
    { id: "lapislazuli", name: "青金石", tag: "冥想之石", effect: "spirit", color: "blue", desc: "開啟第三眼、增加洞察、冷靜思考。", img: "picture/lapis01.webp" },
    { id: "larimar", name: "拉利瑪", tag: "海豚之石", effect: "peace", color: "blue", desc: "療癒心靈、緩解憂鬱、對應喉輪溝通。", img: "picture/larimar01.jfif" },
    { id: "blue-lace-agate", name: "藍紋瑪瑙", tag: "冷靜之石", effect: "peace", color: "blue", desc: "平復焦慮、柔化言語、緩解心壓。", img: "picture/lace01.webp" },
    { id: "kyanite", name: "藍晶石", tag: "覺醒之石", effect: "spirit", color: "blue", desc: "破除迷茫、提升感應力、不必淨化。", img: "picture/kyanite01.jfif" },
    // 黑色系
    { id: "obsidian", name: "黑曜石", tag: "極度避邪", effect: "protection", color: "black", desc: "強力排除負能量、防小人、辟邪擋煞。", img: "picture/obsidian02.jpg" },
    { id: "black-tourmaline", name: "黑碧璽", tag: "守護屏障", effect: "protection", color: "black", desc: "阻隔輻射與負面氣場、強化生命力。", img: "picture/tourmaline02.jfif" },
    { id: "smoky-quartz", name: "茶晶", tag: "沈穩之石", effect: "health", color: "black", desc: "穩定情緒、排除病氣、加強底層能量。", img: "picture/smoky01.jpg" },
    { id: "onyx", name: "黑瑪瑙", tag: "長壽之石", effect: "protection", color: "black", desc: "建立自信、消除恐懼、防止能量流失。", img: "picture/onyx01.jpeg" },
    { id: "shungite", name: "次石墨", tag: "生命之石", effect: "health", color: "black", desc: "超級抗氧化、中和負能量、淨化磁場。", img: "picture/shungite02.webp" },
    // 其他
    { id: "super-seven", name: "超七水晶", tag: "全方位能", effect: "spirit", color: "purple", desc: "包含七種礦物、全面提升脈輪能量。", img: "picture/super02.jpg" },
    { id: "labradorite", name: "拉長石", tag: "靈魂伴侶", effect: "spirit", color: "blue", desc: "尋找潛能、守護愛情、清理負向磁場。", img: "picture/labradorite02.jfif" },
    { id: "garnet", name: "石榴石", tag: "氣血之石", effect: "health", color: "pink", desc: "增強體力、恢復元氣、美容養顏。", img: "picture/garnet02.jpg" },
    { id: "sunstone", name: "太陽石", tag: "陽光之石", effect: "wealth", color: "yellow", desc: "驅散陰霾、增加正能量與權威感。", img: "picture/sunstone02.jpg" },
    { id: "tanzanite", name: "丹泉石", tag: "靈氣之源", effect: "spirit", color: "blue", desc: "提升靈通力、引導智慧、達成目標。", img: "picture/tanzanite.jfif" },
    { id: "fluorite", name: "螢石", tag: "天才之石", effect: "spirit", color: "green", desc: "清理思緒、提升邏輯、排除雜念。", img: "picture/fluorite02.jfif" }
];

const colorTheme = {
    spirit: { color: "#a29bfe", glow: "rgba(162, 155, 254, 0.3)" },
    wealth: { color: "#f1c40f", glow: "rgba(241, 196, 15, 0.3)" },
    protection: { color: "#95afc0", glow: "rgba(149, 175, 192, 0.2)" },
    peace: { color: "#7ed6df", glow: "rgba(126, 214, 223, 0.3)" },
    love: { color: "#ff7979", glow: "rgba(255, 121, 121, 0.3)" },
    health: { color: "#26de81", glow: "rgba(38, 222, 129, 0.3)" }
};

function render(data) {
    const grid = document.getElementById('crystalGrid');
    if (!grid) return;
    grid.innerHTML = data.map(c => {
        const theme = colorTheme[c.effect] || { color: "#ddd", glow: "rgba(255,255,255,0.1)" };
        return `
        <div class="card-container" data-effect="${c.effect}" data-color="${c.color}" style="--card-color: ${theme.color}; --card-glow: ${theme.glow}">
            <div class="crystal-card">
                <div class="flip-front">
                    <img src="${c.img}" class="crystal-img" onerror="this.src='https://via.placeholder.com/300x480/111/c5a47e?text=${c.name}'">
                    <div class="front-overlay">
                        <span class="tag">${c.tag}</span>
                        <h3 class="crystal-name">${c.name}</h3>
                    </div>
                </div>
                <div class="flip-back">
                    <p class="back-title">能量奧祕</p>
                    <p class="back-desc">${c.desc}</p>
                    <a href="quartz/${c.id}.html" class="detail-btn">查看詳情</a>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// 修正：下拉選單傳入 ID 並控制顯示
function toggleDropdown(id) {
    const menu = document.getElementById(id);
    const allMenus = document.querySelectorAll('.dropdown-content');
    const isOpen = menu.classList.contains('show');
    
    allMenus.forEach(m => m.classList.remove('show'));
    if (!isOpen) menu.classList.add('show');
}

function filterCrystals(value, type) {
    const cards = document.querySelectorAll('.card-container');
    cards.forEach(card => {
        if (value === 'all' || card.getAttribute(`data-${type}`) === value) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 點擊空白處關閉選單
window.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(m => m.classList.remove('show'));
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    if(mobileToggle) { 
        mobileToggle.onclick = () => navMenu.classList.toggle('active'); 
    }
    render(crystals);
});

// --- 魔法守護腳本 ---
    
    // 1. 禁用右鍵選單並跳出提醒
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
    }, false);

    // 2. 禁用快捷鍵 (F12, Ctrl+U, Ctrl+Shift+I 等)
    document.onkeydown = function (e) {
        // 禁用 F12
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
        // 禁用 Ctrl+S (存檔)
        if (e.ctrlKey && e.keyCode === 83) {
            return false;
        }
    };
