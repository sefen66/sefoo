document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.ui-switch input'); // اختيار زر التبديل
    const body = document.body;
  
    // التحقق من حالة الزر عند التبديل
    toggleSwitch.addEventListener('change', () => {
      if (toggleSwitch.checked) {
        body.classList.add('dark-mode'); // إضافة الوضع الداكن
      } else {
        body.classList.remove('dark-mode'); // إزالة الوضع الداكن
      }
    });
  });
  // النص المطلوب كتابته
const text = "Welcome, I'm Sefen Zkarya";
const typingElement = document.getElementById("typing-effect");

// إعداد المتغيرات
let index = 0;

// دالة الكتابة التدريجية
function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60); // ضبط سرعة الكتابة (100ms لكل حرف)
    }
}

// بدء التأثير عند تحميل الصفحة
window.onload = typeEffect;
