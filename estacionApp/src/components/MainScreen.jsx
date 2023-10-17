import React from 'react';
import Sidebar from './Sidebar';
import SettingsButton from './SettingsButton';
import { Link } from 'react-router-dom'; // Importa Link
import '../styles/MainScreen.css';

function MainScreen() {
    return (
        <div className="container">
            <Sidebar />
            <div className="main-content">
                {/* Aquí va el contenido principal de la página */}
                <SettingsButton />
            </div>
        </div>
    );
}

export default MainScreen;