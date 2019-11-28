import React from 'react';
import { Route } from 'react-router-dom';
import { LoginForm, RegisterForm } from './../../modules';
import './Auth.scss';

const Auth = () => (
    <section className="auth">
        <Route exact path={["/", "/login"]} component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
    </section>
)

export default Auth;