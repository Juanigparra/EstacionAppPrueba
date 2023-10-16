import React from 'react';
import './styles.css';
import RegisterForm from './components/RegisterForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="form-container">
                        <h2>EstacionApp</h2>
                        <form>
                            <div>
                                <input type="email" className="input" placeholder="Correo Electronico" required/>
                            </div>
                            <div>
                                <input type="password" className="input" placeholder="Contraseña" required />
                            </div>
                            <button className="login-btn" type="submit">Iniciar sesión</button>
                        </form>
                        <Link to="/forgot-password" className="secondary-btn">Olvidé mi contraseña</Link>
                        <Link to="/register" className="secondary-btn">Registrarme</Link>
                    </div>
                </Route>
                <Route path="/register">
                    <RegisterForm />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPasswordForm />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
