import React, { useEffect, useState } from 'react'
import {  NavLink, useParams } from 'react-router-dom';
import '../AllCssFile/ComponentFolder.css'
import loadingimg from '../Assets/imgLoading.gif'

const TopRightBlog = () => {
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
            <div className='topRightSide'>
                <h1 id='text'>TOP POSTS</h1>
                {
                    blog.map((item, index) => {
                        if (index == 95) {
                            return (
                                <div className='topRightarticle' key={index}>
                                    <img
                                        className='topRightImg'
                                        src={item.urlToImage}
                                        alt="Image Loading" />
                                    <div className='topright-headlines'>
                                        <NavLink
                                            style={(isActive) => { return { color: "orange", textDecoration: "none" } }}
                                            to={"/category/" + index}
                                            state={{ item }}>
                                            <p className='title'>{item.title}</p>
                                        </NavLink>
                                        <p className='pusblishIt'>{item.publishedAt}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
            </div>
        )
    }
    else {
        return <img src={loadingimg} alt="" />
    }
}

export default TopRightBlog;


