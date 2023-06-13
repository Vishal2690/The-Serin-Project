import React from 'react'
import LatestArticlesForHomeCompo from './LatestArticlesForHomeCompo'
import Navbar from '../Router/Navbar'
import "../AllCssFile/Home.css"
import youtube from '../Assets/youtube.png'
import insta from '../Assets/insta.png'
import twitter from '../Assets/twitter.png'
import facebook from '../Assets/facebook.png'



const Home = () => {

  return (
    <>
      <Navbar />
      <div id='home-container'>
        <div className='staticImg-container'>
          <div className='firstStatic'>
           <p>  <img className='staticImgFirst' src="https://imageio.forbes.com/specials-images/imageserve/637b1d11729a96ce28ea598c/0x0.jpg?format=jpg&width=1200" alt="loading Image" /></p>
          </div>
          <div className='secondStatic'>
            <img className='staticImgsecond' src="https://www.esriuk.com/content/dam/distributor-restricted/esriuk-com/digital-twin/digital-twin-banner-foreground.png" alt="" />
            <img className='staticImgsecond' src="https://cdn.typestack.ai/images/bc62305b6cff49d43aed5f6550716c89890a3ccc/blog/images/9e0f3adb-19be-4295-9a1a-4b4c86c75c9f.png" alt="" />
          </div>
        </div>
        <div className=''>
          <LatestArticlesForHomeCompo />
        </div>
        <footer className='footer'>
          <span className='footer-apps'>
            <a href="https://www.facebook.com/facebook/"><img src={facebook} /></a>
            <a href="https://www.instagram.com/instahomme/?hl=en"><img src={insta} /></a>
            <a href="https://twitter.com/?logout=1686566533352"><img src={twitter} /></a>
            <a href="https://www.youtube.com/"><img src={youtube} /></a>
          </span>
        </footer>
      </div>
    </>
  )

}

export default Home