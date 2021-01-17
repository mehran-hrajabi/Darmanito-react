import React from 'react';
import '../../assets/sass/components/TermsPageItem/_termsPageItem.scss';

const termsItem = (props) => {
    return (
        <div className="terms-item">
            <span>{props.title}</span>
        </div>
    );
}

export default termsItem;