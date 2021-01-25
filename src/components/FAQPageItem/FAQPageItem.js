import React from 'react';
import '../../assets/sass/components/FAQPageItem/_faqPageItem.scss';

const FaqItem = (props) => {
    return (
        <div className="faq-item">
            <span className="faq-item_badge">{props.children}</span>
            <img src={props.img} alt={props.alt} />
            <span className="faq-item_title">{props.title}</span>
        </div>
    );
}

export default FaqItem;