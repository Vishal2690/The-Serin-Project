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
           <p>  <img className='staticImgFirst' src="https://iso.500px.com/wp-content/uploads/2014/12/fineart_cover.jpg" alt="loading Image" /></p>
          </div>
          <div className='secondStatic'>
            <img className='staticImgsecond' src="https://thumbs.dreamstime.com/b/spaceman-his-mission-mixed-media-astronaut-holding-earth-planet-palm-elements-image-furnished-nasa-131360957.jpg" alt="" />
            <img className='staticImgsecond' src="https://st4.depositphotos.com/1000423/22078/i/600/depositphotos_220782354-stock-photo-spaceman-steal-planet-mixed-media.jpg" alt="" />
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