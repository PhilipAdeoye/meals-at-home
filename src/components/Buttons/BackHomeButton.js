import React, { Component } from 'react';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import IconTextButton from './IconTextButton';

class BackHomeButton extends Component {

    goToHome = () => {
        this.props.action("/");
    }

    render() {
        return (
            <IconTextButton
                action={this.goToHome}
                icon={
                    <ArrowBackIos
                        fontSize="inherit"
                        nativeColor="var(--soft-pink)"
                        viewBox="0 0 17 24" />
                }
                iconPosition={IconTextButton.IconPosition.left}
                label="Home"
            />
        );
    }
}

export default BackHomeButton;