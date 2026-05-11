document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. 魔法守護 (防盜功能) ---
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.onkeydown = e => {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) return false;
        if (e.ctrlKey && e.keyCode === 67) { alert("🔮 能量不可複製！"); return false; }
    };

    // --- 2. 測驗資料數據 ---
    const quizData = [
        { q: "您是否經常感到莫名的不安或恐懼？", chakra: "底輪" },
        { q: "對於創造力或親密關係，您是否感到卡住？", chakra: "臍輪" },
        { q: "面對壓力時，您是否容易失去自信與勇氣？", chakra: "太陽輪" },
        { q: "您是否覺得難以原諒他人或難以感受到愛？", chakra: "心輪" },
        { q: "表達真實想法對您來說是否很困難？", chakra: "喉輪" },
        { q: "您的直覺感應是否變得模糊且思緒混亂？", chakra: "眉心輪" },
        { q: "您是否感到與世界脫節，缺乏靈性連結？", chakra: "頂輪" }
    ];

    const resultsMeta = {
        "底輪": { advice: "建議配戴：黑曜石、茶晶。加強與大地的連結，多做赤腳走路運動。", color: "rgba(244, 67, 54, 0.6)" },
        "臍輪": { advice: "建議配戴：橘瑪瑙、太陽石。嘗試藝術創作來釋放情緒能量。", color: "rgba(255, 152, 0, 0.6)" },
        "太陽輪": { advice: "建議配戴：黃水晶、虎眼石。設定小目標並達成，找回掌控感。", color: "rgba(255, 235, 59, 0.6)" },
        "心輪": { advice: "建議配戴：粉水晶、綠幽靈。練習每天感恩三件事，開啟心靈。", color: "rgba(76, 175, 80, 0.6)" },
        "喉輪": { advice: "建議配戴：海藍寶、藍紋瑪瑙。練習唱歌或書寫日記來表達。", color: "rgba(3, 169, 244, 0.6)" },
        "眉心輪": { advice: "建議配戴：青金石、拉長石。減少螢幕時間，練習冥想專注。", color: "rgba(63, 81, 181, 0.6)" },
        "頂輪": { advice: "建議配戴：白水晶、紫水晶。追求身心靈平衡，閱讀智慧經典。", color: "rgba(156, 39, 176, 0.6)" }
    };

    let step = 0;
    let scores = { "底輪": 0, "臍輪": 0, "太陽輪": 0, "心輪": 0, "喉輪": 0, "眉心輪": 0, "頂輪": 0 };

    window.startQuiz = () => {
        renderQuestion();
    };

    function renderQuestion() {
        const container = document.getElementById('optionsWrapper');
        const title = document.getElementById('questionTitle');
        const progress = document.getElementById('quizProgress');
        const stepText = document.getElementById('progressStep');

        if (step < quizData.length) {
            const current = quizData[step];
            title.innerText = current.q;
            stepText.innerText = `問題 ${step + 1} / 7`;
            progress.style.width = `${((step + 1) / 7) * 100}%`;

            container.innerHTML = `
                <button class="option-btn" onclick="answer(5)">經常如此</button>
                <button class="option-btn" onclick="answer(3)">偶爾感到</button>
                <button class="option-btn" onclick="answer(1)">完全不會</button>
            `;
        } else {
            showResults();
        }
    }

    window.answer = (val) => {
        const chakra = quizData[step].chakra;
        scores[chakra] = val;
        step++;
        renderQuestion();
    };

    function showResults() {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('resultContainer').classList.remove('result-hidden');

        // 找出最弱脈輪 (得分最高者代表問題最嚴重)
        const weakest = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        document.getElementById('focusChakra').innerText = weakest;
        document.getElementById('analysisDesc').innerText = `掃描顯示您的${weakest}能量出現了明顯阻塞，這可能導致您近期的負面感受。`;
        document.getElementById('crystalAdvice').innerText = resultsMeta[weakest].advice;

        // 渲染圖表
        const ctx = document.getElementById('chakraRadarChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(scores),
                datasets: [{
                    label: '能量阻滯程度',
                    data: Object.values(scores),
                    backgroundColor: resultsMeta[weakest].color,
                    borderColor: '#673ab7',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    r: { min: 0, max: 5, ticks: { display: false } }
                }
            }
        });
    }
});
