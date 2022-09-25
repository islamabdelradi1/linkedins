import React from 'react'
import { NavLink } from "react-router-dom";

function Rthomepage() {
    return (
        <div className='rthomepage'>

        <div className='row'>

        <div className='col-md-4'>
                            <div className='r-tmom'>
                    <div className='r-t'>
                        <div className='one-r-t'>
                            <i class="fa-solid fa-circle-info"></i>
                            <h6>أضف إلى خلاصتك</h6>
                        </div>
                        <div className='People'>
                            <div className='onepeople'>

                                <div className='title'>
                                    <h6>Amazon</h6>
                                    <p>Company • Internet</p>
                                    <NavLink to='/'>
                                    <i class="fa-solid fa-plus"></i>
                                        متابعة  
                                    </NavLink>
                                </div>
                                <div className='img'>
                                    <img src='img\amazon.jpg' type="amazon" alt="amazon"></img>
                                </div>
                            </div>
                            <div className='onepeople'>

                                <div className='title'>
                                    <h6>LinkedIn</h6>
                                    <p>Company • Internet</p>
                                    <NavLink to='/'>
                                    <i class="fa-solid fa-plus"></i>
                                        متابعة
                                    </NavLink>
                                </div>
                                <div className='img'>
                                    <img src='img\linked.jpg' type="amazon" alt="amazon"></img>
                                </div>
                            </div>
                            <div className='onepeople'>

                                <div className='title'>
                                    <h6>Google</h6>
                                    <p>Company • Internet</p>
                                    <NavLink to='/'>
                                    <i class="fa-solid fa-plus"></i>
                                        متابعة  
                                    </NavLink>
                                </div>
                                <div className='img'>
                                    <img src='img\goo.jpg' type="amazon" alt="amazon"></img>
                                </div>
                            </div>
                            <NavLink to='/' className='vewallpepole'>
                                <i class="fa-solid fa-arrow-right-long"></i>
                                عرض كل التوصيات

                                </NavLink>
                        </div>
                    </div>
                    <div className='r-two'>
                        <NavLink to='/' className='ads'>
                        <i class="fa-solid fa-ellipsis"></i>
                            اعلان
                        </NavLink>
                        <p className='pp1'>دراسة حالة: IFS تخفض CPL بنسبة 33٪ مع ABM على LinkedIn</p>
                        <div className='rtimg'>
                            <img src='img\photo.jpg' type="amazon" alt="amazon" className='me'></img>
                            <img src='img\icons8-linkedin-96.png' type="amazon" alt="amazon"></img>
                        </div>
                        <h3>Islam اختر النصائح لحملة ABM الخاصة بك</h3>
                        <NavLink to='/' className='btnrtwo'>اقرأ دراسة الحالة</NavLink>
                    </div>
                    <div className='allnavmom'>
                    <div className='allnav'>
                        <NavLink to='/'>About</NavLink>
                        <NavLink to='/'>Accessibility</NavLink>
                        <NavLink to='/'>Help Center</NavLink>
                        <NavLink to='/' className='Privacy'>
                            Privacy & Terms
                        <i class="fa-solid fa-angle-down"></i>
                        </NavLink>
                        <NavLink to='/'>Ad Choices</NavLink>
                        <NavLink to='/'>Advertising</NavLink>
                        <NavLink to='/' className='Privacy'>
                            Business Services
                        <i class="fa-solid fa-angle-down"></i>
                        </NavLink>
                        <NavLink to='/'>Get the LinkedIn app</NavLink>
                        <NavLink to='/'>More</NavLink>
            <div className='logofotter'>
                <p>LinkedIn Corporation © 2022</p>
                <img src='img\linkedIn_PNG30.png' type='logo' alt='logo' />

            </div>
                    </div>
                    </div>
                    
                </div>
        </div>
        </div>
        </div>
    )
}

export default Rthomepage