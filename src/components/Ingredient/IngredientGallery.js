import React, { Component } from 'react';
import IngredientGalleryItem from "./IngredientGalleryItem";

import '../../css/IngredientGallery.css';


class IngredientGallery extends Component {

    renderItem = (item) => {
        return (
            <IngredientGalleryItem key={item.id} {...item}/>
        );

    }

    render() {
        return (
            <div className="IngredientGallery">
                {this.props.items.map(this.renderItem)}
            </div>
        );
    }
}

export default IngredientGallery;