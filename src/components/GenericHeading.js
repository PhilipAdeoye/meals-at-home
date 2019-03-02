import React from 'react';
import '../css/GenericHeading.css';

const GenericHeading = ({ imgSrc, imgAlt, headingText }) => {
    return (
        <div className="GenericHeading">
            {
                !!imgSrc && imgSrc.length > 0 &&
                <img src={imgSrc} alt={imgAlt} className="GenericHeading__icon" />
            }
            <span className="GenericHeading__title">{headingText}</span>
        </div>
    );
}

export default GenericHeading;