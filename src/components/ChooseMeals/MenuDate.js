import React from 'react';

import '../../css/MenuDate.css';

const MenuDate = ({date}) => {
    return ( 
        <div className="MenuDate">
            <p className="MenuDate__display">Menu for {date}</p>
        </div>
     );
}
 
export default MenuDate;