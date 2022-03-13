import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listing';
import Details from './component/details/restDetails';
import ViewOrders from './component/bookings/viewOrder';
import PlaceOder from './component/bookings/placeOrder';
import Login from './component/login/login';
import Register from './component/login/register'


const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:mealId" component={Listing}/>
                <Route path="/details" component={Details}/>
                <Route path="/viewBooking" component={ViewOrders}/>
                <Route path="/placeOrder/:restName" component={PlaceOder}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router