/**
 * 魔法守護腳本 - 專業版
 */

document.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護。");
}, false);

document.addEventListener('keydown', e => {
    // 禁用快捷鍵與開發者工具
    if (e.key === "F12" || 
       (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
       (e.ctrlKey && (e.key === "u" || e.key === "s"))) {
        e.preventDefault();
        return false;
    }
});