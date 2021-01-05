import React from 'react';
import '../../assets/sass/base/_registryInput.scss';
import '../../assets/sass/base/_btnCursor.scss';

const registryInput = (props) => {
    let btnClass = "forbidden registry-btn";

    if(props.isValid){
        btnClass = "allowed registry-btn";
    }
    return (
        <div>
            <input onChange={props.validation} type="text" placeholder="شماره همراه را وارد کنید 900 36 61 0912" />
            <button className={btnClass} onClick={props.clicked} type="button">ثبت نام سریع</button>
        </div>
    );
}

export default registryInput;