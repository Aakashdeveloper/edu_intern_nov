import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/filter";

class SortFilter extends Component {

    filterCuisine = (event) => {
        let cuisineId = event.target.value;
        let mealId = this.props.mealId
        let cuisineUrl = ""
        if(cuisineId === ""){
            cuisineUrl = `${url}/${mealId}`
        }else{
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerSort(res.data)})

    }
    render(){
        return(
            <>
                <center>Sort Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCuisine}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>Low To High
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>High To Low
                    </label>
                </div>
            </>
        )
    }
}


export default SortFilter