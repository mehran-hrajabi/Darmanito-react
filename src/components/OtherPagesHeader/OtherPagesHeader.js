import React from 'react';
import '../../assets/sass/OtherPagesHeader/_otherPagesHeader.scss';

const pagesHeader = (props) => {
    return <div className="pages-header">{props.title}</div>
}

export default pagesHeader;