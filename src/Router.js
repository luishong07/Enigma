import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App'
import LogIn from './LogIn'
import SignUp from './SignUp'

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/LogIn" component={LogIn}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/" component={App}/>

                </Switch>
            </BrowserRouter>
        )
    }
}
export default Router