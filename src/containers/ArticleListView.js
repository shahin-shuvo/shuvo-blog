import React from 'react'
import axios from 'axios'
import { Alert, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { Message, Segment, Header, Button } from 'semantic-ui-react'
import Article from "../components/Article"
import CreateArea from "../components/CreateArea"


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
                    <div class="ui floating message" color='black'>
                        <Message warning>
                            <Message.Header>You must register or login before you can do post & comment!</Message.Header>
                            <p>

                            </p>
                        </Message>
                        <Button.Group>
                            <Button secondary htmlType="submit" href="/login/" >Login</Button>
                            <Button.Or />
                            <Button href="/signup/" positive>Register</Button>
                        </Button.Group>
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