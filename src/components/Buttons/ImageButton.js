import React, { Component } from 'react';

import '../../css/ImageButton.css';

class ImageButton extends Component {
    
    render() { 
        return ( 
            <button className="ImageButton" type="button" onClick={this.props.action}>
                <span className="ImageButton__label">{this.props.label}</span>
                <img className="ImageButton__image" src={this.props.imgSrc} alt={this.props.imgAlt}/>
            </button>
         );
    }
}
 
export default ImageButton;