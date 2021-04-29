import React from 'react'
// import Contact from "../Contact/Contact"
// import SignIn from "../SignIn/SignIn"
import Homepage from "./pages/Homepage"
import {Switch,Route} from "react-router-dom"
import UserDetails from "./pages/userDetails"
function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/user/:id" component={UserDetails}/>
       
      </Switch>
    </div>
  )
}

export default Router