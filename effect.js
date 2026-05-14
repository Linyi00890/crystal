document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. 防盜保護功能 ---
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
        alert("🔮 魔法能量守護中：本站圖文受智慧財產保護。");
    });
    
    document.onkeydown = e => {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85)) return false;
        if (e.ctrlKey && e.keyCode === 67) { alert("🔮 能量不可複製！"); return false; }
    };

    // --- 2. 測驗資料庫 (回歸原始問題 + 增加色彩配置) ---
    const questions = [
        { q: "您最近是否感到缺乏安全感，對生活感到恐懼？", chakra: "底輪", color: "#f44336" },
        { q: "您是否覺得情緒壓抑，且對生活失去了創造力的衝動？", chakra: "臍輪", color: "#ff9800" },
        { q: "在面對困難時，您是否經常感到沒自信、優柔寡斷？", chakra: "太陽輪", color: "#ffeb3b" },
        { q: "您是否感到孤獨，或是很難原諒他人對您的傷害？", chakra: "心輪", color: "#4caf50" },
        { q: "當有話想說時，您是否常感到喉嚨緊繃，選擇保持沉默？", chakra: "喉輪", color: "#03a9f4" },
        { q: "您是否經常感到思緒混亂，很難專注在當下的事物？", chakra: "眉心輪", color: "#3f51b5" },
        { q: "您是否感到與世界脫節，找不到生命的目標與意義？", chakra: "頂輪", color: "#9c27b0" }
    ];

    const meta = {
        "底輪": { crystal: "黑曜石、黑銀鈦、茶晶", color: "#f44336", desc: "您的生命根基需要穩定。建議多接觸大自然與規律運動。" },
        "臍輪": { crystal: "橙月光、太陽石、紅瑪瑙", color: "#ff9800", desc: "釋放您的情緒感受。嘗試跳舞或繪畫等創意活動。" },
        "太陽輪": { crystal: "黃水晶、虎眼石", color: "#ffeb3b", desc: "重塑您的內在力量。試著從小計畫的達成來建立信心。" },
        "心輪": { crystal: "粉水晶、綠幽靈、葡萄石", color: "#4caf50", desc: "學習自我接納與寬恕。呼吸練習能幫助您打開心房。" },
        "喉輪": { crystal: "海藍寶、藍玉髓、天河石", color: "#03a9f4", desc: "勇敢表達您的真理。練習書寫日記是個很好的溝通起點。" },
        "眉心輪": { crystal: "青金石、拉長石、藍磷灰", color: "#3f51b5", desc: "信任您的直覺。每日靜心冥想10分鐘能清空混亂思緒。" },
        "頂輪": { crystal: "白水晶、紫水晶、透石膏", color: "#9c27b0", desc: "尋求心靈的寧靜。練習正念觀察，感受與宇宙的連結。" }
    };

    let step = 0;
    let scores = { "底輪": 0, "臍輪": 0, "太陽輪": 0, "心輪": 0, "喉輪": 0, "眉心輪": 0, "頂輪": 0 };

    // --- 3. 測驗執行邏輯 ---
    window.startQuiz = () => {
        renderQuestion();
    };

    function renderQuestion() {
        const container = document.getElementById('optionsWrapper');
        const title = document.getElementById('questionTitle');
        const progress = document.getElementById('quizProgress');
        const stepText = document.getElementById('progressStep');

        if (step < questions.length) {
            const currentQ = questions[step];
            
            // UI 更新：根據脈輪更換顏色
            title.innerText = currentQ.q;
            title.style.color = currentQ.color;
            stepText.innerText = `SCANNING: ${currentQ.chakra} 能量層...`;
            stepText.style.color = currentQ.color;
            
            progress.style.width = `${(step / 7) * 100}%`;
            progress.style.backgroundColor = currentQ.color;
            progress.style.boxShadow = `0 0 10px ${currentQ.color}`;

            container.innerHTML = `
                <button class="option-btn" style="border-color: ${currentQ.color}" onclick="handleAnswer(10)">經常有這種感覺</button>
                <button class="option-btn" style="border-color: ${currentQ.color}" onclick="handleAnswer(5)">偶爾會感覺到</button>
                <button class="option-btn" style="border-color: ${currentQ.color}" onclick="handleAnswer(2)">完全沒這感覺</button>
            `;
        } else {
            progress.style.width = "100%";
            showResult();
        }
    }

    window.handleAnswer = (val) => {
        const chakraName = questions[step].chakra;
        scores[chakraName] = val;
        step++;
        renderQuestion();
    };

    function showResult() {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('resultContainer').classList.remove('result-hidden');

        // 計算最高分的脈輪 (阻滯最嚴重的)
        const weakest = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        
        const focusChakraElem = document.getElementById('focusChakra');
        focusChakraElem.innerText = weakest;
        focusChakraElem.style.color = meta[weakest].color;
        
        document.getElementById('analysisDesc').innerText = meta[weakest].desc;
        document.getElementById('crystalAdvice').innerText = meta[weakest].crystal;

        const ctx = document.getElementById('chakraRadarChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(scores),
                datasets: [{
                    label: '能量阻滯指數',
                    data: Object.values(scores),
                    backgroundColor: 'rgba(0, 242, 254, 0.2)',
                    borderColor: '#00f2fe',
                    borderWidth: 1,
                    pointBackgroundColor: Object.keys(scores).map(k => meta[k].color),
                    pointRadius: 4
                }]
            },
            options: {
                scales: {
                    r: {
                        min: 0,
                        max: 10,
                        grid: { color: 'rgba(255,255,255,0.1)' },
                        angleLines: { color: 'rgba(255,255,255,0.1)' },
                        ticks: { display: false },
                        pointLabels: { color: '#fff', font: { size: 10 } }
                    }
                },
                plugins: { legend: { display: false } }
            }
        });
    }
});


// --- 魔法守護腳本 ---
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

document.onkeydown = function (e) {
    // 禁用 F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
    if (e.keyCode === 123 || 
       (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
       (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83))) {
        return false;
    }
};
