import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function LoginForm() {
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica de inicio de sesión si la tienes.
        // Si el inicio de sesión es exitoso, redirige al usuario a MainScreen:
        history.push('/main');
    };

    return (
        <div className="form-container">
            <h2>EstacionApp</h2>
            <form>
                <div>
                    <input type="email" className="input" placeholder="Correo Electronico" required/>
                </div>
                <div>
                    <input type="password" className="input" placeholder="Contraseña" required />
                </div>
                <button className="login-btn" type="submit" onClick={handleLogin}>Iniciar sesión</button>
            </form>
            <Link to="/forgot-password" className="secondary-btn">Olvidé mi contraseña</Link>
            <Link to="/register" className="secondary-btn">Registrarme</Link>
        </div>
    );
}

export default LoginForm;
