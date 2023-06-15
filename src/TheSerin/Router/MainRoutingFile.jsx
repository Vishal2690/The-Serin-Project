import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import '../AllCssFile/ComponentFolder.css'
import LeftBlogs from '../Components/LeftBlogs';
import ErrorPage404 from '../Components/ErrorPage404';
import CollectedBlogPage from '../Components/CollectedBlogPage';
import LatestArticlesForHomeCompo from '../Components/LatestArticlesForHomeCompo';




const MainRoutingFile = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/:category" element={<LeftBlogs />} />
                <Route path="/:category/:index" element={<CollectedBlogPage />} />   
                <Route path='/LatestArticlesForHomeCompo' element={<LatestArticlesForHomeCompo/>}/>
                <Route path='/*' element={<ErrorPage404/>}/>
            </Routes>

        </>
    )
}
export default MainRoutingFile;