import React from 'react'
import { NavLink } from 'react-router-dom'


function Not404() {
    return (
        <div>
            <nav>
                <div className='not404left'>
                    <img src='img\Linkedin-Logo-2011-2019.png'alt='logo'/>
                </div>
                    <div className='not404r-t'>
                        <div class="input-group">
                            <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>العربية (Arabic)</option>
                                <option value="en-US">English (English)</option>
                                <option value="fr-FR">Français (French)</option>
                                <option value="de-DE">Deutsch (German)</option>
                            </select>
                        </div>
                    </div>
            </nav>
            <section className='sec404'>
                <div className='container '>
                    <div className='row'>
                        <div className='text-center dev11'>
                        <h1>الصفحة غير موجودة</h1>
                        <p>عذرًا ، يبدو أننا لا نستطيع العثور على الصفحة التي تبحث عنها. حاول الرجوع إلى الصفحة السابقة أو راجع مركز المساعدة للحصول على مزيد من المعلومات</p>
                        <NavLink to='/'>اذهب إلى خلاصتك</NavLink>
                        <img src='img/down404.png' alt='down404'/>
                        </div>
                    </div>
                </div>
                {/* <img src='img\down404.png' alt='down404'/> */}
            </section>
        </div>
    )
}

export default Not404