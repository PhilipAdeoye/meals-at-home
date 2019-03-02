import React, { Component } from 'react';
import CartGalleryItem from './CartGalleryItem';

import '../../css/CartGallery.css';

class CartGallery extends Component {

    

    render() {
        return (
            <div className="CartGallery">
                {
                    Object
                        .keys(this.props.items)
                        .map(key =>
                            <CartGalleryItem
                                key={key}
                                slot={key}
                                cartName={this.props.cartName}
                                removeFromCart={this.props.removeFromCart}
                                {...this.props.items[key]} />)
                }

            </div>
        );
    }
}

export default CartGallery;