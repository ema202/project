// ===================== تأثير ظهور العناصر عند التمرير =====================
const fadeElements = document.querySelectorAll('.fade-up');

function checkFadeIn() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 80) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// ===================== عدادات إحصائية متحركة =====================
const counters = document.querySelectorAll('.counter');
let counted = false;

function startCounters() {
    if (counted) return;
    counted = true;
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.innerText = target + '+';
                clearInterval(updateCounter);
            } else {
                counter.innerText = Math.floor(current);
            }
        }, 25);
    });
}

// بدء العدادات عندما تظهر منطقة العدادات في الشاشة
window.addEventListener('scroll', function onScroll() {
    const counterSection = document.querySelector('.counter-section');
    if (counterSection) {
        const rect = counterSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !counted) {
            startCounters();
            window.removeEventListener('scroll', onScroll);
        }
    }
});
// تحسباً إذا كانت المنطقة ظاهرة من البداية
if (document.querySelector('.counter-section')?.getBoundingClientRect().top < window.innerHeight) {
    startCounters();
}

// ===================== نموذج إضافة موظف جديد =====================
document.getElementById('addEmployeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('employeeName').value.trim();
    const score1 = document.getElementById('employeeScore1').value.trim();
    const score2 = document.getElementById('employeeScore2').value.trim();

    if (!name || !score1 || !score2) {
        alert("❌ الرجاء إدخال جميع البيانات (الاسم والدرجتين)");
        return;
    }
    const tableBody = document.querySelector("#employeesTable tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${name}</td><td>${score1}</td><td>${score2}</td>`;
    tableBody.appendChild(newRow);
    document.getElementById('addEmployeeForm').reset();
    alert("✅ تم إضافة الموظف بنجاح");
});

// ===================== نموذج التقديم على وظيفة =====================
document.getElementById('hrForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (name.length < 3) {
        document.getElementById('nameError').innerText = "الاسم يجب أن يكون 3 أحرف على الأقل";
        valid = false;
    } else document.getElementById('nameError').innerText = "";
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').innerText = "بريد إلكتروني غير صالح";
        valid = false;
    } else document.getElementById('emailError').innerText = "";
    if (valid) {
        alert("✅ تم إرسال طلبك بنجاح!");
        this.reset();
    }
});