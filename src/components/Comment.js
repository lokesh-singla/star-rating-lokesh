import React from 'react';
import { useState } from 'react';
import './Comment.css';
import { Input } from './Input';
import { CommentList } from './CommentList';

const Comment = (props) => {

    const [comments, setComments] = useState([]);

    const handleSetComments = (comment) => {

        setComments([
            ...comments,
            comment.toUpperCase()
        ]);
    }

    return (
        <div className="detailBox" style={props.rootCSS}>
            <h1>GIVE US YOUR VIEWS!</h1>
            <div className="actionBox">
                <Input
                    maxCharLength={props.maxCharLength}
                    focusEvent={props.focusEvent}
                    blurEvent={props.blurEvent}
                    inputEvent={props.inputEvent}
                    mode={props.mode}
                    onClick={handleSetComments}
                />
                <CommentList comments={comments} />
            </div>
        </div>
    )
}

export default Comment;