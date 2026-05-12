// 水晶資料庫
const crystalDatabase = [
    // --- 靈性智慧 (spirit) ---
    { id: "amethyst", name: "紫水晶", type: "靈性智慧", desc: "開發智慧、平穩情緒，守護正緣並提升直覺力。", attr: "spirit", img: "picture/purple01.jpg" },
    { id: "clear_quartz", name: "白水晶", type: "淨化王磁場", desc: "水晶之王，能淨化負能量，放大所有正面意圖。", attr: "spirit", img: "picture/white01.jfif" },
    { id: "moonstone", name: "月光石", type: "溫柔守護", desc: "柔和的能量能安撫情緒，增進女性魅力與直覺。", attr: "spirit", img: "picture/moonlight01.jfif" },
    { id: "lapislazuli", name: "青金石", type: "冷靜覺察", desc: "開啟第三眼，帶來深層冥想與清晰的表達力。", attr: "spirit", img: "picture/lazuli01.jfif" },
    { id: "selenite", name: "透石膏", type: "光能淨化", desc: "極高頻的振動，能快速清除空間與個人磁場的陰霾。", attr: "spirit", img: "picture/selenite.jpg" },

    // --- 財富事業 (wealth) ---
    { id: "citrine", name: "黃水晶", type: "自信財富", desc: "主偏財，能增強自信與創造力，吸引意想不到的收穫。", attr: "wealth", img: "picture/yellow01.jfif" },
    { id: "pyrite", name: "黃鐵礦", type: "金錢磁鐵", desc: "擁有強大的陽性能量，能鞏固意志力，守住財富。", attr: "wealth", img: "picture/pyrite01.jfif" },
    { id: "green_phantom", name: "綠幽靈", type: "事業招財", desc: "正財之王，助於事業步步高升，吸引貴人相助。", attr: "wealth", img: "picture/green.jfif" },
    { id: "malachite", name: "孔雀石", type: "商業轉機", desc: "洞察人心，適合生意人避開風險，迎接新的機會。", attr: "wealth", img: "picture/malachite.jfif" },
    { id: "tiger_eye_yellow", name: "黃虎眼石", type: "果斷財富", desc: "激發勇氣與執行力，讓你在商場上做出正確抉擇。", attr: "wealth", img: "picture/tiger01.jfif" },

    // --- 愛情與人際 (love) ---
    { id: "rose_quartz", name: "粉水晶", type: "人緣桃花", desc: "療癒心輪，吸引美好的姻緣，讓自己更有親和力。", attr: "love", img: "picture/rose01.jfif" },
    { id: "strawberry_quartz", name: "草莓晶", type: "愛情甜蜜", desc: "增強愛情運勢，讓思考變得積極，吸引志趣相投的對象。", attr: "love", img: "picture/strawberry01.jfif" },
    { id: "rhodochrosite", name: "紅紋石", type: "靈魂伴侶", desc: "喚醒內心的熱情，幫助修補受傷的感情關係。", attr: "love", img: "picture/rhodochrosite01.jfif" },
    { id: "kunzite", name: "紫鋰輝", type: "寬容之愛", desc: "平息情感壓力，讓人學會無條件地愛自己與他人。", attr: "love", img: "picture/kunzite01.jfif" },
    { id: "pink_opal", name: "粉歐泊", type: "溫柔治癒", desc: "散發粉紅色的穩定波長，能讓人重拾少女般的心境。", attr: "love", img: "picture/pink_opal.jpg" },

    // --- 辟邪防護 (protect) ---
    { id: "obsidian", name: "黑曜石", type: "極強辟邪", desc: "強大的吸納性，能排除負能量並提供保護盾。", attr: "protect", img: "picture/obsidian01.jfif" },
    { id: "black_tourmaline", name: "黑碧璽", type: "接地屏障", desc: "防禦電磁波與負能量入侵，使心靈感到踏實安全。", attr: "protect", img: "picture/tourmaline01.jfif" },
    { id: "shungite", name: "次石墨", type: "古老保護", desc: "淨化水源與磁場，適合環境混亂時的能量定錨。", attr: "protect", img: "picture/shungite01.jfif" },
    { id: "labradorite", name: "拉長石", type: "光能屏障", desc: "守護氣場不外洩，並在低潮中看見希望之光。", attr: "protect", img: "picture/labradorite01.jfif" },
    { id: "garnet", name: "石榴石", type: "再生動力", desc: "守護旅途平安，並在危急時刻賦予求生的能量。", attr: "protect", img: "picture/garnet01.jfif" },

    // --- 健康療癒 (health) ---
    { id: "aquamarine", name: "海藍寶", type: "勇氣溝通", desc: "對應喉輪，能平復情緒、守護呼吸系統與旅行平安。", attr: "health", img: "picture/aquamarine01.jfif" },
    { id: "fluorite", name: "螢石", type: "專注思緒", desc: "清除大腦疲憊，整理混亂的思緒，帶來清新的磁場。", attr: "health", img: "picture/fluorite01.jfif" },
    { id: "prehnite", name: "葡萄石", type: "舒緩壓力", desc: "希望之石，能幫助身體排除毒素，回歸自然節律。", attr: "health", img: "picture/prehnite01.jfif" },
    { id: "amazonite", name: "天河石", type: "幸運勇氣", desc: "治療哀傷的情感，帶來希望與面對困難的體力。", attr: "health", img: "picture/amazonite01.jfif" },
    { id: "bloodstone", name: "血石", type: "血液循環", desc: "增強免疫力，注入源源不絕的生命元氣。", attr: "health", img: "picture/bloodstone.jpg" },

    // --- 能量動力 (power) ---
    { id: "rutilated_quartz", name: "鈦晶", type: "事業招財", desc: "能量最強的水晶之一，象徵果斷，助你掌握大局。", attr: "power", img: "picture/rutilated01.jfif" },
    { id: "sunstone", name: "太陽石", type: "積極能量", desc: "充滿朝氣與力量，驅散抑鬱，讓才華被外界看見。", attr: "power", img: "picture/sunstone01.jfif" },
    { id: "carnelian", name: "紅瑪瑙", type: "行動活力", desc: "激發勇氣與冒險精神，讓猶豫不決的人充滿動能。", attr: "power", img: "picture/carnelian01.jfif" },
    { id: "apatite", name: "磷灰石", type: "自我實現", desc: "激發對理想的追求，打破自我設限的框架。", attr: "power", img: "picture/apatite01.jfif" },
    { id: "ruby", name: "紅寶石", type: "權威激情", desc: "強大的火能量，帶來領袖氣質與不凡的行動力。", attr: "power", img: "picture/ruby01.jfif" },
    { id: "super_seven", name: "超七", type: "全方位能力", desc: "匯聚七種礦石能量，全面提升各項運勢的超強夥伴。", attr: "power", img: "picture/super01.jfif" }
];

