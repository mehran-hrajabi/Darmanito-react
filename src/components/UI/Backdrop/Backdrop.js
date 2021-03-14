import React from 'react';
import '../../../assets/sass/components/UI/Backdrop/_backdrop.scss';

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.backdropAction}></div>
}

export default Backdrop;