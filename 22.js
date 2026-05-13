document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 表單提交模擬 (增加儀式感)
    const form = document.getElementById('customRequirementForm');
    const submitBtn = document.querySelector('.btn-custom-submit');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 變更按鈕狀態
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "🔮 能量連結中，請稍候...";
            submitBtn.style.opacity = "0.7";
            submitBtn.disabled = true;

            // 模擬處理延遲
            setTimeout(() => {
                alert('✨ 您的客製化需求已傳達！\n設計師將在 48 小時內感應您的需求並與您聯繫。');
                form.reset();
                submitBtn.innerText = originalText;
                submitBtn.style.opacity = "1";
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // 2. 文字框自動增高 (User Experience)
    const detailsArea = document.getElementById('details');
    if (detailsArea) {
        detailsArea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    }

    // 3. 魔法守護腳本 (防拷貝/防調試)
    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('keydown', e => {
        // 禁用 F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
        if (e.keyCode === 123 || 
           (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
           (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83))) {
            e.preventDefault();
            return false;
        }
    });

    // 4. 滾動顯示返回按鈕效果 (選配)
    const backBtn = document.querySelector('.back-floating-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backBtn.style.opacity = "1";
            backBtn.style.transform = "scale(1)";
        }
    });
});