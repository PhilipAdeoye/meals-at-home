import React, { Component } from 'react';

import '../../css/responsive.css';
import '../../css/ContentContainer.css';


class ContentContainer extends Component {
    state = {
        topContentMinHeight: 0
    }

    updateMinHeight = (value) => {
        this.setState({ topContentMinHeight: `${value - 8}px` });
    }

    render() {

        const topContent =
            this.props.shouldAdjustTopContentMinHeight
                ? React.cloneElement(this.props.topContent, { getElementHeight: this.updateMinHeight })
                : this.props.topContent;

        return (
            <div className="ContentContainer">
                <div className="ContentContainer__top" style={{ minHeight: this.state.topContentMinHeight ? this.state.topContentMinHeight : '0px' }}>
                    {topContent}
                </div>
                <div className="ContentContainer__bottom">
                    {this.props.bottomContent}
                </div>
            </div>
        );
    }
}

export default ContentContainer;