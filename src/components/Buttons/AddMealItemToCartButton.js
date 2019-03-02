import React, { Component } from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import IconButton from './IconButton';

class AddMealItemToCartButton extends Component {

    render() {
        return (
            <IconButton action={this.props.action}
                icon={<ShoppingCart nativeColor={ this.props.disabled ? "gray" :"var(--soft-pink)"} />}
                title="Add to Cart"
                disabled={this.props.disabled}
            />
        );
    }
}

export default AddMealItemToCartButton;