import React, { Component } from 'react';
import AddMealItemToCartButton from '../Buttons/AddMealItemToCartButton';
import ViewMealItemDetails from '../Buttons/ViewMealItemDetails';
import MealDetails from '../MealDetails';

import '../../css/MealsGallery.css';

class MealGalleryItem extends Component {

    state = {
        open: false
    }

    handleClick = (e) => {
        this.setState({ open: !this.state.open });
    }

    addToCart = () => {
        if (!this.props.cartIsFull) {
            this.props.addItemToCart(this.props.cartName, this.props.itemId);
        }
    }

    viewDetails = () => {
        this.props.showMealDetails(<MealDetails {...this.props.mealDetails} />)
    }

    render() {

        const { imgSrc, name } = this.props.mealDetails;

        let mealItemOpenShutMod = "";
        let mealControlsOpenShutMod = "MealControls--closed";

        if (this.state.open) {
            mealItemOpenShutMod = "MealItem--open";
            mealControlsOpenShutMod = "MealControls--open";
        }

        return (
            <div className="MealGalleryItem__Wrapper" >
                <div className={`MealItem ${mealItemOpenShutMod}`} onClick={this.handleClick}>
                    <img src={imgSrc} alt={name} className="MealItem__img" />
                    <p className="MealItem__label">{name}</p>
                </div>
                <div className={`MealControls ${mealControlsOpenShutMod}`}>
                    <ViewMealItemDetails action={this.viewDetails} />
                    <AddMealItemToCartButton action={this.addToCart} disabled={this.props.cartIsFull} />
                </div>
            </div>
        );
    }
}

export default MealGalleryItem;
