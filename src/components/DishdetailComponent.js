import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishComments: null
        }
    }

    renderDish(dish) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments != null) {
            return comments.map((comment) => {
                return(
                    <li key={comment.id} className="list-unstyled">
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'})
                        .format(new Date(Date.parse(comment.date)))}</p>
                    </li>  
                );
            });
        } else {
            return <div></div>;
        }
    }
    
    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="row">
                    {this.renderDish(dish)}
                    
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default DishDetail;