import React, { Component } from 'react';

import '../../css/Sheets.css';

class TopSheet extends Component {

    topSheetEl = React.createRef();

    state = {
        height: 0
    }

    handleWindowResize = () => {
        const height = this.topSheetEl.current.offsetHeight;
        this.setState((oldState, props) => {

            // If the height has changed from the last time, update it
            if (props.getElementHeight && oldState.height !== height) {
                props.getElementHeight(height);
            }
            return { height };
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
        const fixedTopSheet = this.props.fixed ? "TopSheet--fixed" : "";

        return (
            <div
                className={`TopSheet ${fixedTopSheet} container`}
                ref={this.topSheetEl}>
                {this.props.children}
            </div>
        );
    }
}

export default TopSheet;