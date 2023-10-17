import React, { useState } from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='columna'>
            <button onClick={() => setIsOpen(!isOpen)} className="hamburger-icon">
                ☰
            </button>
            {isOpen && (
                <div className="sidebar-content">
                    <div className="sidebar-item">Ver cocheras disponibles</div>
                    <div className="sidebar-item">Mis reservas</div>
                    <div className="sidebar-item">Mis estacionamientos</div>
                    <div className="sidebar-item">Mis pagos</div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;