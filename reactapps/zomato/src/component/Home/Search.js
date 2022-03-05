import React,{Component} from 'react';
import './Search.css';

const lurl = "https://zomatoajulypi.herokuapp.com/location";
const rurl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component {

    constructor(props){
        super(props);
        console.log("inside constructor>>>")
        this.state={
            location:'',
            restData:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option value={item.restaurant_id} key={item.restaurant_id}>
                    {item.restaurant_name} | {item.address}
                </option>
                )
            })
        }
    }

    handleCity = (event) => {
        let stateId = event.target.value;
        fetch(`${rurl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restData:data})
        })
    }


    render(){
        console.log("inside render>>>",this.state.location)
        return(
            <div className="search">
                <div id="logo">
                    <span>E!</span>
                </div>
                <div id="heading">
                    Find The Best Restaurants Near You
                </div>
                <div className="dropdown">
                        <select id="city" onChange={this.handleCity}>
                            <option>----SELECT CITY----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select className="restaurantSelect" id="hotels">
                            <option>----SELECT RESTAURANTS----</option>
                            {this.renderRest(this.state.restData)}
                        </select>
                </div>
            </div>
        )
    }

    //call api on page load 
    componentDidMount(){
        console.log("inside componentDidMount>>>")
        fetch(lurl,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Search