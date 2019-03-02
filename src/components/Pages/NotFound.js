import React, { Fragment } from 'react';
import AppBar from '../Containers/AppBar';
import MainContainer from '../Containers/MainContainer';
import ContentContainer from '../Containers/ContentContainer';

import HelpButton from '../Buttons/HelpButton';
import BackHomeButton from '../Buttons/BackHomeButton';

import GenericHeading from '../GenericHeading';
import BottomSheet from '../Containers/BottomSheet';
import GenericMessageWithPictureAndHeading from '../GenericMessageWithPictureAndHeading';

import { CSSTransition } from 'react-transition-group';
import { animationOptions } from '../../helpers';
import '../../css/transitions.css';

import pinkScream from '../../images/pink-scream.svg';

const NotFound = (props) => {
    return (
        <Fragment>
            <AppBar
                left={<BackHomeButton action={props.history.push} />}
                right={<HelpButton action={props.showHelp} contactPhone={props.helpContactPhone} />}
            />
            <MainContainer>
            <CSSTransition in={true} appear={true} {...animationOptions.slideUp}>
                <ContentContainer
                    topContent={
                        <GenericHeading
                            headingText="Whoa!"
                        />
                    }
                    bottomContent={
                        <BottomSheet>
                            <GenericMessageWithPictureAndHeading
                                imgSrc={pinkScream}
                                imgAlt="Scream Emoji derived from Edvard Munch's Scream painting"
                                headingText="We couldn't find what you're looking for"
                                messageText="Better luck next time. But first, let's go back home"
                            />
                        </BottomSheet>
                    }
                />
                </CSSTransition>
            </MainContainer>
        </Fragment>
    );
}

export default NotFound;