import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ConfigurationForm.css';

function ConfigurationForm() {
    return (
        <div className="config-form">
            <h2>Configuración</h2>
            <form>
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" className="input" />

                <label>Apellido</label>
                <input type="text" placeholder="Apellido" className="input" />

                <label>DNI</label>
                <input type="text" placeholder="DNI" className="input"/>

                <label>Numero de Telefono</label>
                <input type="tel" placeholder="Número de teléfono" className="input" />

                <label>Patente</label>
                <input type="text" placeholder="Patente" className="input"  />

                <label>Correo Electronico</label>
                <input type="email" placeholder="Correo electrónico" className="input" disabled />

                <label>Contraseña</label>
                <input type="password" placeholder="Contraseña" className="input"/>
                
                <label>Repetir Contraseña</label>
                <input type="password" placeholder="Repetir Contraseña" className="input" />
                
            <div className="buttons-container">
                <button type="submit" className="btn">Guardar Cambios</button>
                <Link to="/main" className="btn btn-back">Cancelar</Link>
            </div>
            </form>
        </div>
    );
}

export default ConfigurationForm;
