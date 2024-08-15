// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

import Header from './Pages/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/page/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Hot from './Pages/page/Hot/Hot';

import Page2 from './Pages/page/Page_Story/Page2/Page2';
import Page3 from './Pages/page/Page_Story/Page3/Page3';
import Page4 from './Pages/page/Page_Story/Page4/Page4';
import Page5 from './Pages/page/Page_Story/Page5/Page5';
import Footer from './Pages/Footer/Footer';
import Story_detail from './Components/Story_detail/Story_detail';
import Story_chapter from './Components/Story_chapter/Story_chapter';
import StorySearch from './Components/StorySearch/StorySearch';
import Login from './Components/Login/Login';

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import 'react-toastify/dist/ReactToastify.css';
import History from './Components/History/History';
import Top_WeekStory from './Components/Top_WeekStory/Top_WeekStory';
import Top_DayStory from './Components/Top_DayStory/Top_DayStory';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate('/')
      } else {
        console.log("Logged Out");
        navigate('/login');

      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/hot' element={<Hot />} />
        <Route path='/page-2' element={<Page2 />} />
        <Route path='/page-3' element={<Page3 />} />
        <Route path='/page-4' element={<Page4 />} />
        <Route path='/page-5' element={<Page5 />} />
        <Route path='/truyen-tranh/:slug' element={<Story_detail />} />
        <Route path='/truyen-tranh/:slug/chuong/:chapter_name' element={<Story_chapter />} />
        <Route path='/tim-truyen' element={<StorySearch />} />
        <Route path='/login' element={<Login />} />
        <Route path='/history' element={<History />} />
        <Route path='/top-2' element={<Top_WeekStory/>}/>
        <Route path='/top-3' element={<Top_DayStory/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

