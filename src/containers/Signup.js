import React from 'react';
import { Form, Input, Button, Alert } from 'antd';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

class RegistrationForm extends React.Component {


    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: '',
            errorMessage: ''
        };

    }
    handleUsernameChange = (evt) => {
        this.setState({ username: evt.target.value });
    }
    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value });
    }

    handlePassword1Change = (evt) => {
        this.setState({ password1: evt.target.value });
    }

    handlePassword2Change = (evt) => {
        this.setState({ password2: evt.target.value });
    }




    handleSubmit = (event) => {


        if (this.state.username === "" || this.state.email === "" || this.state.password2 === ""
            || this.state.password1 === "" || this.state.password1 !== this.state.password2) {
            this.setState({ errorMessage: "Please fillup all field!" });
        }
        else {

            this.props.onAuth(
                event.target.username.value,
                event.target.email.value,
                event.target.password1.value,
                event.target.password2.value

            )

            console.log(event.target.username.value, event.target.email.value, event.target.password1.value, event.target.password2.value);
            this.props.history.push('/')
            window.location.reload(true)
        }



    }


    render() {

        return (
            <div className="signup-div">
                <div className="heading">
                    <h1>Create a Account</h1>
                </div>
                {this.state.errorMessage &&
                    <div style={{ marginBottom: "10px" }}>
                        <Alert
                            message="Error"
                            description={this.state.errorMessage}
                            type="error"
                            showIcon
                        />
                    </div>

                }
                <Form onSubmitCapture={this.handleSubmit}>

                    <Form.Item

                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                                whitespace: true,
                            },
                        ]}
                    >

                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
                            name="username"
                            onChange={this.handleUsernameChange}
                            value={this.state.username}

                        />

                    </Form.Item>

                    <Form.Item

                        rules={[
                            {
                                type: 'email', message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true, message: 'Please input your E-mail!',
                                whitespace: true,
                            }

                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" name="email"
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                            title="Invalid email!"

                        />

                    </Form.Item>

                    <Form.Item
                        name="password"

                        rules={[
                            {
                                required: true,
                                message: 'Minimum 8 character !',
                                min: 8,


                            },

                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            name="password1"
                            onChange={this.handlePassword1Change}
                            value={this.state.password1}
                            pattern="^(?=(?:.*?[A-Z]){2})(?=.*?[a-z])(?=(?:.*?[0-9]){2}).*$"

                            title="At least 2 uppercase, 1 lowercase, 2 digits!"
                        />

                    </Form.Item>

                    <Form.Item
                        name="confirm"

                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                                whitespace: false,
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            onChange={this.handlePassword2Change}
                            value={this.state.password2}

                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                            Signup
                    </Button>
                    Or
                    <NavLink
                            style={{ marginRight: '10px' }}
                            to='/login/'> Login
                    </NavLink>
                    </Form.Item>

                </Form>
            </div >
        );
    }
};



const mapsStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}



export default connect(mapsStateToProps, mapDispatchProps)(RegistrationForm);