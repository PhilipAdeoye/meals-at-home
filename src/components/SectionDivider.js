import React from 'react';
import '../css/SectionDivider.css';

const SectionDivider = ({noOutline}) => {

    const outlineModifier = noOutline ? '-no-outline' : '';
    return ( <div className={`section-divider${outlineModifier}`}></div> );
}
 
export default SectionDivider;