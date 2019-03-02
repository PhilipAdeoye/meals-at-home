import React, { Fragment } from 'react';
import AppBar from '../Containers/AppBar';
import MainContainer from '../Containers/MainContainer';
import SectionDivider from '../SectionDivider';
import LogoutButton from '../Buttons/LogoutButton';
import HelpButton from '../Buttons/HelpButton';

import { CSSTransition } from 'react-transition-group';
import { animationOptions } from '../../helpers';
import '../../css/transitions.css';

import '../../css/simple-greeting-grid.css';

const UntimelyLoginResponse = (props) => {
    return (
        <Fragment>
            <AppBar right={<HelpButton action={props.showHelp} contactPhone={props.helpContactPhone} />} />
            <MainContainer>
                <CSSTransition in={true} appear={true} {...animationOptions.slideUp}>
                    <div className="container">
                        <div className="simple-greeting-grid">
                            <div className="simple-greeting-grid__greeting">
                                <p className="simple-greeting-grid__greeting__text">Oops!</p>
                            </div>

                            <SectionDivider />

                            <div className="simple-greeting-grid__content">
                                <p className="simple-greeting-grid__content__lead">Our Bad!</p>
                                <p className="simple-greeting-grid__content__body">
                                    We know you, but you are not supposed to be here right now.
                            </p>
                                <br />
                                <br />
                                <LogoutButton />
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </MainContainer>
        </Fragment>
    );
}

export default UntimelyLoginResponse;