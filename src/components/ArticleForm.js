import React from 'react';
import axios from 'axios'
import { Form, Input, Button } from 'antd';


const { TextArea } = Input;

class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.article.title,
            content: props.article.content,
            userName: props.article.userName,
            userToken: props.article.userToken,
            postID: props.article.userToken + props.article.postID
        };
        

    }
    
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    initialize1 = () => {
        
        console.log(this.title)
       
    }
    initialize2 = () => {
       
        this.setState({ content: this.props.article.content });
    }


    handleFormSubmit = (event, requestType, articleID) => {
       
        switch (requestType) {
            case 'post':
                return axios.post('https://shuvo-portal.herokuapp.com/api/', {
                    title: this.state.title,
                    content: this.state.content,
                    userName: this.state.userName,
                    userToken: this.state.userToken,
                    postID: this.state.postID
                })
                    .then(res => console.log(res))


            case 'put':
                return axios.put(`https://shuvo-portal.herokuapp.com/api/${articleID}/`, {
                    title: this.state.title,
                    content: this.state.content,
                    userName: this.state.userName,
                    userToken: this.state.userToken,
                    postID: this.state.postID
                })
                    .then(res =>  console.log(res));
                    
            default:
                
        }
       


    }
    render() {
      
        return (
            <div onLoad = { this.initialize1}>
                <Form onSubmitCapture={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.articleID
                )}>
                    <Form.Item label="Title">
                        <Input name="title" value={this.state.title}
                            onChange={this.handleInputChange} />
                    </Form.Item>
                    <Form.Item label="Content">
                        <TextArea rows={4} name="content" value={this.state.content}
                            onChange={this.handleInputChange} />
                    </Form.Item>
                    <Form.Item >
                        <Button onClick={() => window.location.reload(true)} type="primary" htmlType="submit"> {this.props.btnText}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );

    }

}

export default ArticleForm;