import React from 'react';
import '../../css/OrderSummaryMealTimeHeader.css';

const MealTimeHeader = ({ label }) => {
    return (
        <div className="MealTimeHeader">
            <p className="MealTimeHeader__label">{label}</p>
        </div>
    );
}

export default MealTimeHeader;