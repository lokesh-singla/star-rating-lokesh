import React from 'react'
import Comment from './Comment'
import MultipleStars from './MultipleStars'
import './Merge.css'

const Merge = (props) => {
  return (
    <div className="merge">
        <MultipleStars
        mode={props.mode}
        numberOfStars={props.numberOfStars} 
        starColor={props.starColor}
        initiallySelectedStars={props.initiallySelectedStars}
        starMargin={props.starMargin}
        clickEvent={props.clickEvent}
        rootCSS={props.rootCSS}
        childStarCSS={props.childStarCSS}
        />
        <Comment
        mode={props.mode}
        blurEvent={props.blurEvent}
        inputEvent={props.inputEvent}
        focusEvent={props.focusEvent}
        maxCharLength={props.maxCharLength}
        rootCSS={props.rootCSS}
        />
    </div>
  )
}

export default Merge;