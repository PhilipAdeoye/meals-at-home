import React, { Component } from 'react';
import '../../css/MainContainer.css';

import { CSSTransition } from 'react-transition-group';
import { animationOptions } from '../../helpers';
import '../../css/transitions.css';


class MainContainer extends Component {
    state = { innerContainerHeight: 0 }

    handleWindowResize = () => {
        this.setState({
            innerContainerHeight: `${window.innerHeight - 64}px`
        });
    }

    componentDidMount() {
        this.handleWindowResize();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    render() {
        return (
            <CSSTransition in={true} appear={true} {...animationOptions.fade}>
                <div className="MainContainer">
                    <div className="MainContainer__container" style={{ minHeight: this.state.innerContainerHeight ? this.state.innerContainerHeight : '100%' }}>
                        {this.props.children}
                    </div>
                </div>
            </CSSTransition>

        );
    }
}

export default MainContainer;