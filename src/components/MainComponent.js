import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from "./MenuComponent";
import DISHES from "../shared/dishes"
import COMMENTS from "../shared/comments"
import LEADERS from "../shared/leaders"
import PROMOTIONS from "../shared/promotions"
import Dishdetail from './DishdetailComponent'
import Header from './HeadComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import About from './AboutComponent'

import {Switch,Route,Redirect} from 'react-router-dom'
import Contact from './ContactComponent'

class Main extends Component {
    constructor(props)
  {
    super(props)
    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    }
  }

  render() {

    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter(c=>c.featured)[0]}
        promotion={this.state.promotions.filter(c=>c.featured)[0]}
        leader={this.state.leaders.filter(c=>c.featured)[0]}
        />
      )
    }

    const DishWithId=({match})=>
    {
      return(
        <Dishdetail dish={this.state.dishes.filter(c=>c.id===parseInt(match.params.dishId,10))[0]}
        comments ={this.state.comments.filter(c=>c.dishId===parseInt(match.params.dishId,10))}
        />
      )
    }

    return (
    <div>
    <Header /> 
    <Switch>
      <Route path='/home' component={HomePage} />
      <Route path='/aboutus' component={()=><About leaders={this.state.leaders}/>} />
      <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes}/>} />
      <Route path='/menu/:dishId' component={DishWithId}/>
      <Route exact path='/contactus' component={Contact} />
      <Redirect to="/home" />
    </Switch>
    <Footer />
    </div>
    );
  }
}
 
export default Main;