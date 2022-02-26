import React from 'react';
import './product.css';

const Product = (props) =>{
    console.log("in products>>>",props)

    const renderProduct = props.prodData.map((data,index) => {
        return(
            <div className="card" key={index}>
                <img src={data.image} alt={data.name}/>
                <hr/>
                <div>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                    <p>Rs. {data.cost}</p>
                </div>
            </div>
        )
    })

    // console.log(">>",renderProduct)
    return(
        <>
            <div className="main">
               {renderProduct}
            </div>
        </>
    )
}


export default Product