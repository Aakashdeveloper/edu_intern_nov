import React,{Fragment,Component} from 'react';
import './ProductDisplay.css';

class Product extends Component{

    render(){
        return(
            <Fragment>
                <div style={{display: 'inline-block'}}>
                    <div class="card">
                        <h1 class="cardHeading">Amsterdam</h1>
                        <img src="images/amsterdam.jpeg" alt="amsterdam" class="cardImage"/>
                        <p style={{color:'white'}}>
                            <b>Amsterdam</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </p> 
                    </div>
                    
                </div>
            </Fragment>
        ) 
    }
}


export default Product