import React, { Component } from 'react';

import '../../css/buttons.css';

class Button extends Component {

    static Kind = {
        default: "btn-default",
        primary: "btn-primary"
    }

    render() {

        const btnKind = this.props.kind || "btn-default";

        return (
            <button
                type="button"
                className={`btn ${btnKind}`}
                onClick={this.props.action}>{this.props.label}</button>
        );
    }
}

export default Button;