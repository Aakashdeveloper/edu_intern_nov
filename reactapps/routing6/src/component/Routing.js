import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';
import Header from './Header';

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                        <Route path="home" element={<Home/>}></Route>
                        <Route path="post" element={<Post/>}></Route>
                        <Route path="post/:topic" element={<PostDetails/>}></Route>
                        <Route path="profile" element={<Profile/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing