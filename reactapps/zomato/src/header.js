import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
class Header extends Component{

    render(){
        return(
            <div className="header">
                <div id="brand">
                    Developer Food
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div id="social">
                    <Link className="btn btn-primary" to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
                    &nbsp;
                    <Link className="btn btn-success" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link>
               
                </div>
            </div>
        )
    }
}


export default Header;