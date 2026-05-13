document.addEventListener('DOMContentLoaded', () => {
    // 1. 手風琴摺疊邏輯
    const tabs = document.querySelectorAll('.accordion-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const span = this.querySelector('span');
            
            // 關閉其他已打開的
            document.querySelectorAll('.accordion-content').forEach(c => {
                if (c !== content) {
                    c.style.display = 'none';
                    c.previousElementSibling.querySelector('span').innerText = '▼';
                }
            });

            // 切換目前的
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                span.innerText = '▲';
            } else {
                content.style.display = 'none';
                span.innerText = '▼';
            }
        });
    });

    // 2. 魔法守護：禁止右鍵與開發者快捷鍵
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
    }, false);

    document.addEventListener('keydown', e => {
        // 禁止 F12, Ctrl+Shift+I, Ctrl+U
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Debugger 陷阱 (防止 F12 檢視)
    setInterval(() => {
        const start = performance.now();
        debugger;
        if (performance.now() - start > 100) {
            document.body.innerHTML = `
                <div style="background:#1a0a2e; color:white; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; font-family:sans-serif;">
                    <h1>🔮 能量干擾偵測</h1>
                    <p>魔法防禦機制已啟動，請關閉檢視工具後重新讀取。</p>
                    <button onclick="location.reload()" style="padding:10px 20px; border-radius:20px; cursor:pointer;">重置能量</button>
                </div>`;
        }
    }, 1000);
});
