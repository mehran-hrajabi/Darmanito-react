import React from 'react';
import '../../../assets/sass/components/UI/RegistryInput/_registryInput.scss';

const RegistryInput = (props) => {
    return (
        <div>
            <input value={props.value} className="ui-registry-input" onChange={props.validation} type="number" placeholder="شماره همراه را وارد کنید 900 36 61 0912" />
            <button className="ui-registry-btn" onClick={props.clicked} disabled={!props.isValid} type="button">ثبت نام سریع</button>
        </div>
    );
}

export default RegistryInput;