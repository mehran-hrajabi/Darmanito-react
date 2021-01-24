import React, {Component} from 'react';
import RegistryInput from '../UI/RegistryInput/RegistryInput';
import Modal from '../UI/Modal/Modal';
import doctor from '../../assets/img/register.svg';
import "../../assets/sass/components/HomePageRegistry/_homePageRegistry.scss";

class homeRegistry extends Component {
    state = {
        showModal: false,
        isValid: false,
    }

    phoneValidation = (event) => {
        let number = event.target.value;
        if(number.length == 11 && number.slice(1,11) > 9000000000 && number.slice(0,0) == 0){
            this.setState({isValid: true});
        }
        else{
            this.setState({isValid: false});
        }
    }
    showModal = () => {
        if(this.state.isValid){
            this.setState({showModal: true});
        }
    }
    closeModal = () => {
        this.setState({showModal: false, isValid: false});
    }
    
    render(){
        let modal = null;

        if(this.state.showModal){
            modal = (
                <Modal show={this.state.showModal} title="ثبت نام با موفقیت انجام شد"
                txt="با شما تماس خواهیم گرفت">
                    <button onClick={this.closeModal}>برگشت</button>
                </Modal>
            );
        }

        return (
            <div className="home-register_container">
                {modal}

                <div className="home-register">
                    <div className="home-register_body">    
                        <h4>عضویت داروخانه یا مراکز درمانی</h4>
                        <p>اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان و
                            کسب کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست.</p>

                        <RegistryInput clicked={this.showModal} isValid={this.state.isValid} validation={this.phoneValidation} />
                    </div>

                    <img src={doctor} alt="عضویت در درمانیتو" />
                </div>                
            </div>

        )        
    }
};

export default homeRegistry;