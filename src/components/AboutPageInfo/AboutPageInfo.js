import React, { Component } from 'react';
import RegistryInput from '../UI/RegistryInput/RegistryInput';
import Modal from '../UI/Modal/Modal';
import '../../assets/sass/components/AboutPageInfo/_aboutPageInfo.scss';

class AboutInfo extends Component {
    state = {
        showModal: false,
        isValid: false,
        inputText: ""
    }

    phoneValidation = (event) => {
        let number = event.target.value;
        if(number.length == 11 && number.slice(1,11) > 9000000000 && number.slice(0,0) == 0){
            this.setState({isValid: true});
        }
        else{
            this.setState({isValid: false});
        }
        this.setState({
            inputText: number
        });
    }

    showModal = () => {
        if(this.state.isValid){
            this.setState({showModal: true, inputText: ""});
        }
    }
    closeModal = () => {
        this.setState({showModal: false, isValid: false});
    }

    render(){
        return(
            <div className="about-info">
                {this.state.showModal ? (
                    <Modal backdropAction={this.closeModal} show={this.state.showModal} title="ارسال موفق" txt="لینک دانلود برای شما ارسال شد.">
                        <button onClick={this.closeModal}>برگشت</button>
                    </Modal> 
                ) : null}
                <h2>شما هم در سلامت و بهبود مردم کشورمون موثر باشید.</h2>
                <p>با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به سیستم درمان کمک کنید
                    و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد سفارش های خودتون رو تسویه کنید. </p>

                <RegistryInput value={this.state.inputText} clicked={this.showModal} isValid={this.state.isValid} validation={this.phoneValidation} />
            </div>
        );        
    }
}

export default AboutInfo;