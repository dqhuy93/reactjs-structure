import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
// import { login } from '../../actions/AuthAction';
import { createCookie } from '../../utils/helpers/cookie';
import { TOKEN_KEY } from '../../constants';
import './LoginPage.scss';

class LoginPage extends Component {
  state = {
    isSubmiting: false,
  };

  onFinish = values => {
    console.log('Success:', values);
    createCookie(TOKEN_KEY, 'user_token');
    this.props.history.push('/');
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const { isSubmiting } = this.state;
    return (
      <div id="login-content">
        <div className="login-wrap">
          <h1>Login</h1>
          <Form
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            className="login-form"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Button
              loading={isSubmiting}
              className="btn-primary login-form-button"
              htmlType="submit"
            >
              Log in
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
