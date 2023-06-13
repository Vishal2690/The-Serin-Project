import React, { useEffect, useState } from 'react'
import {NavLink, useParams } from 'react-router-dom';
import '../AllCssFile/ComponentFolder.css'
import loadingimg from '../Assets/imgLoading.gif'

const DownRightBlogs = () => {
    const [blog, setBlog] = useState();
    const [loder, setLoder] = useState(false);
    const params = useParams();

    useEffect(() => {
        var url = "https://theserin-projectby-vishal.onrender.com/" + params.category;
        let req = new Request(url);
        fetch(req).then((response) => {
            response.json().then((blog) => {
                setBlog(blog);
                setLoder(true);
            })
        })
    }, [params])

    if (loder) {
        return (
            <div className='DownRightSide'>
                {
                    blog.map((item, index) => {
                        if (index > 95) {
                            return (
                                <div className='DownRightarticle' key={index}>
                                    <img
                                        className='DownRightImg'
                                        src={item.urlToImage}
                                        alt="Image Loading" />
                                    <div className='Downright-headlines'>
                                        <NavLink
                                            style={(isActive) => { return { color: "orange", textDecoration: "none" } }}
                                            to={"/category/" + index}
                                            state={{ item }}>
                                            <p className='title'>{item.title.slice(0, 40)}</p>
                                        </NavLink>
                                        <p className='publishedAt'>{item.publishedAt}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                <div className='advertisement'>
                    <a href="https://www.netflix.com/in/browse/genre/5480"> <img className='add' src="https://res.cloudinary.com/practicaldev/image/fetch/s--WXQjOiZB--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/j98mazut413f3f5gxeow.png" alt="" /></a>
                </div>
            </div>
        )
    }
    else {
        return <img src={loadingimg} alt="" />
    }
}

export default DownRightBlogs;


