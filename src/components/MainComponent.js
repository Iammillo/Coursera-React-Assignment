import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from "./MenuComponent";
import Dishdetail from './DishdetailComponent'
import Header from './HeadComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import About from './AboutComponent'
import Contact from './ContactComponent'

import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {postComment,fetchDishes,fetchComments,fetchPromos,fetchLeaders,postFeedback} from '../redux/ActionCreators'
import {actions } from 'react-redux-form'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

 const mapStateToProps = state=>
{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

const mapDispatchToProps = (dispatch)=>
{
  return (
    {
      postComment:(dishId,rating,author,comment)=>dispatch(postComment(dishId,rating,author,comment)),
      fetchDishes:()=>{dispatch(fetchDishes())},
      resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))},
      fetchComments:()=>{dispatch(fetchComments())},
      fetchPromos:()=>{dispatch(fetchPromos())},
      fetchLeaders:()=>{dispatch(fetchLeaders())},
      postFeedback:(values)=>postFeedback(values),
    }
  )
}



class Main extends Component {

  componentDidMount()
  {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.dishes.filter(c=>c.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess = {this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter(c=>c.featured)[0]}
        promosLoading={this.props.promotions.isLoading}
        promosErrMess = {this.props.promotions.errMess}
        leader={this.props.leaders.leaders.filter(c=>c.featured)[0]}
        leadersLoading={this.props.leaders.isLoading}
        leadersErrMess = {this.props.leaders.errMess}
        />
        
      )
    }

    const DishWithId=({match})=>
    {

      return(
        <Dishdetail dish={this.props.dishes.dishes.filter(c=>c.id===parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMess = {this.props.dishes.errMess}
        comments ={this.props.comments.comments.filter(c=>c.dishId===parseInt(match.params.dishId,10))}
        commentsErrMess = {this.props.comments.errMess}
        postComment={this.props.postComment}
        />
      )
    }

    return (
    <div>
    <Header />
    <TransitionGroup > 
      <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' component={()=><About leaders={this.props.leaders.leaders}/>} />
          <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes}/>} />
          <Route path='/menu/:dishId' component={DishWithId}/>
          <Route exact path='/contactus' component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
          <Redirect to="/home" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    <Footer />
    </div>
    );
  }
}
 
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));