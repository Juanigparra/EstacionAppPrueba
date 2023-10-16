import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ForgotPasswordForm({ onPasswordReset }) {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar un correo de restablecimiento de contraseña.
        onPasswordReset(email);
    };

    return (
        <div className="register-form">
            <h2>Recuperar Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ingresa tu correo electrónico:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="input"
                        required 
                    />
                </div>
                <div className="buttons-container">
                    <button type="submit" className="btn">Enviar enlace de restablecimiento</button>
                    <Link to="/" className="btn btn-back">Cancelar</Link>
                </div>
            </form>
        </div>
    );
}

export default ForgotPasswordForm;
