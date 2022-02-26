import React,{Fragment,Component} from 'react';
import './Header.css';

class Header extends Component{

    constructor(){
       super()

       this.state={
           title:'React Developer',
           keywords:'User text Here'
       }
    }

    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({keywords:event.target.value?event.target.value:'User text Here'})
        this.props.userInput(event.target.value);
    }

    render(){
        console.log(">>>inside render>>>>>>")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'20px'}}>{this.state.keywords}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        ) 
    }
}


export default Header