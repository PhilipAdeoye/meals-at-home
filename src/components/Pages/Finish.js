import React, { Fragment } from 'react';
import AppBar from '../Containers/AppBar';
import HelpButton from '../Buttons/HelpButton';
import MainContainer from '../Containers/MainContainer';
import SectionDivider from '../SectionDivider';

import { CSSTransition } from 'react-transition-group';
import { animationOptions } from '../../helpers';
import '../../css/transitions.css';

import '../../css/simple-greeting-grid.css';

const Finish = (props) => {
    return (
        <Fragment>
            <AppBar
                right={<HelpButton action={props.showHelp} contactPhone={props.helpContactPhone} />}
            />
            <MainContainer>
                <CSSTransition in={true} appear={true} {...animationOptions.slideUp}>
                    <div className="container">
                        <div className="simple-greeting-grid">
                            <div className="simple-greeting-grid__greeting">
                                <p className="simple-greeting-grid__greeting__text">Congrats!</p>
                            </div>

                            <SectionDivider />

                            <div className="simple-greeting-grid__content">
                                <p className="simple-greeting-grid__content__lead">You are done!</p>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </MainContainer>
        </Fragment>

    );
}

export default Finish;