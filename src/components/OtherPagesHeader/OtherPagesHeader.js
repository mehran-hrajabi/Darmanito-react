import React from 'react';
import '../../assets/sass/components/OtherPagesHeader/_otherPagesHeader.scss';

const pagesHeader = (props) => {
    return (
        <div className="pages-header">
            <h1>{props.title}</h1>
        </div>
    );
}

export default pagesHeader;