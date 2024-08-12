// eslint-disable-next-line no-unused-vars
import React from 'react';

import Header from './Pages/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/page/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Hot from './Pages/page/Hot/Hot';
// import StoryList from './Components/StoryList/StoryList';
import Page2 from './Pages/page/Page_Story/Page2/Page2';
import Page3 from './Pages/page/Page_Story/Page3/Page3';
import Page4 from './Pages/page/Page_Story/Page4/Page4';
import Page5 from './Pages/page/Page_Story/Page5/Page5';
import Footer from './Pages/Footer/Footer';
import Story_detail from './Components/Story_detail/Story_detail';
import Story_chapter from './Components/Story_chapter/Story_chapter';
import StorySearch from './Components/StorySearch/StorySearch';
const App = () => {
    return (
        <div className="app">
            <Header/> 
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/hot' element ={<Hot/>} />
                <Route path='/page-2' element={<Page2/>} />
                <Route path='/page-3' element={<Page3/>} />
                <Route path='/page-4' element={<Page4/>} />
                <Route path='/page-5' element={<Page5/>} />
                <Route path='/truyen-tranh/:slug' element={<Story_detail/>} />
                <Route path='/truyen-tranh/:slug/:chapter_name'element={<Story_chapter/>}/>
                <Route path='/tim-truyen' element={<StorySearch/>} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;

