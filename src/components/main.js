import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Blog from './blog2';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog2" component={Blog} />
    </Switch>
)

export default Main;