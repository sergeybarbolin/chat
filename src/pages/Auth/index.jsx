import React, { Component } from 'react'
import { Block } from "./../../components";
import { LoginForm } from './../../modules';
import './Auth.scss';

class Auth extends Component {

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //       if (!err) {
    //         console.log('Received values of form: ', values);
    //       }
    //     });
    // };

    render() {
        return (
            <section className="auth">
                <div className="auth__top">
                    <h2>Авторизация</h2>
                    <p>Заполните логин и пароль для авторизации.</p>
                </div>
                <Block>
                    <LoginForm />
                </Block>
            </section>
        )
    }
}


export default Auth;
