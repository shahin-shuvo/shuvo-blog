import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, BackTop } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Avatar } from 'antd';
const { Header, Content, Footer } = Layout;
class CustomLayout extends React.Component {
    render() {
        let location = window.location.pathname;
        console.log(location);
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}
                    breakpoint="md"
                >
                    <div className="logo" style={{
                        width: "50px",
                        height: "50px",
                        margin: "5px 5px 5px 5px",
                        float: "left"
                    }}>
                        <Avatar shape={"square"} style={{ color: "black", fontFamily: "'Lobster', cursive", fontSize: "2rem" }}>S</Avatar>
                    </div>

                    <Menu theme="dark" mode="horizontal"
                        defaultSelectedKeys="1">

                        <Menu.Item key="/">
                            <Link to="/">Portal</Link>
                        </Menu.Item>
                        <Menu.Item key="/covid-19/" >
                            <Link to="/covid-19/">
                                COVID-19
                            </Link>
                        </Menu.Item>

                        {
                            this.props.isAuthenticated ?

                                <Menu.Item key="2" onClick={this.props.logout}>
                                    <Link to="/" >Logout</Link>
                                </Menu.Item>

                                :
                                <Menu.Item key="/login/"   >
                                    <Link to="/login/">Login</Link>
                                </Menu.Item>

                        }
                        {
                            this.props.isAuthenticated ?
                                <Menu.Item key="/profile/">
                                    <Link to="/profile/"><UserOutlined />{localStorage.getItem('username')}</Link>
                                </Menu.Item>

                                :
                                <Menu.Item key="3"></Menu.Item>

                        }



                    </Menu>

                </Header>

                <BackTop />
                            


                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        {this.props.children}
                    </div>

                </Content>

                <Footer style={{ textAlign: 'center' }}> Created 2020 © Shahin Shuvo</Footer>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () =>
            dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));