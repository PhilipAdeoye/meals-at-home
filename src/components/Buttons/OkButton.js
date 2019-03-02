import React, { Component } from 'react';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import IconTextButton from './IconTextButton';

class OkButton extends Component {

    render() {
        return (
            <IconTextButton
                action={this.props.action}
                icon={
                    <ArrowForwardIos
                        fontSize="inherit"
                        nativeColor="var(--cheesy-orange)"
                        viewBox="0 0 24 24" />
                }
                iconPosition={IconTextButton.IconPosition.right}
                kind={IconTextButton.Kind.primary}
                label="Ok"
                extraBtnStyle={{ width: '7rem' }}
            />
        );
    }
}

export default OkButton;