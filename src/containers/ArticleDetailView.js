import React from 'react'
import axios from 'axios'
import { Card, Button } from 'antd'
import ArticleForm from "../components/ArticleForm"
import Form from 'antd/lib/form/Form'


class ArticleDetail extends React.Component {

    state = {
        article: []
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`https://shuvo-blog.herokuapp.com/api/${articleID}/`)
            .then(res => {
                this.setState({
                    article: res.data

                });
            })
    }

    handleDelete = (event) => {
        const articleID = this.props.match.params.articleID;
        axios.delete(`https://shuvo-blog.herokuapp.com/api/${articleID}/`)
        this.props.history.push('/')
        window.location.reload(false)

    }
    render() {
        localStorage.setItem('key', '1')
        return (
            <div >
                <div className="post-div">
                    <Card title={this.state.article.title}>
                        <p>{this.state.article.content}</p>
                    </Card>
                </div>
                {localStorage.getItem('token') === this.state.article.userToken &&
                    <div style={{ marginTop: "10px" }}>
                        <ArticleForm requestType="put"
                            articleID={this.props.match.params.articleID}
                            article={this.state.article}

                            btnText="Update" />
                        <Form onSubmitCapture={this.handleDelete}>
                            <Button type="danger" htmlType="submit">Delete</Button>
                        </Form>
                    </div>
                }
            </div>
        )
    }
}

export default ArticleDetail;