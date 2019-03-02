import React, { Component, Fragment } from 'react';
import AppBar from '../Containers/AppBar';
import HelpButton from '../Buttons/HelpButton';
import ImageButton from '../Buttons/ImageButton';
import MainContainer from '../Containers/MainContainer';
import SectionDivider from '../SectionDivider';

import fruits from '../../images/fruits.svg';
import processing from '../../images/processing.svg';

import { CSSTransition } from 'react-transition-group';
import { animationOptions } from '../../helpers';
import '../../css/transitions.css';

import '../../css/duplex-greeting-grid.css';


class Home extends Component {

    state = {
        timeOfDay: "",
        timeOfDayTimer: null,
    };

    componentDidMount() {

        const timeOfDayTimer = setInterval(this.updateTimeOfDay, 1000);
        this.setState({
            timeOfDayTimer,
            timeOfDay: this.getTimeOfDay()
        });
    }

    updateTimeOfDay = () => {
        const timeOfDay = this.getTimeOfDay();
        this.setState({ timeOfDay });
    }

    getTimeOfDay = () => {
        const hours = (new Date()).getHours();

        if (hours < 12) {
            return "Morning";
        } else if (hours < 17) {
            return "Afternoon";
        }
        return "Evening";
    }

    goToLunches = () => {
        this.props.history.push("/ChooseLunches");
    }

    goToOrderSummary = () => {
        this.props.history.push("/OrderSummary");
    }

    render() {
        return (
            <Fragment>
                <AppBar
                    right={<HelpButton action={this.props.showHelp} contactPhone={this.props.helpContactPhone} />}
                />
                <MainContainer>
                    <CSSTransition in={true} appear={true} {...animationOptions.slideUp}>
                        <div className="container">
                            <div className="duplex-greeting-grid">
                                <div className="duplex-greeting-grid__greeting">
                                    <p className="duplex-greeting-grid__greeting__text">{`Good ${this.state.timeOfDay}!`}</p>
                                </div>

                                <SectionDivider className="duplex-greeting-grid__section-divider" />

                                <div className="duplex-greeting-grid__content">
                                    <ImageButton
                                        label="Choose New Meals"
                                        imgSrc={fruits}
                                        imgAlt="Choose New Meals"
                                        action={this.goToLunches}
                                    />
                                    <ImageButton
                                        label="Most Recent Order"
                                        imgSrc={processing}
                                        imgAlt="Most Recent Order"
                                        action={this.goToOrderSummary}
                                    />
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </MainContainer>
            </Fragment>
        );
    }

    componentWillUnmount() {
        clearInterval(this.state.timeOfDayTimer);
    }
}

export default Home;