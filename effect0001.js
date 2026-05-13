document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 動態背景粒子產生
    const container = document.getElementById('particle-container');
    for(let i=0; i<20; i++) {
        let p = document.createElement('div');
        p.className = 'particle';
        let size = Math.random() * 150 + 50;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.setProperty('--d', (Math.random() * 20 + 10) + 's');
        p.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(p);
    }

    // 2. 滾動顯示動畫 (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    reveals.forEach(r => observer.observe(r));

    // 3. 導覽列捲動效果
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // 4. 測驗資料與邏輯
    const questions = [
        { q: "您是否感到缺乏安全感，對生活感到恐懼？", chakra: "底輪" },
        { q: "您是否覺得情緒壓抑，失去創造力衝動？", chakra: "臍輪" },
        { q: "您是否經常感到沒自信、優柔寡斷？", chakra: "太陽輪" },
        { q: "您是否感到孤獨，很難原諒他人的傷害？", chakra: "心輪" },
        { q: "當有話想說時，是否感到喉嚨緊繃，選擇沉默？", chakra: "喉輪" },
        { q: "您是否感到思緒混亂，很難專注當下？", chakra: "眉心輪" },
        { q: "您是否感到與世界脫節，找不到生命意義？", chakra: "頂輪" }
    ];

    const meta = {
        "底輪": { crystal: "黑曜石、黑銀鈦、茶晶", color: "#f44336", quote: "「穩定是生長的根基。讓自己與大地的能量重新連結，找回原始的安全感。」" },
        "臍輪": { crystal: "橙月光、太陽石、紅瑪瑙", color: "#ff9800", quote: "「熱情是靈魂的燃料。釋放被壓抑的情緒，讓創造力如泉水般湧現。」" },
        "太陽輪": { crystal: "黃水晶、虎眼石、金髮晶", color: "#ffeb3b", quote: "「您比想像中更強大。點燃內在的太陽，勇敢展現真實的自我價值。」" },
        "心輪": { crystal: "粉水晶、綠幽靈、捷克隕石", color: "#4caf50", quote: "「愛是治癒一切的良藥。打開緊閉的心房，接納自己並原諒他人。」" },
        "喉輪": { crystal: "海藍寶、天河石、藍玉髓", color: "#03a9f4", quote: "「您的聲音擁有力量。真誠地表達內在的想法，與宇宙和諧共振。」" },
        "眉心輪": { crystal: "青金石、拉長石、藍磷灰", color: "#3f51b5", quote: "「信任您的直覺之眼。穿透迷霧，看見隱藏在表象下的真理。」" },
        "頂輪": { crystal: "白水晶、紫水晶、透石膏", color: "#9c27b0", quote: "「您與萬物同在。在靜謐中連結宇宙意識，找回生命的終極目標。」" }
    };

    let step = 0;
    let scores = { "底輪":0, "臍輪":0, "太陽輪":0, "心輪":0, "喉輪":0, "眉心輪":0, "頂輪":0 };

    window.startQuiz = () => {
        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('loading-screen').classList.remove('hidden');
        
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
            document.getElementById('question-screen').classList.remove('hidden');
            renderQuestion();
        }, 2000);
    };

    function renderQuestion() {
        if(step >= questions.length) {
            showResult();
            return;
        }
        const q = questions[step];
        document.getElementById('question-text').innerText = q.q;
        document.getElementById('step-label').innerText = `Step ${step+1} / 7`;
        document.getElementById('progress-bar').style.width = ((step+1)/7 * 100) + '%';
        
        const container = document.getElementById('options-container');
        container.innerHTML = `
            <button class="option-btn" onclick="handleAnswer(10)">經常有此感覺</button>
            <button class="option-btn" onclick="handleAnswer(5)">偶爾會感覺到</button>
            <button class="option-btn" onclick="handleAnswer(2)">幾乎沒有感覺</button>
        `;
    }

    window.handleAnswer = (val) => {
        scores[questions[step].chakra] = val;
        step++;
        renderQuestion();
    };

    function showResult() {
        document.getElementById('question-screen').classList.add('hidden');
        document.getElementById('result-screen').classList.remove('hidden');

        const weakest = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        document.getElementById('weakest-name').innerText = weakest;
        document.getElementById('weakest-name').style.color = meta[weakest].color;
        document.getElementById('analysis-quote').innerText = meta[weakest].quote;
        document.getElementById('crystal-list').innerText = meta[weakest].crystal;

        const ctx = document.getElementById('chakraRadarChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(scores),
                datasets: [{
                    label: '能量阻滯狀態',
                    data: Object.values(scores),
                    backgroundColor: 'rgba(124, 77, 255, 0.2)',
                    borderColor: '#7c4dff',
                    pointBackgroundColor: Object.keys(scores).map(k => meta[k].color)
                }]
            },
            options: {
                scales: { r: { min: 0, max: 10, ticks: { display: false } } },
                plugins: { legend: { display: false } }
            }
        });
    }
});
