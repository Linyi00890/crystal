/**
 * 魔法守護腳本
 * 保護網站內容不被輕易複製與存取
 */

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站圖文受智慧財產保護，無法使用右鍵選單。");
}, false);

document.addEventListener('keydown', function (e) {
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.keyCode === 73)) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && (e.key === "u" || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && (e.key === "s" || e.keyCode === 83)) {
        e.preventDefault();
        return false;
    }
});