import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleValidate = () => {
        setIsSubmitted(true);
        // Aquí puedes agregar la lógica para enviar el correo electrónico.
    };

    return (
        <div className="register-form">
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <label>Nombre *</label>
                <input type="text" placeholder="Nombre" className="input" required />

                <label>Apellido *</label>
                <input type="text" placeholder="Apellido" className="input" required />

                <label>DNI *</label>
                <input type="text" placeholder="DNI" className="input" required />

                <label>Numero de Telefono *</label>
                <input type="tel" placeholder="Número de teléfono" className="input" required />

                <label>Patente *</label>
                <input type="text" placeholder="Patente" className="input" required />

                <label>Correo Electronico *</label>
                <input type="email" placeholder="Correo electrónico" className="input" required />

                <label>Contraseña *</label>
                <input type="password" placeholder="Contraseña" className="input" required />

                <label>Repetir Contraseña *</label>
                <input type="password" placeholder="Repetir Contraseña" className="input" required />

                <div className="buttons-container">
                    <button type="submit" className="btn">Registrarse</button>
                    <Link to="/" className="btn btn-back">Volver</Link>
                </div>
            </form>

            {showPopup && (
                <div className="overlay">
                    <div className="popup">
                        {!isSubmitted ? (
                            <>
                                <p>Se enviará un correo a la casilla indicada</p>
                                <button className="btn" onClick={handleValidate}>Validar</button>
                            </>
                        ) : (
                            <>
                            <h2>¡Correo enviado!</h2>
                            <p>Se ha enviado el correo a la casilla indicada.Por favor verifique su email.</p>
                            <div className="popup-buttons">
                            <button className="btn" onClick={handleValidate}>Reenviar</button>
                            <Link to="/" className="btn btn-back">Finalizar</Link>
                            </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegisterForm;
