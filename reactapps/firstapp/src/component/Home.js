import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './ProductDisplay'

class Home extends Component {
    render(){
        return(
            <>
                <Header/>
                <Product/>
                <Footer/>
            </>
        )
    }
}

export default Home;
