import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';
import { Button, Block } from './../../../components';

const LoginForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <Block>
            <div className="auth__top">
                <h2>Авторизация</h2>
                <p>Заполните логин и пароль для авторизации.</p>
            </div>

            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item
                    validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'} 
                    hasFeedback
                    help={!touched.email ? false : errors.email}
                >
                    <Input
                        id="email"
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                        size="large"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>

                <Form.Item
                    validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'} 
                    hasFeedback
                    help={!touched.password ? false : errors.password}
                >
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        size="large"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" size="large">Войти</Button>
                    <Link to="/register" className="auth__register-link">Зарегистрироваться</Link>
                </Form.Item>
            </Form>
        </Block>
    )
}

export default LoginForm
