import React, { Component } from 'react';
import '../../css/IconTextButton.css';


class IconTextButton extends Component {

    static IconPosition = { left: "left", right: "right" };
    static Kind = { 
        default: "icon-text-btn-default",
        primary: "icon-text-btn-primary",
    }
    

    render() {

        // Pick button kind
        const btnKind = this.props.kind || "icon-text-btn-default";

        // Pick side to display icon on (left orright)
        const iconPosition = this.props.iconPosition || "left";
        const iconSideModifier = iconPosition === "right" ? "-icon-right" : "";    
                
        // Adjust size if specified
        const btnSizeModifier = this.props.useLargeBtn ? "icon-text-btn-large" : "";
        const iconSizeModifier = this.props.useLargeBtn ? "icon-text-btn__content__icon-large" : ""

        return (
            <button                 
                type="button"
                className={`icon-text-btn ${btnKind} ${btnSizeModifier}`} 
                onClick={this.props.action}
                style={this.props.extraBtnStyle}>
                <div className={"icon-text-btn__content" + iconSideModifier}>

                    <div className={`icon-text-btn__content__icon ${iconSizeModifier}`}>
                        {this.props.icon}
                    </div>

                    <div className={"icon-text-btn__content__text" + iconSideModifier}>
                        {this.props.label}
                    </div>

                </div>
            </button>
        );
    }
}

export default IconTextButton;