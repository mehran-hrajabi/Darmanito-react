import React, {Component} from 'react';
import RegistryInput from '../UI/RegistryInput/RegistryInput';
import Modal from '../UI/Modal/Modal';
import Doctor from '../../assets/img/register.svg';
import "../../assets/sass/components/HomePageRegistry/_homePageRegistry.scss";

class HomeRegistry extends Component {
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
        return (
            <div className="home-register_container">
                {this.state.showModal ? (
                    <Modal backdropAction={this.closeModal} show={this.state.showModal} title="ارسال موفق" txt="لینک دانلود برای شما ارسال شد.">
                        <button onClick={this.closeModal}>برگشت</button>
                    </Modal>
                ) : null}
                <div className="home-register">
                    <div className="home-register_body">
                        <h4>عضویت داروخانه یا مراکز درمانی</h4>
                        <p>اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان و
                            کسب کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست.</p>

                        <RegistryInput value={this.state.inputText} clicked={this.showModal} isValid={this.state.isValid} validation={this.phoneValidation} />

                    </div>

                    <img src={Doctor} alt="عضویت در درمانیتو" />
                </div>                
            </div>

        )        
    }
};

export default HomeRegistry;