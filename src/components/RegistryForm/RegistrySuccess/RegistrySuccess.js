import React from 'react';
import '../../../assets/sass/components/RegistryForm/RegistrySuccess/_registrySuccess.scss';

const RegistrySuccess = () => {
    return(
        <div className="registry-success">
            <h3>ثبت نام با موفقیت انجام شد.</h3>
            <p>در حال انتقال به صفحه اصلی</p>
            <div class="registry-spinner"></div>
        </div>        
    );
}

export default RegistrySuccess;