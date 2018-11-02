import React from 'react';
import {Card,CardImg,CardText,CardTitle,CardBody} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Dishdetail = (props)=>{
    
        const {dish} = props;
        return ( 
            <React.Fragment>  
            {renderDish(dish)}

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

const renderDish=(dish)=>
    {
        if (dish!=null)
        {
            return(
            <React.Fragment>
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
            {renderComments(dish.comments)}
            </div>
            </React.Fragment>
            )
        }
        else{
            return(<div></div>)
        }
    }

 
export default Dishdetail;