import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductMain from '../Products/ProductMain';
import ClientsMain from '../Clients/ClientsMain';
import OrdersMain from '../Orders/OrdersMain';

const Main = () => {
    return (
        <div className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
            <Switch>
                <Route exact path='/products' use component={ProductMain} />
                <Route exact path='/clients' use component={ClientsMain} />
                <Route exact path='/orders' use component={OrdersMain} />
            </Switch>
        </div>
    )
}

export default Main
