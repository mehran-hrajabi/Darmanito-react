import React from 'react';
import '../../assets/sass/components/ContactPageAddress/_contactPageAddress.scss';

const contactAddress = () => {
    return (
        <div className="contact-address">
            <iframe frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d681.0025779853355!2d51.34823325248998!3d35.71607379859734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d35.7162212!2d51.3483641!5e0!3m2!1sen!2s!4v1606867758788!5m2!1sen!2s"></iframe>
            
            <div className="contact-address_info">
                <div className="contact-address_rightCol">
                    <p>ایمیل</p>
                    <p>info@nahiraTech.com</p>
                    <p>شماره ثابت</p>
                    <p>021-44219671</p>
                </div>
                <div className="contact-address_leftCol">
                    <p>آدرس</p>
                    <p>تهران، طرشت، خیابان شهید چوب تراش،
                         خیابان شهید حسین مردی، بن بست پنجم، پلاک 15، واحد 1</p>
                </div>
            </div>
        </div>
    );
}

export default contactAddress;