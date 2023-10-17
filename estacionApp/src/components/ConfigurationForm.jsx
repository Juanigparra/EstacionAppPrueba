import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ConfigurationForm.css';
import pencilIcon from '../assets/pencil.png'; // Asegúrate de tener este ícono en la carpeta de assets




function ConfigurationForm() {
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const handleUnlock = (e, inputId) => {
        e.preventDefault();
        const inputElement = document.getElementById(inputId);
        if (inputElement && inputElement.disabled) {
            inputElement.disabled = false;
            inputElement.style.backgroundColor = "white";

            if (inputId === "passwordInput") {
                setShowRepeatPassword(true);
            }
        }
    };

    return (
        <div className="config-form">
            <h2>Configuración</h2>
            <form>
            
            <div className="label-container">
                <label>
                    Nombre
                    <img src={pencilIcon} alt="Editar" className="pencil-icon" onClick={(e) => handleUnlock(e, "nombreInput")} />
                </label>
            </div>
                <input id="nombreInput" type="text" placeholder="Nombre" className="input" disabled />
           
            <div className="label-container">
                <label>
                    Apellido
                    <img src={pencilIcon} alt="Editar" className="pencil-icon" onClick={(e) => handleUnlock(e, "apellidoInput")} />
                </label>
            </div>
                <input id="apellidoInput" type="text" placeholder="Apellido" className="input" disabled />
            
            <div className="label-container">
                <label>
                    DNI
                    <img src={pencilIcon} alt="Editar" className="pencil-icon" onClick={(e) => handleUnlock(e, "dniInput")} />
                </label>
            </div>
                <input id="dniInput" type="text" placeholder="DNI" className="input" disabled />

            <div className="label-container">
                <label>
                    Teléfono
                    <img src={pencilIcon} alt="Editar" className="pencil-icon" onClick={(e) => handleUnlock(e, "telefonoInput")} />
                </label>
            </div>
                <input id="telefonoInput" type="tel" placeholder="Teléfono" className="input" disabled />

            <div className="label-container">
                <label>
                    Patente
                    <img src={pencilIcon} alt="Editar" className="pencil-icon" onClick={(e) => handleUnlock(e, "patenteInput")} />
                </label>
            </div>
                <input id="patenteInput" type="text" placeholder="Patente" className="input" disabled />
            
            <div className="label-container"> 
                <label>Correo Electrónico</label>
            </div>
            <input type="email" placeholder="Correo electrónico" className="input" disabled />
            
            <div className="label-container">
                <label>
                    Contraseña
                    <img src={pencilIcon} alt="Editar" className="pencil-icon" onClick={(e) => handleUnlock(e, "passwordInput")} />
                </label>
            </div>
                <input id="passwordInput" type="password" placeholder="Contraseña" className="input" disabled />
            
                {showRepeatPassword && (
                    <>
                        <div className="label-container">
                        <label>Repetir Contraseña *</label>
                        </div>
                        <input type="password" placeholder="Repetir Contraseña" className="input" required />
                    </>
                )}
            
            <div className="buttons-container">
                <button type="submit" className="btn">Guardar Cambios</button>
                <Link to="/main" className="btn btn-back">Cancelar</Link>
            </div>
            </form>
        </div>
    );
}

export default ConfigurationForm;