import React from 'react';
import '../assets/sass/base/_gridContainers.scss';
import Navbar from '../components/Navbar/Navbar/Navbar';
import Form from '../components/RegistryForm/RegistryForm/RegistryForm';

const registry = () => {
    return(
        <div className="form-grid">
            <Navbar />
            <Form />
        </div>
    );
}

export default registry;