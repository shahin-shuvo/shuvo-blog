import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Spin } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth'
import { Message, Button } from 'semantic-ui-react'

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
        }


    }


    render() {
        if (localStorage.getItem('token')) {
            this.props.history.push('/')
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <div>

                    <p>{this.props.error.message}</p>
                    <Message style={{ marginTop: "5px", marginBottom: "5px" }}
                        success
                        icon='warning'
                        header='Unexpected Error!'
                        list={["Your username may be wrong!", "Your password be wrong"]}
                    />
                </div>
            );

        }


        return (

            <div className="signup-div">
                <div className="heading">
                    <h1>Login</h1>
                </div>

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

                                <Button.Group>
                                    <Button secondary htmlType="submit">Login</Button>
                                    <Button.Or />
                                    <Button href="/signup/" positive>Register</Button>
                                </Button.Group>

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