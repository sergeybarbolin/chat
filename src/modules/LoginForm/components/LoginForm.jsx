import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';
import { Button } from './../../../components';

class LoginForm extends Component {
    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item hasFeedback validateStatus="success">
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
                    <Button type="primary" htmlType="submit" className="login-form-button" size="large">Войти</Button>
                    {/* <Link to="/register" className="auth__register-link">Зарегистрироваться</Link> */}
                </Form.Item>
            </Form>
        )
    }
}

export default LoginForm
