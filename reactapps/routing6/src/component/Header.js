import React from 'react';
import {Outlet,Link} from 'react-router-dom'
import Footer from './Footer';


function Header(props){
    return(
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">             
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/post">Post</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
             <Outlet/>
            </div>
            <Footer/>
            <hr/>
        </>
    )
}

export default Header