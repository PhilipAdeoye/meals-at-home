import React, { Component } from 'react';
import MealGalleryItem from './MealGalleryItem';

import '../../css/MealsGallery.css';

class MealsGallery extends Component {

    render() {

        const { cartName, cartIsFull, addItemToCart, showMealDetails } = this.props;

        return (

            <div className="MealsGallery">
                {
                    Object
                        .keys(this.props.items)
                        .map(key =>
                            <MealGalleryItem
                                key={key}
                                itemId={key}
                                cartName={cartName}
                                cartIsFull={cartIsFull}
                                addItemToCart={addItemToCart}
                                showMealDetails={showMealDetails}
                                mealDetails={{...this.props.items[key]}} />)
                }
            </div>

        );
    }
}

export default MealsGallery;