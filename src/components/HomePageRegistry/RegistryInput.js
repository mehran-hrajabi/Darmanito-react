import React from 'react';
import '../../assets/sass/base/_registryInput.scss';

const registryInput = () => {
    return (
        <div>
            <input type="text" placeholder="شماره همراه را وارد کنید 900 36 61 0912" />
            <button type="button">ثبت نام سریع</button>
        </div>
    );
}

export default registryInput;