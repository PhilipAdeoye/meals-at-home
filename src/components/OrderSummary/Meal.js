import React, { Component } from 'react';
import MealDetails from '../MealDetails';

import '../../css/OrderSummaryMeal.css';

class Meal extends Component {

    viewDetails = () => {
        this.props.showMealDetails(<MealDetails {...this.props} />)
    }
    
    render() {
        const {imgSrc, name, count} = this.props;

        return (
            <div className="OrderSummaryMeal">
                <img className="OrderSummaryMeal__img"
                    src={imgSrc} 
                    alt={name} 
                    onClick={this.viewDetails} />
                    
                <div className="OrderSummaryMeal__details">
                    <span className="OrderSummaryMeal__details__name">{name}</span>
                    <span className="OrderSummaryMeal__details__count">x{count}</span>
                </div>
            </div>
        );
    }
}

export default Meal;