import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listing';
import Details from './component/details/restDetails';
import ViewOrders from './component/bookings/viewOrder';
import PlaceOder from './component/bookings/placeOrder';


const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/listing/:mealId" component={Listing}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/viewBooking" component={ViewOrders}/>
                    <Route path="/placeOrder/:restName" component={PlaceOder}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router