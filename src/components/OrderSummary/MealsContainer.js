import React from 'react';

const MealsContainer = (props) => {
    return (
        <div className="MealsContainer" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
            {props.children}
        </div>
    );
}

export default MealsContainer;