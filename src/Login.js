import React,{ useState } from 'react'
import { NavLink} from "react-router-dom";
import fireDb from './firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    

const auth = getAuth();

const [email,setemail] = useState("");
const [password,setpassword] = useState("");

const navgate= useNavigate();

const singin =()=>{
    signInWithEmailAndPassword(auth, email, password)
    
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("Successfully acccont sing in")
        navgate('/Homepage')
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);

    });
}
    return (
        <div>
<nav className='navlog'>
    <div className="logo">
        <img src="./img/Linkedin-Logo-2011-2019.png" alt="Linkedin-Logo" className="img-fluid"/>
    </div>
</nav>
<section className='seclog'>
        <div className="cent">
            <h1>تسجيل الدخول</h1>
            <p>ابق علي اطلاع على أحدث اخبار عالمك الاحترافي</p>
            <div className='formlog'>
                <input type="text" placeholder="البريد الالكتروني أو رقم الهاتف" name="email" id="email" onChange={(e)=> setemail(e.target.value)}/>
                <p id="erroremail">برجاء إدخال عنوان بريدك الإلكتروني أو رقم الهاتف الجوال.</p>
                <input type="password" placeholder="كلمة المرور" name="password" id="password" onChange={(e)=> setpassword(e.target.value)}/>
                <p id="errorpass">يرجى إدخال كلمة المرور.</p>
                <NavLink to="/" className="whtpas">هل نسيت كلمة المرور؟</NavLink>
                <button  onClick={singin} className="btnlog" >تسجيل الدخول</button>

            </div>
            <p className="or" id="ors">أو</p>
            <hr/>
            <div className="btnab">
                <NavLink to="/" className="btns">
                    <i className="fa-brands fa-google"></i>
                    تسجيل الدخول عبر Google
                </NavLink>
                <NavLink to="/" className="btns">
                    <i className="fa-brands fa-apple"></i>
                    تسجيل الدخول عبر Apple
                </NavLink>
            </div>
        </div>
        <p className="newlog">عضو جديد على LinkedIn؟ <NavLink to="/Signup">انضم الآن</NavLink></p>
</section>
<footer className='footerlog'>
    <div className="container-fluid">
    <div className="row">
        <div className="col-lg-12 col-md-12 d-lg-flex d-md-flex d-sm-none foot">
        <img src="./img/LinkedIn-Wordmark-Black-Logo.wine.svg" alt='img'/>
        <p>© 2022</p>
        <NavLink to="/">اتفاقية المستخدم</NavLink>
        <NavLink to="/">سياسة الخصوصية</NavLink>
        <NavLink to="/">إرشادات المجتمع</NavLink>
        <NavLink to="/">سياسة ملفات تعريف الارتباط</NavLink>
        <NavLink to="/">سياسة حقوق النشر</NavLink>
        <NavLink to="/">إرسال تقييم</NavLink>
        <NavLink to="/">
            اللغة
            <i className="fa-solid fa-angle-down"></i>
        </NavLink>
        </div>
    </div>
    </div>
</footer>
        </div>
    )
}

export default Login