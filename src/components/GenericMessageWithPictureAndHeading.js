import React from 'react';

import '../css/GenericMessageWithPictureAndHeading.css';

const GenericMessageWithPictureAndHeading = ({imgSrc, imgAlt, headingText, messageText}) => {
    return (
        <div className="GenericMessage">
            <img src={imgSrc} alt={imgAlt} className="GenericMessage__img" />
            <div>
                <p className="GenericMessage__heading">{headingText}</p>
                <p className="GenericMessage__info">{messageText}</p>
            </div>
        </div>
    );
}

export default GenericMessageWithPictureAndHeading;