const questions = [
    { q: "選擇一張你最想踏入的場景？", options: [{ text: "迷霧森林的深夜", attr: "spirit" }, { text: "充滿陽光的果園", attr: "power" }, { text: "平靜無波的海面", attr: "health" }] },
    { q: "當你感到壓力大時，你通常會？", options: [{ text: "獨自冥想或睡覺", attr: "spirit" }, { text: "找親友傾訴或擁抱", attr: "love" }, { text: "瘋狂購物或吃大餐", attr: "wealth" }] },
    { q: "你最希望目前的生活發生什麼改變？", options: [{ text: "財富大幅度增長", attr: "wealth" }, { text: "找到對的人理解我", attr: "love" }, { text: "遠離勾心鬥角的小人", attr: "protect" }] },
    { q: "你喜歡哪種香味？", options: [{ text: "沉穩的檀香或乳香", attr: "spirit" }, { text: "甜美的玫瑰或茉莉", attr: "love" }, { text: "清爽的薄荷或柑橘", attr: "power" }] },
    { q: "你的工作風格更傾向於？", options: [{ text: "追求效率與金錢回報", attr: "wealth" }, { text: "與人和諧相處並合作", attr: "love" }, { text: "保護自己不被受傷", attr: "protect" }] },
    { q: "晚上睡不著時，腦袋裡通常在想？", options: [{ text: "思考人生的意義", attr: "spirit" }, { text: "未完成的工作任務", attr: "power" }, { text: "過去或未來的感情", attr: "love" }] },
    { q: "你認為「成功」的定義是？", options: [{ text: "擁有巨大的財富", attr: "wealth" }, { text: "身體健康內心平安", attr: "health" }, { text: "受到眾人的保護與尊重", attr: "protect" }] },
    { q: "哪種天氣讓你覺得能量最充沛？", options: [{ text: "大雨過後的清晨", attr: "health" }, { text: "烈日當頭的午後", attr: "power" }, { text: "繁星點點的晴夜", attr: "spirit" }] },
    { q: "面對新的挑戰，你的第一反應是？", options: [{ text: "謹慎評估，防範風險", attr: "protect" }, { text: "直覺應對，隨機應變", attr: "spirit" }, { text: "衝了再說，把握機會", attr: "power" }] },
    { q: "你現在最想修復的能量是？", options: [{ text: "受損的心靈與自信", attr: "love" }, { text: "疲憊的肉體與精神", attr: "health" }, { text: "乾涸的錢包與事業", attr: "wealth" }] }
];

