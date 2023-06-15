import React, { useEffect, useState } from 'react'
import jarvis from '../Assets/Jarvis.png'
import '../AllCssFile/ComponentFolder.css'
import { NavLink, useNavigate } from 'react-router-dom';

const MoreFromSerin = () => {
    const [blog, setBlog] = useState();
    const [loader, setLoader] = useState(false);

    const nav = useNavigate();
    console.log(nav)

    useEffect(() => {
        var url = "https://anotherserin-jsonby-vishal.onrender.com/top-article";
        let req = new Request(url);
        fetch(req).then((response) => {
            response.json().then((blog) => {
                setBlog(blog);
                setLoader(true)
            })
        })
    }, [])
    if (loader) {
        return (
            <>
                <button className='goBackHome' onClick={() => {
                   nav (-1)
                }}>⬅ : GoBack Home</button>
                <div className='three-slices'>
                    <h2>More From Serin</h2>
                    <div id='morefromserin' >
                        {
                            blog.slice(81, 89).map((item, index) => {
                                return (
                                    <div className='containerOfserin' key={index}>
                                        <img src={item.urlToImage} alt="" />
                                        <NavLink
                                            style={(isActive) => { return { color: "orange", textDecoration: "none" } }}
                                            to={"/category/" + index}
                                            state={{ item }}>
                                            <p className='title'>{item.title}</p>
                                        </NavLink>
                                        <div className='profile2'>
                                            <img src={jarvis} alt="" />
                                            <span className='profiletext'>
                                                <p>{item.author}</p>
                                                <p id='makesmall'>Jan 28, 2019 · 10 min read</p>
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </>
        )
    }
}

export default MoreFromSerin