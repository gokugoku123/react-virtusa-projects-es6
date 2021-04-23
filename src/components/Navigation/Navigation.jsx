import React from 'react';
import Component1 from './Component1/Component1';
import Component2 from './Component2/Component2';
import Header from './Header/Header';
import Route from './Route/Route';

const Navigation = ( props ) => {
    return ( 
        <>
            <h1>Navigation Component</h1>
            <div className="App">
                <Header />
                <h1 className="nav-style">App Component Works</h1>
                <Route path="/component1">
                    <Component1 />
                </Route>
                <Route path="/component2">
                    <Component2 />
                </Route>
            </div>
        </>
     );
}
 
export default Navigation;