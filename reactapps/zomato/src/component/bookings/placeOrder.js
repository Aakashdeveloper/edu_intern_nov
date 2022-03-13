import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../../header';

const url = "http://zomatoajulypi.herokuapp.com/menuItem";
const postData = "http://localhost:6700/orders"


class PlaceOrder extends Component{
    constructor(props){
        super(props);

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'Aakash',
            email:'aakash@gmail.com',
            cost:0,
            phone:'6543758569',
            address:'Hno 28',
            menuItem:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(postData,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewBooking'))
    }
    
    renderMenu = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }
    

    render(){
        console.log(this.state)
        return(
            <>
                <Header/>
                <div className="container">
                    <hr/>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Your Order from Restaurant {this.props.match.params.restName} </h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="fname">Name</label>
                                    <input id="fname" name="name" className="form-control"
                                    value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input id="email" name="email" className="form-control"
                                    value={this.state.email}  onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="phone">Phone</label>
                                    <input id="phone" name="phone" className="form-control"
                                    value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="address">Address</label>
                                    <input id="address" name="address" className="form-control"
                                    value={this.state.address}  onChange={this.handleChange}/>
                                </div>
                            </div>
                            {this.renderMenu(this.state.menuItem)}
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Price is Rs.{this.state.cost}</h2>
                                </div> 
                            </div>
                            <button className="btn btn-success" onClick={this.checkout}>Submit</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu')
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.map((item) => {
                totalPrice += parseFloat(item.menu_price)
                return 'ok'
            })
            this.setState({cost: totalPrice, menuItem:data})
        })
    }

}

export default PlaceOrder;