<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إدارة الموارد البشرية | HR Hub</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        /* التصميم العام والألوان الخضراء الفاتحة */
        body {
            background-color: #f1f8e9;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .navbar {
            background-color: #2e7d32 !important;
        }
        .navbar-brand, .nav-link {
            color: white !important;
        }
        .nav-link:hover {
            color: #c8e6c9 !important;
        }
        .hero-section {
            background: linear-gradient(135deg, #a5d6a7 0%, #c8e6c9 100%);
            color: #1b5e20;
            padding: 80px 0;
            text-align: center;
        }
        .hero-section h1 {
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        .service-card {
            background-color: #ffffff;
            border: none;
            border-radius: 15px;
            transition: transform 0.3s;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }
        .btn-primary {
            background-color: #388e3c;
            border-color: #2e7d32;
        }
        .btn-primary:hover {
            background-color: #2e7d32;
            border-color: #1b5e20;
        }
        footer {
            background-color: #2e7d32;
            color: white;
        }
        .table {
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
        }
        .table thead {
            background-color: #a5d6a7;
            color: #1b5e20;
        }
        .carousel-item img {
            height: 400px;
            object-fit: cover;
        }
        .counter-section {
            background-color: #e8f5e9;
            border-radius: 15px;
        }
        .counter {
            font-size: 2.5rem;
            font-weight: bold;
            color: #2e7d32;
        }
    </style>
</head>
<body>

    <!-- الشريط العلوي (Navbar) -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">HR <span class="text-light">Portal</span></a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link active" href="#">الرئيسية</a>
                <a class="nav-link" href="#services">الخدمات</a>
                <a class="nav-link" href="#gallery">معرضنا</a>
                <a class="nav-link" href="#contact">اتصل بنا</a>
            </div>
        </div>
    </nav>

    <!-- قسم الترحيب (Hero Section) - الترتيب المطلوب -->
    <header class="hero-section">
        <div class="container">
            <h1 class="display-4 fw-bold">نستثمر في رأس المال البشرى</h1>
            <!-- أولاً: تحت إشراف المعلمة -->
            <p class="lead" style="font-size: 1.4rem;">تحت إشراف المعلمة أ: أشواق العنزي</p>
            <!-- ثانياً: الاسم -->
            <p class="lead" style="font-size: 1.8rem; font-weight: 500;">ريناد خليف الخريصي الشمري</p>
            <a href="https://www.zenhr.com/ar/home">
                <button class="btn btn-primary btn-lg mt-3">اكتشف المزيد</button>
            </a>
        </div>
    </header>

    <!-- قسم الخدمات -->
    <section id="services" class="container py-5">
        <h2 class="text-center mb-5" style="color: #2e7d32;">خدماتنا</h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card service-card h-100 p-4 text-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/912/912318.png" width="60" class="mx-auto mb-3" alt="توظيف">
                    <h3>التوظيف الذكي</h3>
                    <p>نساعدك في اختيار أفضل المواهب التي تناسب ثقافة شركتك.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card service-card h-100 p-4 text-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135714.png" width="60" class="mx-auto mb-3" alt="تدريب">
                    <h3>تدريب وتطوير</h3>
                    <p>برامج تدريبية مخصصة لرفع كفاءة فريق العمل وتطوير مهاراتهم.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card service-card h-100 p-4 text-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/3281/3281306.png" width="60" class="mx-auto mb-3" alt="تقييم">
                    <h3>تقييم الأداء</h3>
                    <p>أنظمة دقيقة لقياس الإنتاجية وتقديم التغذية الراجعة.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- نموذج إضافة موظف جديد -->
    <section class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-6 border p-4 rounded bg-white shadow-sm">
                <h3 class="text-center mb-4" style="color: #2e7d32;">إضافة موظف جديد</h3>
                <form id="addEmployeeForm">
                    <div class="mb-3">
                        <label for="employeeName" class="form-label">الاسم الكامل</label>
                        <input type="text" id="employeeName" class="form-control" placeholder="مثال: أحمد محمد" required>
                    </div>
                    <div class="mb-3">
                        <label for="employeeScore1" class="form-label">تقييم الفترة الأولى</label>
                        <input type="number" id="employeeScore1" class="form-control" placeholder="من 0 إلى 20" required>
                    </div>
                    <div class="mb-3">
                        <label for="employeeScore2" class="form-label">تقييم الفترة الثانية</label>
                        <input type="number" id="employeeScore2" class="form-control" placeholder="من 0 إلى 20" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">حفظ البيانات</button>
                </form>
            </div>
        </div>
    </section>

    <!-- جدول عرض الموظفين -->
    <section class="container py-5">
        <h2 class="text-center mb-4" style="color: #2e7d32;">قائمة الموظفين والتقييمات</h2>
        <div class="table-responsive">
            <table class="table table-bordered text-center" id="employeesTable">
                <thead>
                    <tr>
                        <th>اسم الموظف</th>
                        <th>تقييم الفترة الأولى</th>
                        <th>تقييم الفترة الثانية</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>أحمد السالم</td><td>19</td><td>20</td></tr>
                    <tr><td>نورة خالد</td><td>17</td><td>19</td></tr>
                </tbody>
            </table>
        </div>
    </section>

    <!-- معرض الصور (سلايدر تفاعلي) -->
    <section id="gallery" class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-5" style="color: #2e7d32;">بيئة العمل لدينا</h2>
            <div id="workCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80" class="d-block w-100" alt="فريق العمل 1">
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" class="d-block w-100" alt="فريق العمل 2">
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80" class="d-block w-100" alt="فريق العمل 3">
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80" class="d-block w-100" alt="فريق العمل 4">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#workCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">السابق</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#workCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">التالي</span>
                </button>
            </div>
        </div>
    </section>

    <!-- عداد الإحصائيات -->
    <section class="container py-5 counter-section my-5 shadow-sm">
        <div class="row text-center">
            <div class="col-md-4">
                <h2 class="counter" data-target="1500">0</h2>
                <p>موظف تم توظيفه</p>
            </div>
            <div class="col-md-4">
                <h2 class="counter" data-target="85">0</h2>
                <p>شريك نجاح</p>
            </div>
            <div class="col-md-4">
                <h2 class="counter" data-target="200">0</h2>
                <p>دورة تدريبية</p>
            </div>
        </div>
    </section>

    <!-- نموذج التقديم على وظيفة -->
    <section id="contact" class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-6 border p-4 rounded bg-white shadow-sm">
                <h3 class="text-center mb-4" style="color: #2e7d32;">قدم للوظيفة الآن</h3>
                <form id="hrForm">
                    <div class="mb-3">
                        <input type="text" id="name" class="form-control" placeholder="الاسم الكامل">
                        <small class="text-danger" id="nameError"></small>
                    </div>
                    <div class="mb-3">
                        <input type="email" id="email" class="form-control" placeholder="البريد الإلكتروني">
                        <small class="text-danger" id="emailError"></small>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">إرسال الطلب</button>
                </form>
            </div>
        </div>
    </section>

    <!-- تذييل الصفحة -->
    <footer class="text-center py-4">
        <p>© 2025 جميع الحقوق محفوظة لقسم الموارد البشرية</p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        // Counters
        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        const startCounters = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target + "+";
                    }
                };
                updateCount();
            });
        };

        window.addEventListener('scroll', function scrollHandler() {
            const section = document.querySelector('.counter');
            if (section) {
                const sectionPos = section.getBoundingClientRect().top;
                const screenPos = window.innerHeight;
                if (sectionPos < screenPos) {
                    startCounters();
                    window.removeEventListener('scroll', scrollHandler);
                }
            }
        });
        
        // Form validation for job application
        document.getElementById('hrForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name.length < 3) {
                document.getElementById('nameError').innerText = "يرجى إدخال اسم صحيح (أكثر من 3 أحرف)";
                isValid = false;
            } else {
                document.getElementById('nameError').innerText = "";
            }

            if (!email.includes('@')) {
                document.getElementById('emailError').innerText = "يرجى إدخال بريد إلكتروني صالح";
                isValid = false;
            } else {
                document.getElementById('emailError').innerText = "";
            }

            if (isValid) {
                alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
                this.reset();
            }
        });

        // Add employee to table
        document.getElementById('addEmployeeForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('employeeName').value.trim();
            const score1 = document.getElementById('employeeScore1').value.trim();
            const score2 = document.getElementById('employeeScore2').value.trim();

            if (name === "" || score1 === "" || score2 === "") {
                alert("الرجاء إدخال جميع البيانات (الاسم والدرجتين)");
                return;
            }

            const tableBody = document.querySelector("#employeesTable tbody");
            const newRow = document.createElement("tr");

            newRow.innerHTML = `
                <td>${name}</td>
                <td>${score1}</td>
                <td>${score2}</td>
            `;
            tableBody.appendChild(newRow);
            document.getElementById('addEmployeeForm').reset();
            alert("تم إضافة الموظف بنجاح ✅");
        });
    </script>
</body>
</html>
