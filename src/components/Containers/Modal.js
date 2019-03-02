import React, { Component } from 'react';
import ModalCloseButton from "../Buttons/ModalCloseButton";

import '../../css/responsive.css';
import '../../css/Modal.css';


class Modal extends Component { 

    onBackdropClick = (event) => {
        if([...event.target.classList].includes('modal-backdrop')) {
            this.props.hideModal();
        }
    }


    render() {
        
        const {displayStatus} = this.props;

        let backdropDisplayClass = "";
        let contentDisplayClass = "";

        if (displayStatus === 'show') {
            backdropDisplayClass = 'modal-backdrop--show';
            contentDisplayClass = 'modal__content--show';
            
        } else if (displayStatus === 'hide') {
            backdropDisplayClass = 'modal-backdrop--hide';
            contentDisplayClass = 'modal__content--hide';
        }

        return (
            <div
                className={`modal modal-backdrop ${backdropDisplayClass}`}
                onAnimationEnd={this.props.disappearModal}
                onClick={this.onBackdropClick}
                >
                <div className={`modal__content ${contentDisplayClass}`}>
                    <div className="modal__content__header container">
                        <ModalCloseButton action={this.props.hideModal}/>
                    </div>
                    <div className="modal__content__body container">
                        {this.props.bodyContent || this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}

export default Modal;