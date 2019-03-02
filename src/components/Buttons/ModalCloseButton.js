import React, { Component } from 'react';
import Close from '@material-ui/icons/Close';
import IconTextButton from './IconTextButton';

class ModalCloseButton extends Component {
    
    render() { 
        return ( 
                <IconTextButton
                    icon={
                        <Close
                            fontSize="inherit"
                            nativeColor="var(--soft-pink)"
                            viewBox="0 0 24 24" />
                    }
                    iconPosition={IconTextButton.IconPosition.left}
                    label="Close" 
                    action={this.props.action}
                />
         );
                
    }
}
 
export default ModalCloseButton;
