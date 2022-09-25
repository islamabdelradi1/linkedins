import React from 'react'


import { NavLink } from "react-router-dom";
function Home() {
return (
    <>
        
    <header className='headerhome'>
            <nav>
                <div className="logo">
                <img src="img\Linkedin-Logo-2011-2019.png" alt="Linkedin-Logo" className="img-fluid"/>
                </div>
                <div className="left">
                <div className="urls">
                    <NavLink to="/pulse" className="aa">
                    <i className="fa-brands fa-discourse"></i>
                    <span>أستكشف</span>

                    </NavLink>
                    <NavLink to="/pub" className="aa">
                    <i className="fa-solid fa-users"></i>
                    <span>أشخاص</span>
                    </NavLink>
                    <NavLink to="/learning" className="aa">
                    <i className="fa-solid fa-chalkboard-user"></i>
                    <span>التعلم</span>

                    </NavLink>
                    <NavLink to="/jobs" className="job aa">
                    <img src="img\9569001411647562840.svg" className="img-fluid" type="img"  alt='img'/>
                    <span>وظائف</span>
                    </NavLink>
                </div>
                <NavLink to="/Signup" className="log aa">انضم الان</NavLink>
                <NavLink to="/Login" className="sin">تسجيل الدخول</NavLink>
                </div>
            </nav>
    <section className="sec1">
        <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 r-thome">
            <h1 className='r-thomeh1'>مرحبًا بك في المجتمع الاحترافي</h1>
            <NavLink to="/link">
            البحث عن وظيفة 
            <i className="fa-solid fa-angle-left"></i>
            </NavLink>
            <NavLink to="/link">
            العثور على الأشخاص الذين تعرفهم
            <i className="fa-solid fa-angle-left"></i>
            </NavLink>
            <NavLink to="/link">
            تعلم مهارات جديدة 
            <i className="fa-solid fa-angle-left"></i>
            </NavLink>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 leftimg">
            <img src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" className="img-fluid" alt='img'/>
            </div>
        </div>
        </div>
    </section>
    </header>
    <section className="sec2">
    <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12  r-tsec2">
            <h1>اعثر على الوظيفة المناسبة أو التدريب المناسب لك</h1>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12  leftsec2">
            <p>عمليات بحث مقترحة</p>
            <NavLink to="/link" className="aa">الهندسة</NavLink>
            <NavLink to="/link" className="aa">نطوير الأعمال التجارية</NavLink>
            <NavLink to="/link" className="aa">مالية</NavLink>
            <NavLink to="/link" className="aa">مساعد اداري</NavLink>
            <NavLink to="/link" className="aa">موظف بالتجزئة</NavLink>
            <NavLink to="/link" className="aa">خدمة عملاء</NavLink>
            <NavLink to="/link" className="aa">عمليات</NavLink>
            <NavLink to="/link" className="aa">تكنولجيا المعلومات</NavLink>
            <NavLink to="/link" className="aa">التسويق</NavLink>
            <NavLink to="/link" className="aa">الموارد البشرية</NavLink>
            <NavLink to="/link" className="all">
            عرض المزيد
            <i className="fa-solid fa-sort-down"></i>
            </NavLink>
        </div>
        </div>
    </div>
    </section>
    <section className="sec3">
    <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 text-right r-tsec3">
            <h1>منشورات الوظائف تصل إلى ملايين الأعضاء</h1>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 text-right leftsec3">
            <NavLink to="/link">نشر وظيفة</NavLink>
        </div>
        </div>
    </div>
    </section>
    <section className="sec4">
    <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 r-tsec4">
            <h1>دع الأشخاص المناسبين يعرفون أنك مهتم بفرص مهنية جديدة</h1>
            <p>من خلال ميزة ’’مهتم بفرص مهنية‘‘، يمكنك إعلام خبراء التوظيف بشكل خاص أو أعضاء مجتمع LinkedIn بشكل علني أنك تبحث عن فرص مهنية جديدة.</p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 ">
            <img src="img\dbvmk0tsk0o0hd59fi64z3own.png" className="img-fluid w-75" alt='img'/>
        </div>
        </div>
    </div>
    </section>
    <section className="sec5">
    <div className="container">
        <div className="row r-tsec5row">
        <div className="col-lg-6 col-md-12 col-sm-12 text-right r-tsec5">
            <img src="img\rt.svg" className="img-fluid w-50 mb-5 " alt='img'/>
            <h1 className='r-tsec5h1'>تواصل مع من يمكنهم المساعدة</h1>
            <NavLink to="/link">اعثر على الأشخاص الذين تعرفهم</NavLink>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 text-right leftsec5 mt-5">
            <img src="img\lef.svg" className="img-fluid w-50 mb-5" alt='img'/>
            <h1>تعلم المهارات اللازمة لمساعدتك على تحقيق النجاح</h1>
            <NavLink to="/link">اختر الموضوع الذي ترغب في معرفة المزيد عنه</NavLink>
        </div>
        </div>
    </div>
    </section>
    <section className="sec6">
    <div className="container">
        <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
            <h1>انضم إلى زملاء العمل والدراسة والأصدقاء على LinkedIn.
            </h1>
            <NavLink to="/link">ابدأ</NavLink>
        </div>
        </div>
    </div>

    </section>
    <section className="fotter">
    <div className="container">
        <div className="row">
        <div className="col-2">
            <img src="img\Linkedin-Logo.png" className="img-fluid w-50" alt='img'/>
        </div>
        <div className="col-lg-2 col-md-2 fotal">
            <p>عام</p>
            <NavLink to="/link">إنشاء حساب</NavLink>
            <NavLink to="/link">مركز المساعدة</NavLink>
            <NavLink to="/link">نبذة عنا</NavLink>
            <NavLink to="/link">صحافة</NavLink>
            <NavLink to="/link">مدونة</NavLink>
            <NavLink to="/link">المهن</NavLink>
            <NavLink to="/link">المطورون</NavLink>
        </div>
        <div className="col-lg-2 col-md-2 fotal">
            <p>تصفح LinkedIn</p>
            <NavLink to="/link">التعليم</NavLink>
            <NavLink to="/link">الوظائف</NavLink>
            <NavLink to="/link">الراتب</NavLink>
            <NavLink to="/link">الجوال</NavLink>
            <NavLink to="/link">الخدمات</NavLink>
            <NavLink to="/link">المهن</NavLink>
            <NavLink to="/link">المنتجات</NavLink>
        </div>
        <div className="col-lg-2 col-md-2 fotal">
            <p>حلول الأعمال التجارية</p>
            <NavLink to="/link">المواهب</NavLink>
            <NavLink to="/link">التسويق</NavLink>
            <NavLink to="/link">المبيعات</NavLink>
            <NavLink to="/link">التعليم</NavLink>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 fotal">
            <p>الدليل</p>
            <NavLink to="/link">الأعضاء</NavLink>
            <NavLink to="/link">الوظائف</NavLink>
            <NavLink to="/link">الشركات</NavLink>
            <NavLink to="/link">مميز</NavLink>
            <NavLink to="/link">التعليم</NavLink>
            <NavLink to="/link">المنشورات</NavLink>
            <NavLink to="/link">المقالات</NavLink>
            <NavLink to="/link">الجامعات</NavLink>
            <NavLink to="/link">الأخبار</NavLink>
            <NavLink to="/link">رسائل إخبارية</NavLink>
            <NavLink to="/link">الخدمات</NavLink>
            <NavLink to="/link">الإعداد للمقابلات المهنية</NavLink>
            <NavLink to="/link">المنتجات</NavLink>
            <NavLink to="/link">موضوعات المحتوى</NavLink>
        </div>
        </div>
</div>
</section>

<footer>
<div className="container-fluid">
    <div className="row">
    <div className="col foot">
        <img src="img\LinkedIn-Wordmark-Black-Logo.wine.svg" type='logo' alt='logo'/>
        <p>© 2022</p>
        <NavLink to="/link">نبذة عني</NavLink>
        <NavLink to="/link">إمكانية الوصول
        </NavLink>
        <NavLink to="/link">اتفاقية المستخدم
        </NavLink>
        <NavLink to="/link">سياسة الخصوصية
        </NavLink>
        <NavLink to="/link">سياسة ملفات تعريف الارتباط
        </NavLink>
        <NavLink to="/link">سياسة حقوق النشر
        </NavLink>
        <NavLink to="/link">سياسة العلامة التجارية
        </NavLink>
        <NavLink to="/link">إعدادات إدارة الضيوف
        </NavLink>
        <NavLink to="/link">إرشادات المجتمع</NavLink>
        <NavLink to="/link">
        اللغة
        <i className="fa-solid fa-angle-down"></i>
        </NavLink>
    </div>
    </div>
</div>
</footer>
    </>

)
}

export default Home