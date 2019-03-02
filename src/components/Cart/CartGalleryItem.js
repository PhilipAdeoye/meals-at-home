import React, { Component } from 'react';
import Close from '@material-ui/icons/Close';

import { CSSTransition } from 'react-transition-group';
import { animationOptions} from '../../helpers';
import '../../css/transitions.css';

import '../../css/CartGallery.css';

class CartGalleryItem extends Component {

    handleClick = () => {
        const { name, slot, cartName, removeFromCart } = this.props;
        if (!!name && removeFromCart) {
            removeFromCart(cartName, slot);
        }
    }

    render() {
        return (
            <div className="CartGalleryItem__Wrapper">

                {
                    !!this.props.name && (                        
                        <CSSTransition in={true} appear={true} { ...animationOptions.pop}>
                            <div className="CartItem" onClick={this.handleClick}>

                                <img className="CartItem__image"
                                    title={this.props.name}
                                    src={this.props.imgSrc}
                                    alt={this.props.name} />

                                <div className="CartItem__remove-btn">
                                    <Close
                                        fontSize="inherit"
                                        nativeColor="var(--deep-blue)"
                                        viewBox="0 0 24 24" />
                                </div>
                            </div>
                        </CSSTransition>
                    )
                }

            </div>
        );
    }
}

export default CartGalleryItem;