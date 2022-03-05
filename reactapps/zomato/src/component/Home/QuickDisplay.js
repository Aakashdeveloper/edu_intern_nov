import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to="/">
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src={item.meal_image} alt="snacks"/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    <span>{item.mealtype}</span> 
                                </div>
                                <div class="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }

    }

    return(
        <>
            {listMeal(props)}
        </>
    )
}

export default QuickDisplay