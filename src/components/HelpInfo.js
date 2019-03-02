import React from 'react';
import LogoutButton from './Buttons/LogoutButton';
import SectionDivider from './SectionDivider';
import { stripNonDigits } from '../helpers';

import '../css/HelpInfo.css';

const HelpInfo = (props) => {    

    return (
        <div className="HelpInfo">
            <p className="HelpInfo__greeting">Need Help?</p>

            <SectionDivider />

            <p className="HelpInfo__lead">Please Call</p>
            <p className="HelpInfo__contact-container">
                <a href={`tel:${stripNonDigits(props.contactPhone)}`}
                    className="HelpInfo__contact-number">
                    {props.contactPhone}
                </a>
            </p>
            <LogoutButton />

        </div>
    );
}

export default HelpInfo;