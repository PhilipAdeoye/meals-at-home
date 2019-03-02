import React, {Component} from 'react';
import Button from './Button';
import HelpInfo from '../HelpInfo';

class HelpButton extends Component {

    showHelp = () => {
        return this.props.action(<HelpInfo contactPhone={this.props.contactPhone}/>)
    }
    
    render() { 
        return ( 
            <Button label="Help" action={this.showHelp}/>
         );
    }
}
 
export default HelpButton;