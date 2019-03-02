import React, { Component } from 'react';
import SelectionConfirmation from '../SelectionConfirmation'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import IconTextButton from '../Buttons/IconTextButton';

class FinishButton extends Component {

    showSelectionConfirmation = () => {
        return this.props.action(
            <SelectionConfirmation
                orderWillBePlacedAtTime={this.props.orderWillBePlacedAtTime}
                orderWillBePlacedOn={this.props.orderWillBePlacedOn}
                confirmSelectionAction={this.props.confirmSelectionAction}
                afterSelectionConfirmation={this.props.afterSelectionConfirmation}
            />
        )
    }

    render() {
        return (
            <IconTextButton
                label="Finish"
                action={this.showSelectionConfirmation}
                kind={IconTextButton.Kind.primary}
                iconPosition={IconTextButton.IconPosition.right}
                icon={
                    <ArrowForwardIos
                        fontSize="inherit"
                        nativeColor="var(--cheesy-orange)"
                        viewBox="0 0 17 24" />
                } />
        );
    }
}

export default FinishButton;

