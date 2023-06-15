import React from 'react'
import { useLocation } from 'react-router-dom'
import jarvis from '../Assets/Jarvis.png'
import twitter from '../Assets/twitter.png'
import youtube from '../Assets/youtube.png'
import facebook from '../Assets/facebook.png'
import insta from '../Assets/insta.png'
import claps from '../Assets/claps.svg'
import share from '../Assets/share.gif'
import MoreFromSerin from './MoreFromSerin'
import '../AllCssFile/ComponentFolder.css'


const CollectedBlogPage = () => {
    const location = useLocation();
    const item = location.state.item;


    return (
        <div>
            {/*NavBar for CollectedBlogPage */}
            <div className='articleNav'>
                <div className='Mainhead'>
                    <div className='the'>The</div>
                    <h1 className='head'>Serin</h1>
                </div>
                <button className='getStart-btn'>Get Started</button>
            </div>
            <div className='collectMain'>
                {/*Data Come From h,b,h,t,f,f component for CollectedBlogPage component  */}
                <div className='displaydata'>
                    <h2>{item.title}</h2>
                    <div className='smallflex'>
                        <span className='profile'>
                            <img src={jarvis} alt="" />
                            <span className='profiletext'>
                                <p>Vishal Chaudhari</p>
                                <p id='makesmall'>Jan 28, 2019 · 10 min read</p>
                            </span>
                        </span>
                        <span className='apps'>
                            <img src={facebook} />
                            <img src={insta} />
                            <img src={twitter} />
                            <img src={youtube} />
                        </span>
                    </div>
                    <img className='InsideImg' src={item.urlToImage} alt="" />
                    <div className='double'>
                        <p className='Insidecontent'>{item.content}</p>
                        <p className='Insidedescrip'>{item.description}</p>
                    </div>
                    <div id='allInOne'>
                        <div id='threebox'>
                            <p className='threebox'>{item.source.name}</p>
                            <p className='threebox'>{item.author}</p>
                            <p className='threebox'>{item.publishedAt}</p>
                        </div>
                        <div id='claps'>
                            <img src={claps} alt="image" />
                            <p>9.7k claps</p>
                        </div>
                        <div id='writtenBybox'>
                            <p>Written By</p>
                            <div className='profile'>
                                <img src={jarvis} alt="" />
                                <div className='profiletext'>
                                    <p>Vishal Chaudhari</p>
                                    <p id='makesmall'>Jan 28, 2019 · 10 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='moreF'>
                    <MoreFromSerin />
                </div>

                <div id='someShareClapIcon'>
                    <div className='icontext'>
                        <img src={claps} alt="image" />
                        <p>100.2k</p>
                    </div>
                    <div className='icontext'>
                        <img src={share} alt="" />
                        <p>Share this article</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CollectedBlogPage