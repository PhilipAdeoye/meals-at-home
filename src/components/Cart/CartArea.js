import React from 'react';

import '../../css/CartArea.css';

const CartArea = (props) => {
    return ( 
        <div className="CartArea" >
            {props.children}
        </div>
     );
}
 
export default CartArea;