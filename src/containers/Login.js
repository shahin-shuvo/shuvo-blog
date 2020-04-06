import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


class NormalLoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errorMessage: ''
        };

    }

    handleUsernameChange = (evt) => {
        this.setState({ username: evt.target.value });
    }

    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value });
    }

    handleSubmit = (event) => {
        if (this.state.username === "" || this.state.password === "") {
            this.setState({ errorMessage: "Please fillup all field!" });
        }
        else {
            this.props.onAuth(event.target.username.value, event.target.password.value)
            this.props.history.push('/')
            //window.location.reload(true)
        }


    }


    render() {

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }


        return (

            <div className = "signup-div">
                 <div className="heading">
                    <h1>Login</h1>
                </div>
                {this.state.errorMessage &&
                    <div class="alert alert-danger" role="alert">
                        {this.state.errorMessage}
                    </div>
                }
                {errorMessage}
                {

                    this.props.loading ? <Spin indicator={antIcon} /> :

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onSubmitCapture={this.handleSubmit}

                        >
                            <Form.Item

                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
                                    name="username"
                                    onChange={this.handleUsernameChange}

                                />
                            </Form.Item>
                            <Form.Item

                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.handlePasswordChange}
                                />
                            </Form.Item>


                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                <NavLink to="/signup/" style={{ marginLeft: '10px' }}>
                                    Register now!</NavLink>
                            </Form.Item>
                        </Form>
                }
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}



export default connect(mapsStateToProps, mapDispatchProps)(NormalLoginForm);