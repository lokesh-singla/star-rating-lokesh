import React from 'react';
import Star from './Star';
import { useState,useCallback } from 'react';

export const StarWrapper = (props) => {

    const [rating, setRating] = useState(-1+props.initiallySelectedStars);

    function handleOnClick(index){
        setRating(index);
    }

    const handleClickEvent= useCallback(
        (e) => {
          if(props.mode==="view"){
              e.preventDefault();
              return;
          }
  
          e.stopPropagation()
          props.clickEvent()
        },
      [props])

    return (
        <div style={props.rootCSS} onClick={handleClickEvent}>
            {
                Array.from({ length: props.numberOfStars }).map((ele, i) => {
                    return (
                        <Star
                            mode={props.mode}
                            index={i}
                            isSelected={i <= rating ? true : false}
                            onClick={handleOnClick}
                            childStarCSS={props.childStarCSS}
                        />
                    );
                })
            }
        </div>
    )
}
