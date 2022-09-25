import React from 'react'
import { NavLink } from "react-router-dom";
import Centarhomepage from './Centarhomepage';
import Lefthomepage from './Lefthomepage';
import Rthomepage from './Rthomepage';

function Homepage() {
    return (
    <>
        <nav className='navhomepage'>

            <div className='leftnavhomepage'>
            <img src="img\icons8-linkedin-96.png" type="amazon" alt="amazon" />
            <input placeholder='ابحث' id='search'  />
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className='r-tnavhomepage'>
                <NavLink to='/' className='homer-tnav'>
                    <i class="fa fa-home" aria-hidden="true"></i>
                    الصفحة الرئيسيه
                </NavLink>
                <NavLink to='/'>
                    <i class="fas fa-people-carry    "></i>
                    شبكتي
                </NavLink>
                <NavLink to='/'>
                <i class="fa-solid fa-briefcase"></i>
                    وظائف   
                </NavLink>
                <NavLink to='/'>
                <i class="fa-solid fa-comment-dots"></i>
                    رسائل
                </NavLink>
                <NavLink to='/'>
                <i class="fa-solid fa-bell"></i>
                    اشعارات
                </NavLink>
                <NavLink to='/' className='photome'>
                <img src='img\photo.jpg' alt='me'/>
                <span>
                    انا
                    <i class="fa-solid fa-caret-down"></i>
                </span>
                </NavLink>
                <NavLink to='/' className='work'>
                <i class="fa-solid fa-bars"></i>
                    <span>
                        عمل
                        <i class="fa-solid fa-caret-down"></i>
                    </span>
                </NavLink>
                <NavLink to='/' className='Premium'>جرب Premium مجانًا</NavLink>
            </div>
            
        </nav>

        <div className='ab3compont'>
                    <Lefthomepage />
                    <Centarhomepage />
                    <Rthomepage />
        </div>
    </>
    )
}

export default Homepage