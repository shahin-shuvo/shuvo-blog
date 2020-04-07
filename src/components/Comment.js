import React from 'react'
import {Comment} from 'semantic-ui-react'

function createCommentList(comment) {
    return (
        <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/leaves/4.png' />
            <Comment.Content>
                <Comment.Author as='a'>{comment.userName}</Comment.Author>
                <Comment.Metadata>
                    <div></div>
                </Comment.Metadata>
                <Comment.Text>{comment.comment}</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    );
}

const CommentExampleComment = (props) => {
    return (
        <div>
            {props.comments.map(createCommentList)}
        </div>
    );

}

export default CommentExampleComment;