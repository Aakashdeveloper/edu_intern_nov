import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';

const url = "http://localhost:6700/orders";


class ViewOrder extends Component{
    constructor(props){
        super(props);

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //
    componentDidMount(){
        axios.get(`${url}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;