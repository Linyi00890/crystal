document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. 建立積分桶
    const scores = {
        wealth: 0,      // 財運
        love: 0,        // 人緣/愛情
        protection: 0,  // 避邪/保護
        spiritual: 0,   // 靈性/智慧
        health: 0       // 健康/能量
    };

    // 2. 取得所有回答
    const formData = new FormData(this);
    for (let value of formData.values()) {
        // 根據 HTML 中的 value 設定對應屬性加分
        if (value === 'wealth') scores.wealth += 2;
        if (value === 'love') scores.love += 2;
        if (value === 'protection') scores.protection += 2;
        if (value === 'spiritual' || value === 'wisdom') scores.spiritual += 2;
        if (value === 'health') scores.health += 2;
        if (value === 'peace' || value === 'calm') scores.spiritual += 1;
        if (value === 'energy' || value === 'courage') scores.wealth += 1;
    }

    // 3. 找出最高分的類別
    const topCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    // 4. 定義超過 10 種水晶的資料庫
    const crystals = {
        wealth: [
            { name: "鈦晶", desc: "水晶之王，招正財偏財，氣場最強。" },
            { name: "黃水晶", desc: "溫和的財富之石，增加商業靈感。" },
            { name: "金髮晶", desc: "增強行動力，帶來事業突破。" }
        ],
        love: [
            { name: "粉晶", desc: "招好人緣與桃花，修復受損的情感。" },
            { name: "草莓晶", desc: "增進個人魅力，讓人際關係更圓融。" },
            { name: "紅紋石", desc: "喚醒心中愛的能力，吸引命定伴侶。" }
        ],
        protection: [
            { name: "黑曜石", desc: "強大的辟邪能力，吸收負能量與壓力。" },
            { name: "黑髮晶", desc: "消除小人干擾，守護個人能量場。" }
        ],
        spiritual: [
            { name: "紫水晶", desc: "開發智慧，安定心神，幫助睡眠。" },
            { name: "拉長石", desc: "激發潛能，增加藝術感與直覺力。" },
            { name: "青金石", desc: "保持頭腦清明，提升溝通表達力。" }
        ],
        health: [
            { name: "白水晶", desc: "平衡全身能量，淨化負面磁場。" },
            { name: "綠幽靈", desc: "守護心輪，帶來身心健康與生機。" }
        ]
    };

    // 5. 從最高分類別中隨機選一個（增加測驗驚喜感）
    const categoryCrystals = crystals[topCategory];
    const finalCrystal = categoryCrystals[Math.floor(Math.random() * categoryCrystals.length)];

    // 6. 顯示結果
    document.getElementById('quizForm').classList.add('hidden');
    document.getElementById('resultSection').classList.remove('hidden');
    document.getElementById('crystalName').innerText = finalCrystal.name;
    document.getElementById('crystalDesc').innerText = finalCrystal.desc;
});
