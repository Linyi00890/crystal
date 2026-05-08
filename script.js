const initAccordion = () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            

            item.classList.toggle('active');
            
            // 如果你希望一次只能打開一個選單，請取消下方註釋：
            /*
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            */
        });
    });
};


const initQuiz = () => {
    const quizForm = document.getElementById('crystalQuiz');
    

    if (!quizForm) return;

    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();


        const q1Selection = document.querySelector('input[name="q1"]:checked');
        
        if (!q1Selection) {
            alert("請先選擇一個領域喔！");
            return;
        }

        const choice = q1Selection.value;
        const resultSection = document.getElementById('resultSection');
        const nameDisplay = document.getElementById('crystalName');
        const descDisplay = document.getElementById('crystalDescription');
        const imgDisplay = document.getElementById('crystalImage');


        const results = {
            love: {
                title: "🌸 粉水晶 (Rose Quartz)",
                desc: "您目前最需要的是愛與和諧。粉水晶能幫助您吸引好人緣，撫平內心傷痛，並重拾愛自己的勇氣。",
                img: "picture/pink.jpg"
            },
            wealth: {
                title: "💰 黃水晶 (Citrine)",
                desc: "您的事業能量正在升溫！黃水晶能助您招財聚財，提升自信與行動力，讓您的努力轉化為回報。",
                img: "picture/yellow.jpg"
            },
            protection: {
                title: "🖤 黑曜石 (Obsidian)",
                desc: "穩定與保護是您現在的首選。黑曜石能迅速吸收負能量，避邪擋煞，帶給您強大的安全感。",
                img: "picture/obsidian.jpg"
            },
            spiritual: {
                title: "💜 紫水晶 (Amethyst)",
                desc: "您渴望智慧與平靜。紫水晶能開發靈性、穩定焦慮的情緒，幫助您在繁忙中保持清晰思緒。",
                img: "picture/purple.jpg"
            }
        };


        const data = results[choice];


        if (data) {
            nameDisplay.innerText = data.title;
            descDisplay.innerText = data.desc;
            imgDisplay.src = data.img;


            resultSection.classList.remove('hidden');
            resultSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
};


document.addEventListener('DOMContentLoaded', () => {
    initAccordion(); 
    initQuiz(); 
});
