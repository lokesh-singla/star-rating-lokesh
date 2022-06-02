import React, { useState } from 'react';

export const Input = (props) => {

    const [comment, setComment] = useState("");

    function handleSetComments(event){
        event.preventDefault();
        event.stopPropagation();
        if(comment.trim()!=="") props.onClick(comment);
        setComment("");
    }

    return (
        <>
            <form type="submit">
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Your comments" value={comment} aria-label="ENTER YOUR COMMENY"
                        disabled={props.mode==="view"}
                        maxLength={props.maxCharLength}
                        onFocus={(e) => {
                            e.preventDefault()
                            e.target.style.backgroundColor = "yellow"
                            props.focusEvent()
                        }}
                        onBlur={(e) => {
                            e.target.value = e.target.value.toUpperCase()
                            e.target.style.backgroundColor = "white"
                            props.blurEvent()
                        }}
                        onChange={(e) => {
                            setComment(e.target.value)
                            props.inputEvent();
                        }} />
                </div>
                <div className="form-group">
                    <button className="bt" disabled={props.mode==="view"} onClick={handleSetComments} aria-label="COMMENT ADDED">Add</button>
                </div>
            </form>
        </>
    )
}

