import React from 'react'
import { NavLink } from "react-router-dom";

function Lefthomepage() {
    return (
        <div className='lefthomepage'>

        <div className='row'>
        <div className='col-md-4'>
            <div className='leftmom'>
                    <div className='dev1'>
                        <div className='imge1'>
                            <img src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" alt="" />
                        </div>
                        <div className='devphoto'>
                            <img src='img\photo.jpg' alt="" />
                            <NavLink to='/' className='myname'>Islam Abdelradi</NavLink>
                            <p>Blogger at WordPress</p>
                        </div>
                        <div className='two'>
                            <div className='two2'>
                            
                            <div>
                                <p className='ppnum5'>5</p>
                            </div>
                            <div>
                                <p className='twop1'>روابط</p>
                                <p className='pp1'>تنمو شبكتك</p>
                            </div>
                            </div>
                        </div>
                        <div className='three'>
                        <p className='threep1'>الوصول إلى الأدوات والأفكار الحصرية</p>
                        <p className='pp2'>
                        جرب Premium مجانًا 
                        <img src='img\a.png' type="img" alt='img' />
                        </p>
                        </div>
                        <div className='four'>
                            <p>
                                My items
                                <i class="fa-solid fa-bookmark"></i>
                            </p>
                        </div>
                    </div>
                    <div className='dev2'>
                            <NavLink to='/' className='a1'>
                                جروبات
                                </NavLink>
                        <div className='three-btm'>
                        <div className='icon-left'>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div className='p-left'>
                                <NavLink to='/' className='a2'>
                                الأحداث
                                </NavLink>
                            </div>

                        </div>
                            <NavLink to='/'  className='a3'>الهشتاج التي تم متابعتها</NavLink>
                            <div className='btm'>
                                <NavLink to='/'>إكتشف أكثر</NavLink>
                            </div>
                    </div>
                </div>
        </div>
        </div>
        </div>
    )
}

export default Lefthomepage