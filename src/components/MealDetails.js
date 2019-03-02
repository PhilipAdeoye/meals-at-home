import React, { Component } from 'react';

import SectionDivider from "./SectionDivider";
import IngredientGallery from "./Ingredient/IngredientGallery";

import '../css/MealDetails.css';

class MealDetails extends Component {
    state = {}

    render() {

        const { imgSrc, name, desc, ingredients } = this.props;

        return (
            <div className="MealDetails row">
                <div className="col-xs-4 col-lg-4">
                    <img src={imgSrc} alt={name} className="MealDetails__meal-img img-responsive" />
                    <p className="MealDetails__meal-name">{name}</p>
                    { desc && (<p className="MealDetails__meal-desc">{desc}</p>) }                    
                    <SectionDivider noOutline={true} />
                    <br />
                </div>
                <div className="col-xs-4 col-lg-4">
                    <p className="MealDetails__ingredients__header">Ingredients</p>
                    {
                        ingredients && typeof ingredients === "object" && <IngredientGallery items={ingredients} />
                    }                    
                </div>
            </div>
        );
    }
}

export default MealDetails;