import React from 'react'
import { NavLink} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {

    const auth = getAuth()
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const navgate= useNavigate();

const singup =()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("Successfully created an acccont");
        // ...
        navgate('/Login')

    })
    .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
        // ..
    });
}
    

    return (
    <>
<header className='headersign'>
    <nav className='navsign'>
        <div className="logo">
            <img src="./img/Linkedin-Logo-2011-2019.png" alt="Linkedin-Logo" className="img-fluid" />
        </div>
    </nav>
    <h2 className="hh1">حقق أقصى استفادة من حياتك المهنية</h2>
    <section className='secsign'>
            <div className="cent">
                <div className='formsign' >
                    <label for="email" className='labsign'>البريد الالكتروني أو رقم الهاتف</label>
                    <input type="email" name="email" id="email"  onChange={(e)=> setemail(e.target.value)}/>
                    <label for="password" className='labsign'>كلمة المرور (٦ أحرف أو أكثر)</label>
                    <input type="password" name="password" id="password" onChange={(e)=> setpassword(e.target.value)}/>
                <p>بالنقر على الموافقة والانضمام، فأنت توافق على <NavLink to="#">اتفاقية المستخدم</NavLink> ، <NavLink to="#">اتفاقية الخصوصية</NavLink>، و<NavLink to="#">سياسة ملفات تعريف الارتباط</NavLink> الخاصة بموقع LinkedIn.</p>  
                <button onClick={singup} className="btnsing">الموافقة والانضمام</button>
                </div>
                <p className="orsign">أو</p>
                <hr/>
                <div className="btnab">
                    <NavLink to="#" className="btns">
                        <i className="fa-brands fa-google"></i>
                        تسجيل الدخول عبر Google
                    </NavLink>
                    <p className="newsig">هل لديك حساب في LinkedIn بالفعل؟<NavLink to="/Login">تسجيل الدخول</NavLink></p>
                </div>
            </div>
            <p className="newsig">هل ترغب في إنشاء صفحة شركة أو صفحة تجارية؟ <NavLink to="#">الحصول على المساعدة</NavLink></p>

    </section>
</header>



    <footer className="footersign">
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-md-12  footsign">
            <img src="./img/LinkedIn-Wordmark-Black-Logo.wine.svg" alt='img'/>
            <p>حقوق الطبع والنشر محفوظة © لعام ٢٠٢١</p>
            <NavLink to="#">نبذة عنا</NavLink>
            <NavLink to="#">إمكانية الوصول</NavLink>
            <NavLink to="#">اتفاقية المستخدم</NavLink>
            <NavLink to="#">سياسة الخصوصية</NavLink>
            <NavLink to="#">سياسة ملفات تعريف الارتباط</NavLink>
            <NavLink to="#">سياسة حقوق النشر</NavLink>
            <NavLink to="#">سياسة العلامة التجارية</NavLink>
            <NavLink to="#">إعدادات إدارة الضيوف</NavLink>
            <NavLink to="#">إرشادات المجتمع</NavLink>
            <NavLink to="#">
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
export default Signup