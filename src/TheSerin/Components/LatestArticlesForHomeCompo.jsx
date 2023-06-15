import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import loading from '../Assets/imgLoading.gif'



const LatestArticlesForHomeCompo = () => {
  const [blog, setBlog] = useState();
  const [loader, setLoader] = useState(false);
  const [showImage, setShowImage] = useState(false);


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

  //Show the extra image onClick
  const showImageFun = () => {
    setShowImage(!showImage);
  }

  if (loader) {
    return (
      <>
        <h3 id='text'>The Latest</h3>
        <div className='the-latest-container'>
          {
            blog.map((item, index) => {
              if (index > 35 && index < 44)
                return (
                  <div key={index}>
                    <div className='three-container'>
                      <img className='latestImg' src={item.urlToImage} alt="" />
                      <NavLink
                        style={(isActive) => { return { color: "orange", textDecoration: "none" } }}
                        to={"/category/" + index}
                        state={{ item }}
                      >
                        <h2>{item.title.slice(0, 33)}</h2>
                      </NavLink>
                      <h4>{item.content}</h4>
                      <p>{item.publishedAt}</p>
                    </div>
                  </div>
                )
            })
          }
        </div>

        <h2 id='text' className='atext'>Latest Articles</h2>
        <div id='mainArticles'>
          <div className='Article-container'>
            {
              blog.slice(61, 66).map((item, index) => {
                return (
                  <div key={index}>
                    <div id='four-slices'>
                      <img src={item.urlToImage} alt="" />
                      <div className='four-text'>
                        <NavLink
                          style={(isActive) => { return { color: "orange", textDecoration: "none" } }}
                          to={"/category/" + index}
                          state={{ item }}
                        >
                          <h2>{item.title.slice(0, 33)}</h2>
                        </NavLink>
                        <p>{item.content.slice(0, 100)}</p>
                        <h6>{item.publishedAt}</h6>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <button className='btn' onClick={showImageFun}>
              ⬇ : Load More
            </button>
            {showImage ? (<img className='showImg' src={"https://assets-in.bmscdn.com/discovery-catalog/events/et00329656-smxlbspzyc-landscape.jpg"} alt="loading Image" />) : null}
          </div>
          <div>
            <div className='home-topPost'>
              <div id='add'>
                <a href="https://www.netflix.com/in/browse/genre/5480"> <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--WXQjOiZB--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/j98mazut413f3f5gxeow.png" alt="" /></a>
              </div>
              <h1 id='text'>Top Post</h1>
              {
                blog.slice(66, 67).map((item, index) => {
                  return (
                    <div key={index} className='hole-topPost'>
                      <img className='toppostImg' src={item.urlToImage} alt="" />
                      <NavLink
                        style={(isActive) => { return { color: "orange", textDecoration: "none" } }}
                        to={"/category/" + index}
                        state={{ item }}
                      >
                        <h3>{item.title.slice(0, 33)}</h3>
                      </NavLink>
                      <h6>{item.publishedAt}</h6>
                    </div>
                  )
                })
              }
            </div>
            <div className=''>
              {
                blog.slice(67, 70).map((item, index) => {
                  return (
                    <div key={index} className='down-topPost'>
                      <img className='downpostImg' src={item.urlToImage} alt="" />
                      <div className='dotext'>
                        <NavLink
                          style={(isActive) => { return { color: "orange", textDecoration: "none" } }}
                          to={"/category/" + index}
                          state={{ item }}
                        >
                          <h4>{item.title.slice(0, 33)}</h4>
                        </NavLink>
                        <h6>{item.publishedAt}</h6>
                      </div>
                    </div>
                  )
                }
                )}
            </div>
          </div>
        </div>
        <div className='Latest-Stories'>
          <h2 id='text' className='text'>Latest Stories</h2>
          <div className='the-latest-container'>
            {
              blog.map((item, index) => {
                if (index > 75 && index < 79)
                  return (
                    <div key={index}>
                      <div className='stories-container'>
                        <NavLink
                          style={(isActive) => { return { color: "black", textDecoration: "none" } }}
                          to={"/category/" + index}
                          state={{ item }}
                        >
                          <h2>{item.title.slice(0, 33)}</h2>
                        </NavLink>
                        <h5 className='storiesText'>{item.content}</h5>
                        <p>{item.publishedAt}</p>
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
  else {
    return <img src={loading} alt="" />
  }
}

export default LatestArticlesForHomeCompo;

