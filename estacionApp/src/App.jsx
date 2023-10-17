import React from 'react';
import './styles.css';
import RegisterForm from './components/RegisterForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import MainScreen from './components/MainScreen';
import LoginForm from './components/LoginForm'; // Importa el nuevo componente
import ConfigurationForm from './components/ConfigurationForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginForm /> {/* Utiliza el nuevo componente aquí */}
                </Route>
                <Route path="/register">
                    <RegisterForm />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPasswordForm />
                </Route>
                <Route path="/main">
                    <MainScreen />
                </Route>
                <Route path="/configuracion">
                    <ConfigurationForm />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
