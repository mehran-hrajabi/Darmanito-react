import React from 'react';
import Address from '../ContactPageAddress/ContactPageAddress';
import Form from '../ContactPageForm/ContactPageForm';
import '../../assets/sass/components/ContactPageBody/_contactPageBody.scss';

const contactBody = () => {
    return (
        <div className="contact-body">
            <Form />
            <Address />
        </div>
    );
}

export default contactBody;