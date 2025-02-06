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
const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const speed = 200; // سرعة العداد

        const updateCount = () => {
            const current = +counter.innerText;
            const increment = Math.ceil(target / speed);

            if (current < target) {
                counter.innerText = current + increment;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target; // الوصول للهدف النهائي
            }
        };

        updateCount();
    });
};

// تفعيل العداد عند ظهور قسم "Skills" في الشاشة
const skillsSection = document.getElementById('skills');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect(); // لإيقاف المراقبة بعد التفعيل مرة واحدة
        }
    });
}, {
    threshold: 0.5 // يبدأ عند ظهور 50% من القسم
});

// بدء مراقبة قسم "Skills"
observer.observe(skillsSection);
