import React from 'react';

function Footer(props){
    console.log("in footer>>>",props)
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel {props.year}</h3>
            </center>
        </React.Fragment>
    )
}

export default Footer