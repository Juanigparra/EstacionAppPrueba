import React from 'react';
import '../styles/SettingsButton.css';
import { Link } from 'react-router-dom'; // Importa Link

function SettingsButton() {

    return (
        <div className="settings-container">
            <Link to="/configuracion" className="settings-btn">Configuración</Link> {/* Cambiado a clase settings-btn */}
            <Link to="/" className="logout-link">Cerrar sesión</Link> {/* Cambiado a clase logout-link */}
        </div>
    );
}

export default SettingsButton;
