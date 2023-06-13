import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import '../AllCssFile/ComponentFolder.css'
import TopRightBlog from './TopRightBlog';
import DownRightBlogs from './DownRightBlog';
import Navbar from '../Router/Navbar';
import loadingimg from '../Assets/imgLoading.gif'


const LeftBlogs = () => {
  const [blog, setBlog] = useState([]);
  const [loder, setLoder] = useState(false);
  const [disply, setDisply] = useState(8);
  const params = useParams();

  var title = params.category;
  title = title.toUpperCase();

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
      <>
        <Navbar />
        <div className='MainBlog'>

          <div className='LeftSide'>
            <h1 id='text'>{title}</h1>
            {
              blog.map((item, index) => {
                if (index < disply) {
                  return (
                    <div key={index}>
                      <div className='article'>
                        <img className='LeftImg' src={item.urlToImage} alt='loading Image' />
                        <div className='text-headlines'>
                          <NavLink
                            style={(isActive) => { return { color: "orange", textDecoration: "none" } }}
                            to={"/category/" + index}
                            state={{ item }}>
                            <p className='title'>{item.title}</p>
                          </NavLink>
                          <p className='content'>{item.content.slice(0, 90)}</p>
                          <p className='published'>{item.publishedAt}</p>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
            <button className='btn' onClick={() => {
              setDisply(disply + 5)
            }}> ⬇ : Load More</button>
          </div>
          <div className='sibling'>
            <TopRightBlog   />
            <DownRightBlogs />
          </div>
        </div >
      </>
    )
  }
  else {
    return <img src={loadingimg} alt="" />
  }
}

export default LeftBlogs;

