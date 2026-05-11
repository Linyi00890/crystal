// 保護內容與右鍵禁用
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("🔮 魔法能量守護中：本站內容受保護，無法使用右鍵選單。");
}, false);

document.addEventListener('keydown', function (e) {
    // 禁用 F12, Ctrl+U, Ctrl+Shift+I 等
    if (e.key === "F12" || (e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "s" || e.key === "S"))) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === "i" || e.key === "I" || e.key === "j" || e.key === "J")) {
        e.preventDefault();
        return false;
    }
});
