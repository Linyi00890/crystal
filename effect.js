document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. 魔法守護功能 (原本的防盜代碼) ---
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.onkeydown = function(e) {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) return false;
        if (e.ctrlKey && e.keyCode === 67) { alert("🔮 水晶能量無法被複製"); return false; }
    };

    // --- 2. 脈輪掃描儀邏輯 ---
    const questions = [
        { q: "最近是否常感到莫名的不安，覺得生活失去重心？", chakra: "底輪" },
        { q: "您是否覺得情緒壓抑，或是對生活失去了熱情與好奇心？", chakra: "臍輪" },
        { q: "在人群中，您是否經常感到沒自信，難以做出決定？", chakra: "太陽輪" },
        { q: "您是否覺得難以信任他人，或經常感到胸口悶悶的？", chakra: "心輪" },
        { q: "當有話想說時，您是否常感到喉嚨緊繃，選擇沉默？", chakra: "喉輪" },
        { q: "您最近是否感到思緒混亂，很難專注在一件事情上？", chakra: "眉心輪" },
        { q: "您是否感到與世界脫節，覺得生活枯燥且缺乏靈感？", chakra: "頂輪" }
    ];

    const chakraMeta = {
        "底輪": { color: "#f44336", crystal: "黑銀鈦、茶晶、黑曜石", info: "您需要「接地」的能量。穩定的底輪能帶給您安全感，讓您在現實生活中站穩腳跟。" },
        "臍輪": { color: "#ff9800", crystal: "橙月光、紅瑪瑙", info: "您的創造力與熱情需要被釋放。平衡臍輪能幫助您享受生活，找回情緒的流動。" },
        "太陽輪": { color: "#ffeb3b", crystal: "黃水晶、虎眼石、鈦晶", info: "您的內在太陽需要被點燃。增強此脈輪將帶來勇氣、自信與強大的執行力。" },
        "心輪": { color: "#4caf50", crystal: "粉水晶、草莓晶、葡萄石", info: "打開心房是目前的課題。透過療癒之石，學習接納自己與愛他人。" },
        "喉輪": { color: "#03a9f4", crystal: "海藍寶、藍玉髓、天河石", info: "您的聲音值得被聽見。喉輪能量能幫助您精準表達需求，達成真誠的溝通。" },
        "眉心輪": { color: "#3f51b5", crystal: "青金石、拉長石、藍磷灰", info: "連結您的直覺。提升眉心輪能看透事物的本質，獲得冷靜思考的能力。" },
        "頂輪": { color: "#9c27b0", crystal: "白水晶、紫水晶、透石膏", info: "您的靈性覺知正在呼喚。平衡頂輪能消除焦慮，帶來宇宙智慧的啟發。" }
    };

    let currentStep = 0;
    let scores = { "底輪": 0, "臍輪": 0, "太陽輪": 0, "心輪": 0, "喉輪": 0, "眉心輪": 0, "頂輪": 0 };

    function showQuestion() {
        const qBox = document.getElementById('questionText');
        const oGroup = document.getElementById('optionsGroup');
        const progress = document.getElementById('progressBar');

        if (currentStep < questions.length) {
            const currentQ = questions[currentStep];
            qBox.innerText = `Q${currentStep + 1}: ${currentQ.q}`;
            progress.style.width = `${(currentStep / questions.length) * 100}%`;
            
            oGroup.innerHTML = '';
            const options = [
                { text: "經常有這種感覺 (能量極弱)", val: 10 },
                { text: "偶爾會感到困擾", val: 5 },
                { text: "完全沒有這個問題", val: 2 }
            ];

            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.innerText = opt.text;
                btn.onclick = () => {
                    scores[currentQ.chakra] = opt.val;
                    currentStep++;
                    showQuestion();
                };
                oGroup.appendChild(btn);
            });
        } else {
            renderResult();
        }
    }

    function renderResult() {
        document.getElementById('quizBox').style.display = 'none';
        document.getElementById('resultBox').style.display = 'block';

        // 找到分數最高(最需補強)的脈輪
        const weakest = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        
        document.getElementById('weakestChakraName').innerText = weakest;
        document.getElementById('analysisText').innerText = chakraMeta[weakest].info;
        document.getElementById('crystalSuggest').innerText = `建議配戴：${chakraMeta[weakest].crystal}`;

        // 繪製雷達圖
        const ctx = document.getElementById('chakraChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(scores),
                datasets: [{
                    label: '能量虛弱程度 (越高代表越需補強)',
                    data: Object.values(scores),
                    backgroundColor: 'rgba(103, 58, 183, 0.2)',
                    borderColor: '#673ab7',
                    pointBackgroundColor: Object.keys(scores).map(k => chakraMeta[k].color),
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        ticks: { display: false }
                    }
                }
            }
        });
    }

    // 初始化啟動測驗
    showQuestion();
});
