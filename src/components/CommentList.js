import React from 'react'

export const CommentList = (props) => {
    return (
        <ul className="commentList">
            {
                props.comments.map((ele, i) => {
                    return (
                        <li key={i}>
                            <div className="commenterImage">
                                <img src="http://placekitten.com/50/50" alt='' aria-labelledby='USER IMAGE'/>
                            </div>
                            <div className="commentText">
                                <p className="">{ele}</p>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    )
}
