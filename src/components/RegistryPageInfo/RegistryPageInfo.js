import React from 'react';
import RegistryInput from '../RegistryInput/RegistryInput';
import Modal from '../UI/Modal';
import homeRegistry from '../HomePageRegistry/HomePageRegistry';
import '../../assets/sass/components/RegistryPageInfo/_registryPageInfo.scss';

class registryInfo extends homeRegistry {
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

        return(
            <div className="registry-info">
                {modal}
                <h1>شما هم در سلامت و بهبود مردم کشورمون موثر باشید.</h1>
                <p>با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به سیستم درمان کمک کنید
                    و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد سفارش های خودتون رو تسویه کنید. </p>

                <RegistryInput clicked={this.showModal} isValid={this.state.isValid} validation={this.phoneValidation} />
            </div>
        );        
    }
}

export default registryInfo;