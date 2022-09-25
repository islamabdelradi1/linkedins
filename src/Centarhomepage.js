import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';


function Centarhomepage() {
        const [blogs,setblogs]=useState([]);
        const [inputs,setinputs]=useState("");
        
        // const [likes,setlike]=useState(0);
        // const [liked,setliked]=useState(false);
        // const like = () => { 
        //     if (liked === false) {
        //         setlike(e => (e += 1))
        //         setliked(true)
        //     }else{
        //         setlike(e => (e -= 1))
        //         setliked(false)
        //     }
        // }

//     useEffect(()=>{
//         setTimeout(()=>{
//             axios.get("https://gorest.co.in/public/v2/posts").then(res => {
//                 setblogs(res.data);
//                 console.log(blogs);
//         }).catch(err=>{console.log(err);})
    
//         },1000)
    
// }, []);
    return (
        <div className='centhomepage'>
        <div className='row'>
        <div className='col-md-4 col-sm-12'>
            <div className='centar'>
                        <div className='post'>
                            <div className='post1'>
                            <img src='img\photo.jpg' type='photome' alt='photome' />
                                <input value={inputs} name="inputs" onChange={e => setinputs(e.target.value)} />
                            </div>
                            <div className='icons4btnpost'>
                                <NavLink to='/'>
                                <i className="fa-solid fa-image"></i>
                                    صور
                                </NavLink>
                                <NavLink to='/'>
                                <i className="fa-brands fa-youtube"></i>
                                    فيديو   
                                </NavLink>

                                <NavLink to='/'>
                                <i className="fa-solid fa-calendar-days"></i>
                                    أحداث
                                </NavLink>
                                <NavLink  to='/'>
                                <i className="fa-solid fa-pen-to-square"></i>
                                اكتب مقالاً
                                </NavLink>
                            </div>
                        </div>
                        
            </div>
            <div className='postall'>
                {blogs && blogs.map((blog)=>(
                    <div className='Posts' key={blog.id}>
                                    <div className='Post-top'>
                                        <div className='post-r-t'>
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </div>
                                        
        
                                    <div className='post-left'>
                                            <div className='whoprofilepost'>
                                            <h6>Wordpress {blog.id} </h6>
                                            <p>112,219 متابع</p>
                                            <p>
                                            <i className="fa-solid fa-earth-americas"></i>
                                            . 1يوم 
                                            </p>
                                            </div>
                                            <img src='img\wordpress.jpg' alt='img-prof'/>
                                    </div>
                                    </div>
                                        <div className='postcontint'>
                                            <p>{blog.body}</p>
                                        <div className='postvideo'>
                                            <video src="https://dms.licdn.com/playlist/C5605AQEvGKF5LGrNaQ/mp4-720p-30fp-crf28/0/1654617132280?e=1655593200&v=beta&t=BlMKprndY-86HTDQTyMC1sawQNLJASnrUWJskO8UvYM"  autoPlay="autoplay"/>
                                        </div>
                                    </div>
                                    <div className='Wholikes'>
                            
                            <div className='rtwho'>
                                <p>1 comment . 1 shares</p>
                            </div>
                            <div className='leftwho'>
                                <p>1</p>
                                <i className="fa-solid fa-thumbs-up"></i>
                            </div>
                            </div>
                            <div className='iconspost'>
                            <NavLink to='#/'>
                                ارسال
                                <i className="fa-solid fa-paper-plane"></i>
                            </NavLink>
                            <NavLink to='#/' >
                                مشاركه
                                <i className="fa-solid fa-share"></i>
                            </NavLink>
                            <NavLink to='#/' >
                                كومنت
                                <i className="fa-solid fa-comment-dots"></i>
                            </NavLink>
                            <NavLink className='btnlike'>
                                لايك
                                <i className="fa-solid fa-thumbs-up"></i>
                            </NavLink>
                            </div>
                    </div>
                ))}
                            
            </div>
                        
            </div>
        </div>
        </div>
        
    )
}

export default Centarhomepage