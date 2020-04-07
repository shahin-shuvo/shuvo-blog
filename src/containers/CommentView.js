import React from 'react'
import axios from 'axios'
import { Card, Alert } from 'antd'
import { Comment, Form, Button, Header, TextArea } from 'semantic-ui-react'
import uuid from "uuid";
import CommentItem from "../components/Comment"


class CommentView extends React.Component {
    state = {
        article: [],
        comments: [],
        commentText: ""
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`https://shuvo-blog.herokuapp.com/api/${articleID}/`)
            .then(res => {
                this.setState({
                    article: res.data

                });

                axios.get(`https://shuvo-blog.herokuapp.com/articles/comment/${this.state.article.postID}/`)
                    .then(result => {
                        this.setState({
                            comments: result.data

                        });
                        console.log(this.state.comments)
                    })

            })

    }

    changeHandle = (event) => {
        this.setState({
            commentText: event.target.value
        });
    }
    submitComment = () => {
        axios.post('https://shuvo-blog.herokuapp.com/articles/comment/create/', {
            comment: this.state.commentText,
            postID: this.state.article.postID,
            userToken: localStorage.getItem('token'),
            userName: localStorage.getItem('username'),
            commentID: uuid.v4()
        }).then(
            window.location.reload(false)
        )
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
                <Comment.Group>
                    <Header as='h3' dividing>
                        Comments
                    </Header>
                    {
                        this.state.comments.length === 0 &&
                        <div class="ui floating message">
                            <p>No comments yet!</p>
                        </div>
                    }
                    <CommentItem comments={this.state.comments} />
                    {
                        localStorage.getItem('token') ?
                            <Form onSubmit={this.submitComment}>
                                <TextArea onChange={this.changeHandle} placeholder="Write comments.." />
                                <Button content='Add Comment' icon='comment' secondary />
                            </Form>
                            :
                            <div class="ui black message">Please Login to write comment.</div>
                    }

                </Comment.Group>
            </div>
        )
    }
}

export default CommentView;