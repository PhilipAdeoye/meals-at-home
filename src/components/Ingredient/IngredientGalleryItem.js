import React, { Component } from 'react';

import '../../css/IngredientGallery.css'

class IngredientGalleryItem extends Component {

    render() {

        const { imgSrc, name } = this.props;

        return (
            <div className="IngredientGalleryItem__Wrapper">
                <div className="IngredientGalleryItem">
                    <img src={imgSrc} alt={name} className="IngredientGalleryItem__img" />
                    <p className="IngredientGalleryItem__label">{name}</p>
                </div>
            </div>
        );
    }
}

export default IngredientGalleryItem;