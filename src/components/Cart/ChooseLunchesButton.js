import React, { Component } from 'react';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import IconTextButton from '../Buttons/IconTextButton';

class ChooseLunchesButton extends Component {

    goChooseLunches = () => {
        this.props.action("/ChooseLunches");
    }

    render() {
        return (
            <IconTextButton
                label="Lunches"
                action={this.goChooseLunches}
                kind={IconTextButton.Kind.primary}
                iconPosition={IconTextButton.IconPosition.left}
                icon={
                    <ArrowBackIos
                        fontSize="inherit"
                        nativeColor="var(--warm-white)"
                        viewBox="0 0 17 24" />
                }
                extraBtnStyle={{ backgroundImage: 'var(--big-blue-dots)' }} />
        );
    }
}

export default ChooseLunchesButton;

