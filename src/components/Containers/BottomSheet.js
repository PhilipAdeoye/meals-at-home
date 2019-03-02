import React from 'react';

import '../../css/Sheets.css';

const BottomSheet = (props) => {
    return (
        <div className="BottomSheet container">
            {props.children}
        </div>
    );
}

export default BottomSheet;