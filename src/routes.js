import React from 'react'
import { Route } from 'react-router-dom'

import ArticleList from "./containers/ArticleListView"
import ArticleDetail from "./containers/ArticleDetailView"
import Login from "./containers/Login"
import Signup from "./containers/Signup"
import Profile from "./containers/Profile"
import CommentView from "./containers/CommentView"
import Covid19 from "./components/Covid19"


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/articles/:articleID/' component={ArticleDetail} />
        <Route exact path='/articles/comment/:articleID/' component={CommentView} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/profile/' component={Profile} />
        <Route exact path='/covid-19/' component={Covid19} />
    </div>
);

export default BaseRouter;