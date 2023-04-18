import React, { useState } from 'react';
import "./FormSection.css";

const FormSection = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [position, setPosition] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, lastname, position });
        setName('');
        setLastname('');
        setPosition('');
    };

    return (
        <div className="form-section">
            <h2>Create User Here</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Name"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        placeholder="Surname"
                        onChange={(event) => setLastname(event.target.value)}
                    />
                    <input
                        type="text"
                        id="position"
                        value={position}
                        placeholder="Position"
                        onChange={(event) => setPosition(event.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default FormSection;