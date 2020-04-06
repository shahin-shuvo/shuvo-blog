import React from 'react'
import axios from 'axios'

import Article from "../components/Article"

import ProfileView from "../components/ProfileView"



class Profile extends React.Component {

    state = {
        articles: [],
        userdata: []
    }



    componentDidMount() {
        const token = localStorage.getItem('token');
        axios.get(`https://shuvo-blog.herokuapp.com/myprofile/${token}/`)
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log("article", this.state.articles)
            })

        axios.get(`https://shuvo-blog.herokuapp.com/myprofile/user/${token}/`)
            .then(result => {
                this.setState({
                    userdata: result.data[0]
                });
                console.log("user", this.state.userdata)
            })

    }


    render() {
        return (
            <div>
                <ProfileView user={this.state.userdata} totalPost={this.state.articles.length} />
                <div style={{ marginTop: "10px" }}>
                    <Article data={this.state.articles} />
                </div>

            </div>

        )
    }
}


export default Profile;