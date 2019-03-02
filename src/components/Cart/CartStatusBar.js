import React, { Component, Fragment } from 'react';

import '../../css/CartStatusBar.css';

class CartStatusBar extends Component {

    static FullCartActionsJustify = {
        Center: "CartStatusBar--full-center",
        SpaceBetween: "CartStatusBar--full-space-between"
    }

    getProgressBarText = () => {
        const { maxCartSize, currentCartSize } = this.props;

        if (currentCartSize === 0) {
            return `Pick ${maxCartSize} items from menu`;
        } else if (currentCartSize > 0 && currentCartSize < maxCartSize) {
            return `Pick ${maxCartSize - currentCartSize} more`;
        } else {
            return 'Full Cart';
        }
    }

    render() {

        const { maxCartSize, currentCartSize, cartIsFull, cartIsEmpty, fullCartActionsJustify } = this.props;
        
        const progressBarModifierClass = (cartIsFull || cartIsEmpty) ? "CartProgressBar__progress--no-borders" : "";

        let cartStatusBarFullClass = "";
        if (cartIsFull) {
            cartStatusBarFullClass = fullCartActionsJustify || "CartStatusBar--full-center";
        }        

        const viewToRender = cartIsFull ? this.props.fullCartActions : (
            <Fragment>
                <span className="CartStatusBar__meal-time-label">
                    {this.props.mealTimeLabel}
                </span>
                <div className="CartProgressBar">
                    <div className="CartProgressBar__text-container">
                        <span className="CartProgressBar__text">
                            {this.getProgressBarText()}
                        </span>
                    </div>
                    <div
                        className={`CartProgressBar__progress ${progressBarModifierClass}`}
                        style={{ width: `${currentCartSize / maxCartSize * 100}%` }}></div>
                </div>
            </Fragment>
        )

        return (
            <div className={`CartStatusBar ${cartStatusBarFullClass}`}>
                {viewToRender}
            </div>
        );
    }
}

export default CartStatusBar;