import React from 'react';
import '../../assets/sass/components/FAQPageItem/_faqPageItem.scss';

const faqItem = (props) => {
    return (
        <div className="faq-item">
            <span className="faq-item_badge">{props.children}</span>
            <img src = {props.img} />
            <span className="faq-item_title">{props.title}</span>
        </div>
    )
}

export default faqItem;