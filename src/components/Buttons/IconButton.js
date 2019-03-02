import React, { Component } from 'react';

import '../../css/IconButton.css';


class IconButton extends Component {

    render() {
        return (
            <button type="button"
                className="icon-btn" title={this.props.title} onClick={this.props.action} disabled={this.props.disabled}> 
                {this.props.icon}
            </button>
        );
    }
}

export default IconButton;