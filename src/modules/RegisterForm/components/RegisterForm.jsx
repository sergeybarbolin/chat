import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';
import { Button, Block } from '../../../components';

const succsess = false;

class RegisterForm extends Component {
    render() {
        return succsess ? (
            <Block>
                <div className="auth__top">
                    <h3>Подтвердите свой аккаунт</h3>
                    <p>На Вашу почту отправлено письмо с сылкой на подтверждение аккаунта</p>
                </div>
            </Block>
        ) : (
            <Block>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Confirm password"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" size="large">Зарегистрироваться</Button>
                        <Link to="/login" className="auth__register-link">Войти в аккаунт</Link>
                    </Form.Item>
                </Form>
            </Block>
        )
    }
}

export default RegisterForm
