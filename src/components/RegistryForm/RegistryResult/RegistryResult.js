import React from 'react';
import '../../../assets/sass/components/RegistryForm/RegistryResult/_registryResult.scss';

const Result = (props) => {
    return(
        <div className="registry-result">
            <div className="result-row1">
                <div>
                    <p>نام داروخانه</p>
                    <p>{props.pharName}</p>
                </div>
                <div>
                    <p>شماره داروخانه</p>
                    <p>{props.pharNumber}</p>
                </div>
                <div>
                    <p>شهر</p>
                    <p>{props.city}</p>
                </div>
            </div>
            <div className="result-row2">
                <div>
                    <p>منطقه</p>
                    <p>{props.region}</p>
                </div>
                <div>
                    <p>ساعت کاری</p>
                    <p>{props.shift}</p>
                </div>
            </div>
            <div className="result-row3">
                <p>آدرس دقیق</p>
                <p>{props.address}</p>
            </div>
            <div className="result-row4">
                <div>
                    <p>نام و نام خانوادگی موسس</p>
                    <p>{props.name}</p>
                </div>
                <div>
                    <p>شماره نظام پزشکی</p>
                    <p>د - {props.medNumber}</p>
                </div>
            </div>
            <div className="result-row5">
                <button onClick={props.back}>ویرایش اطلاعات</button>
                <button onClick={props.submit}>تکمیل ثبت نام</button>
            </div>
        </div>
    );
}

export default Result;