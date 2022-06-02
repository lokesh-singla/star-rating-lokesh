import React, {useCallback} from 'react';
import './Star.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Star=(props)=>{

    // let styles={
    //     color: (props.index <= props.rating) ? props.starColor : null,
    //     margin: props.starMargin
    // }

    const handleOnClick= useCallback(
      (e) => {
        if(props.mode==="view"){
            e.preventDefault();
            return;
        }

        e.stopPropagation()
        props.onClick(props.index)
      },
    )
    

    function handleOnFocus(){
        console.log("STAR FOCUSED");
    }

    function handleOnBlur(){
        console.log("STAR BLURRED");
    } 

    return (
        <button type="button" 
        onClick={handleOnClick} 
        className={props.isSelected ? "on" : "off"}
        disabled={props.mode==="view"}
        onFocus={()=>handleOnFocus()}
        onBlur={()=>handleOnBlur()}
        style={props.childStarCSS}
        >
        &#xe006;
        </button>
    )
}

export default Star;