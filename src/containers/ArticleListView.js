import React from 'react'
import axios from 'axios'
import {  Alert, Typography } from 'antd'
import { Link } from 'react-router-dom'

import Article from "../components/Article"
import CreateArea from "../components/CreateArea"

const { Text } = Typography;

class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('https://shuvo-portal.herokuapp.com/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
    }

    handleChange= () => {
        
    }

    render() {
        let isLoggedin = localStorage.getItem('token')
        if (!isLoggedin) {
            return (
                <div class="alert alert-danger" role="alert" style={{ fontSize: "1rem" ,  textAlign: "center" }}>

                    <Alert
                        message="Warning"

                        type="warning"
                        showIcon
                    />
                 Please <Link to="/login/"> <Text mark code>Login</Text></Link> or
                    <Link to="/signup/"> <Text code type="warning">Signup</Text></Link> first!
                </div>
            );
        }
        return (
            <div>
                <CreateArea />
                <Article data={this.state.articles} />
                <br />
                {/* <h2> Create an Article</h2>
                <ArticleForm requestType="post" articleID={null} btnText="Create" /> */}
            </div>

        )
    }
}


export default ArticleList;