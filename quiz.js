document.getElementById('crystalQuiz').addEventListener('submit', function(e) {

    e.preventDefault();


    const q1 = document.querySelector('input[name="q1"]:checked');
    
    if (!q1) {
        alert("請先完成所有題目喔！");
        return;
    }

    const choice = q1.value;
    const resultSection = document.getElementById('resultSection');
    const name = document.getElementById('crystalName');
    const desc = document.getElementById('crystalDescription');
    const img = document.getElementById('crystalImage');


    let resultTitle = "";
    let resultDesc = "";
    let resultImg = "";

    if (choice === 'love') {
        resultTitle = "🌸 粉水晶 (Rose Quartz)";
        resultDesc = "您目前最需要的是愛與和諧。粉水晶能幫助您吸引好人緣，撫平內心傷痛，並重拾愛自己的勇氣。";
        resultImg = "picture/pink.jpg"; // 請確認你的 picture 資料夾內有這張圖
    } 
    else if (choice === 'wealth') {
        resultTitle = "💰 黃水晶 (Citrine)";
        resultDesc = "您的事業能量正在升溫！黃水晶能助您招財聚財，提升自信與行動力，讓您的努力轉化為實質回報。";
        resultImg = "picture/yellow.jpg";
    } 
    else if (choice === 'protection') {
        resultTitle = "🖤 黑曜石 (Obsidian)";
        resultDesc = "穩定與保護是您現在的首選。黑曜石能吸收周遭負能量，避邪擋煞，帶給您強大的安全感與心理護盾。";
        resultImg = "picture/obsidian.jpg";
    } 
    else if (choice === 'spiritual') {
        resultTitle = "💜 紫水晶 (Amethyst)";
        resultDesc = "您渴望智慧與平靜。紫水晶能開發靈性、穩定焦慮的情緒，幫助您在繁忙的生活中保持清晰的思緒。";
        resultImg = "picture/purple.jpg";
    }


    name.innerText = resultTitle;
    desc.innerText = resultDesc;
    img.src = resultImg;

  
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth' });
});
