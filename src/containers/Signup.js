import React from 'react';
import { Form, Input, Alert } from 'antd';
import { Message, Button } from 'semantic-ui-react'
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
        if (localStorage.getItem('token')) {
            this.props.history.push('/')
        }
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
        }
    }


    render() {

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <div>

                    <p>{this.props.error.message}</p>
                    <Message style={{ marginTop: "5px", marginBottom: "5px" }}
                        success
                        icon='warning'
                        header='Unexpected Error!'
                        list={["Username may already exist!", "Email may have been used already!"]}
                    />
                </div>
            );

        }
        if (localStorage.getItem('token')) {
            this.props.history.push('/')
        }

        return (
            <div className="signup-div">
                <div className="heading">
                    <h1>Create a Account</h1>
                </div>


                {errorMessage}
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
                            pattern="^[a-zA-Z0-9.\-_$@*!]{5,30}$"
                            title="Alpha Numeric whitout space & Minimum 5 character."

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
                                message: 'Minimum 9 character !At least 2 uppercase, 1 lowercase, 2 digits!',
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
                            pattern="^(?=.{9,}$)(?=(?:.*?[A-Z]){2})(?=.*?[a-z])(?=(?:.*?[0-9]){2}).*$"

                            title="Minimum 9 character !At least 2 uppercase, 1 lowercase, 2 digits!"
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

                        <Button.Group>
                            <Button secondary htmlType="submit" >Register</Button>
                            <Button.Or />
                            <Button href="/login/" positive>Login</Button>
                        </Button.Group>

                    </Form.Item>

                </Form>
            </div>
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