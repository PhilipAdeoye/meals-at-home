import React, { Component } from 'react';


import SectionDivider from './SectionDivider';
import OkButton from './Buttons/OkButton';

import '../css/SelectionConfirmation.css';

class SelectionConfirmation extends Component {

    goToHome = () => {
        this.props.confirmSelectionAction("/");
        this.props.afterSelectionConfirmation();
    }

    render() {
        return (
            <div className="SelectionConfirmation">
                <p className="SelectionConfirmation__heading">
                    Great! We'll take it from here!
                </p>

                <SectionDivider />

                <p className="SelectionConfirmation__text">
                    {
                        `You can make changes until 
                    ${this.props.orderWillBePlacedAtTime} on 
                    ${this.props.orderWillBePlacedOn}
                    `}
                </p>
                <div className="SelectionConfirmation__confirm">
                    <OkButton action={this.goToHome}/>
                </div>

            </div>
        );
    }
}

export default SelectionConfirmation;