document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        // 切換開關狀態
        item.classList.toggle('active');
        
        // 可選：點擊一個時關閉其他的
        // document.querySelectorAll('.accordion-item').forEach(otherItem => {
        //    if (otherItem !== item) otherItem.classList.remove('active');
        // });
    });
});
