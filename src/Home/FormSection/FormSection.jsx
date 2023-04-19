import React, { useState } from 'react';
import "./FormSection.css";

const FormSection = ({ onSubmit }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        lastname: '',
        position: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormValues(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(formValues);
        setFormValues({ name: '', lastname: '', position: '' });
    };

    return (
        <div className="form-section">
            <h2>Create User Here</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        placeholder="Name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formValues.lastname}
                        placeholder="Surname"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={formValues.position}
                        placeholder="Position"
                        onChange={handleChange}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default FormSection;