// --- 1. 測驗功能邏輯 (僅在有測驗容器的頁面執行) ---
const container = document.getElementById('questionsContainer');
if (container) {
    questions.forEach((item, index) => {
        const colorClass = `color-${index % 6}`;
        const block = document.createElement('div');
        block.className = `question-block ${colorClass}`;
        block.id = `q-block-${index}`;
        block.innerHTML = `
            <div class="question-text"><span class="q-number">${index + 1}</span>${item.q}</div>
            <div class="options-list">
                ${item.options.map((opt) => `
                    <label>
                        <input type="radio" name="q${index}" value="${opt.attr}" required onclick="handleSelect(${index})">
                        ${opt.text}
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(block);
    });
}

// 處理選取與「自動跳轉」
window.handleSelect = function(currentIndex) {
    const labels = document.querySelectorAll(`#q-block-${currentIndex} label`);
    if (labels.length > 0) {
        labels.forEach(l => l.classList.remove('selected'));
        const checkedInput = document.querySelector(`input[name="q${currentIndex}"]:checked`);
        if (checkedInput) checkedInput.parentElement.classList.add('selected');

        const nextIndex = currentIndex + 1;
        const nextBlock = document.getElementById(`q-block-${nextIndex}`);
        const submitBtn = document.querySelector('.submit-btn');

        setTimeout(() => {
            if (nextBlock) {
                nextBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else if (submitBtn) {
                submitBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 400);
    }
};

// 提交計算結果
const quizForm = document.getElementById('quizForm');
if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const scores = { love: 0, wealth: 0, protect: 0, spirit: 0, health: 0, power: 0 };
        for (let value of formData.values()) { scores[value]++; }

        let topAttr = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const candidates = crystalDatabase.filter(c => c.attr === topAttr);
        const result = candidates[Math.floor(Math.random() * candidates.length)];

        document.getElementById('quizContent').classList.add('hidden');
        document.getElementById('resultSection').classList.remove('hidden');
        
        document.getElementById('crystalName').innerText = result.name;
        document.getElementById('crystalDesc').innerText = result.desc;
        document.getElementById('crystalType').innerText = result.type;
        document.getElementById('crystalImage').src = result.img;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- 2. 導覽列自動高亮腳本 ---
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links li a");
    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentLocation || (currentLocation === "" && linkPath === "index.html")) {
            link.parentElement.classList.add("active");
        } else {
            link.parentElement.classList.remove("active");
        }
    });
});

// --- 3. 魔法守護腳本 (全域執行) ---
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

document.onkeydown = function (e) {
    // 禁用 F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
    if (e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || 
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || 
        (e.ctrlKey && e.keyCode === 85) || 
        (e.ctrlKey && e.keyCode === 83)) {
        return false;
    }
};
