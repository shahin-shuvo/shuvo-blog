import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Avatar } from 'antd';
const { Header, Content, Footer } = Layout;
class CustomLayout extends React.Component {

    changeSelected = (key) => {
        localStorage.setItem('key', key);
        console.log(localStorage.getItem('key'))
    }
    render() {

        return (
            <Layout>
                <Avatar  shape="square" size={64}  style={{ color: 'black', backgroundColor: 'white' }}>S</Avatar>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    
                    <Menu theme="dark" mode="horizontal"
                        defaultSelectedKeys={[localStorage.getItem('key')]}>
                        <Menu.Item disabled>
                            <Avatar size={40} shape = {"square"} style ={{color: "black", fontFamily:"'Lobster', cursive", fontSize:"2rem"}}>S</Avatar>
                        </Menu.Item>
                        <Menu.Item key="1" onClick={() => this.changeSelected('1')}>
                            <Link to="/">Portal</Link>
                        </Menu.Item>

                        {
                            this.props.isAuthenticated ?

                                <Menu.Item key="2" onClick={this.props.logout}>
                                    <Link to="/" onClick={() => this.changeSelected('1')}>Logout</Link>
                                </Menu.Item>

                                :
                                <Menu.Item key="2" onClick={() => this.changeSelected('2')} >
                                    <Link to="/login/">Login</Link>
                                </Menu.Item>

                        }
                        {
                            this.props.isAuthenticated ?
                                <Menu.Item key="3" onClick={() => this.changeSelected('3')}>
                                    <Link to="/profile/"><UserOutlined />{localStorage.getItem('username')}</Link>
                                </Menu.Item>

                                :
                                <Menu.Item key="3"></Menu.Item>

                        }



                    </Menu>

                </Header>

                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>

                    </Breadcrumb>

                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        {this.props.children}
                    </div>

                </Content>

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Shahin Shuvo</Footer>
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