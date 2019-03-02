import React, { Component } from 'react';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import IconTextButton from '../Buttons/IconTextButton';

class ChooseDinnersButton extends Component {

    goChooseDinners = () => {
        this.props.action("/ChooseDinners");
    }

    render() {
        return (
            <IconTextButton
                label="Choose Dinners"
                action={this.goChooseDinners}
                kind={IconTextButton.Kind.primary}
                iconPosition={IconTextButton.IconPosition.right}
                icon={
                    <ArrowForwardIos
                        fontSize="inherit"
                        nativeColor="var(--cheesy-orange)"
                        viewBox="0 0 17 24" />
                }
                extraBtnStyle={{ width: '304px' }} />
        );
    }
}

export default ChooseDinnersButton;

