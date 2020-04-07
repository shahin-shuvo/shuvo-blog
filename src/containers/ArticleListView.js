import React from 'react'
import axios from 'axios'
import { Alert, Typography } from 'antd'
import { Link } from 'react-router-dom'

import Article from "../components/Article"
import CreateArea from "../components/CreateArea"

const { Text } = Typography;

class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('https://shuvo-blog.herokuapp.com/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
    }

    handleChange = () => {

    }

    render() {
        let isLoggedin = localStorage.getItem('token')
        if (!isLoggedin) {
            return (
                <div>
                    <div class="alert alert-danger" role="alert" style={{ fontSize: "1rem", textAlign: "center" }}>

                        <Alert
                            message="Warning"

                            type="warning"
                            showIcon
                        />
                 Please <Link to="/login/"> <Text type="danger" code style={{fontSize:"1.5rem"}}>Login</Text></Link> or
                    <Link to="/signup/"> <Text code type="warning" style={{fontSize:"1.5rem"}}>Signup</Text></Link> to write your post.
                </div> 
                    <Article data={this.state.articles} />
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