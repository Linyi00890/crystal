/**
 * CrystalMagic - 測驗與互動邏輯
 * 適用於：quiz.html, origin.html, index.html
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================================================
    // 1. 能量測驗邏輯 (Quiz Logic)
    // ==========================================================================
    const quizForm = document.getElementById('crystalQuiz');
    
    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // --- 檢查是否每一題都選了 ---
            // 使用陣列遍歷 Q1~Q5，確保代碼精簡
            const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];
            let allAnswered = true;
            let userAnswers = {};

            questions.forEach(q => {
                const selected = document.querySelector(`input[name="${q}"]:checked`);
                if (!selected) {
                    allAnswered = false;
                } else {
                    userAnswers[q] = selected.value;
                }
            });

            if (!allAnswered) {
                alert("請先完成所有題目喔！讓能量測驗更精準 ✨");
                return;
            }

            // --- 判斷邏輯 ---
            // 以 Q1 (核心需求) 作為主要判斷依據
            const choice = userAnswers.q1; 
            const resultSection = document.getElementById('resultSection');
            const nameDisplay = document.getElementById('crystalName');
            const descDisplay = document.getElementById('crystalDescription');
            const imgDisplay = document.getElementById('crystalImage');

            let resultTitle = "";
            let resultDesc = "";
            let resultImg = "";

            // 根據選擇決定結果內容
            switch (choice) {
                case 'love':
                    resultTitle = "🌸 粉水晶 (Rose Quartz)";
                    resultDesc = "您目前最需要的是愛與和諧。粉水晶能幫助您吸引好人緣，撫平內心傷痛，並重拾愛自己的勇氣。它對應心輪，能帶來溫暖的療癒能量。";
                    resultImg = "picture/crystal03.jpg"; // 請確保路徑與您的圖片資料夾一致
                    break;
                case 'wealth':
                    resultTitle = "💰 黃水晶 (Citrine)";
                    resultDesc = "您的事業能量正在升溫！黃水晶代表財富與成功的喜悅，能助您招財聚財，提升自信與行動力，讓您的努力轉化為實質的回報。";
                    resultImg = "picture/crystal04.jpg";
                    break;
                case 'protection':
                    resultTitle = "🖤 黑曜石 (Obsidian)";
                    resultDesc = "穩定與保護是您現在的首選。黑曜石擁有強大的避邪化煞能力，能吸收周遭負能量，帶給您強大的安全感，像是一面無形的心理護盾。";
                    resultImg = "picture/crystal05.jpg";
                    break;
                case 'spiritual':
                    resultTitle = "💜 紫水晶 (Amethyst)";
                    resultDesc = "您渴望智慧與靈性的成長。紫水晶能開發智慧、協助靜心，穩定焦慮的情緒，幫助您在繁忙的生活中保持清明與冷靜的判斷力。";
                    resultImg = "picture/purple.jpg";
                    break;
                default:
                    resultTitle = "✨ 白水晶 (Clear Quartz)";
                    resultDesc = "白水晶是能量之王，代表純淨與平衡。它能放大您的意圖，清理雜念，適合陪伴您開啟任何新的計畫。";
                    resultImg = "picture/crystal01.jpg";
            }

            // --- 更新 DOM 內容 ---
            nameDisplay.innerText = resultTitle;
            descDisplay.innerText = resultDesc;
            imgDisplay.src = resultImg;

            // --- 顯示結果區域並滾動 ---
            // 移除 hidden 類別（確保 CSS 中有設定 .hidden { display: none; }）
            resultSection.classList.remove('hidden');
            
            // 延遲執行滾動，確保瀏覽器已完成渲染
            setTimeout(() => {
                resultSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 150);
        });
    }

    // ==========================================================================
    // 2. 摺疊選單邏輯 (Accordion Logic)
    // ==========================================================================
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            if (header) {
                header.addEventListener('click', () => {
                    // 如果希望一次只能打開一個，可以先移除其他項目的 active
                    // accordionItems.forEach(i => i.classList.remove('active'));
                    
                    item.classList.toggle('active');
                });
            }
        });
    }

});
