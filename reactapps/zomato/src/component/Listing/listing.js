import React,{Component} from 'react';
import axios from 'axios';
import './listing.css'
import ListingDisplay from './listingDisplay';

const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class Listing extends Component{
    constructor(props){
        super(props);

        this.state={
            restaurantList:''
        };
    }

    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
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