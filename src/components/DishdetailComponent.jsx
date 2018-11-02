import React from 'react';
import {Card,CardImg,CardText,CardTitle,CardBody,Breadcrumb,BreadcrumbItem} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'


const Dishdetail = (props)=>{
    
        const {dish,comments} = props;
        return ( 
            <React.Fragment>  
            {renderDish(dish,comments)}
            </React.Fragment>
        );    
}

function formatDate(date)
{
    const option = {year: 'numeric', month: 'short', day: 'numeric' };
    const date1 = new Date(date)
    const newdate = date1.toLocaleDateString("en-US", option)
    return newdate;

}


const renderComments =(comments) =>
    {

        if (comments!=null)
        {
            const com = comments.map(co=>{
                    
                    return(
                    <React.Fragment>
                    <li>{co.comment}</li><br />
                    <li>-- {co.author}, {formatDate(co.date)}</li><br />
                    </React.Fragment>
                )
                    
                }
                );
            return(
                <ul className="list-unstyled">
                {com}
                </ul>
            )
        }
        else{
            return(<div></div>)
        }
    }

const renderDish=(dish,comments)=>
    {
        if (dish!=null)
        {
            return(
            <div className="container">
             <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12 m-1">
            <h3>{dish.name}</h3>
            </div>
            </div>
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            <div className="col-12 col-md-5 m-1" >
            <h4>Comments</h4>
            {renderComments(comments)}
            </div>
            </div>
            </div >
            )
        }
        else{
            return(<div></div>)
        }
    }

 
export default Dishdetail;