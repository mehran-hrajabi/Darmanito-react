import React from 'react';
import '../../assets/sass/components/OtherPagesHeader/_otherPagesHeader.scss';

const PagesHeader = (props) => {
    return (
        <div className="pages-header">
            <h2>{props.title}</h2>
        </div>
    );
}

export default PagesHeader;