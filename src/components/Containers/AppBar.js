import React, { Component } from 'react';

import '../../css/AppBar.css';

class AppBar extends Component {

    render() {
        return (
            <header className="Appbar-header">
                <div className="Appbar-header__content container">
                    <div>
                        {this.props.left}
                    </div>
                    <div>
                        {this.props.right}
                    </div>
                </div>
            </header>
        );
    }
}

export default AppBar;