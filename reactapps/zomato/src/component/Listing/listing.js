import React,{Component} from 'react';
import axios from 'axios';
import './listing.css'
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
import SortFilter from '../filters/sortFilter';
import Header from '../../header';

const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class Listing extends Component{
    constructor(props){
        super(props);

        this.state={
            restaurantList:''
        };
    }

    setDataPerFilter = (data) => {
        this.setState({restaurantList:data})
    }

    render(){
        return(
            <>
                <Header/>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
                            <CuisineFilter mealId={this.props.match.params.mealId}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <CostFilter  mealId={this.props.match.params.mealId}
                            restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <SortFilter mealId={this.props.match.params.mealId}
                            restPerSort={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                        </div>
                        <ListingDisplay listData={this.state.restaurantList}/>
                    </div>
                </div>
            </>
        )
    }

    ///
    componentDidMount(){
        let mealid = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealid)
        axios.get(`${restUrl}${mealid}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }
}

export default Listing