import React from 'react';
import { useState } from 'react';
import './MultipleStars.css';
import { StarWrapper } from './StarWrapper';

const MultipleStars = (props) => {

    return (
        <div className="multiStars" style={props.rootCSS}>
            <h1>GIVE US RATING!</h1>
                <StarWrapper
                numberOfStars={props.numberOfStars}
                mode={props.mode}
                clickEvent={props.clickEvent}
                childStarCSS={props.childStarCSS}
                initiallySelectedStars={props.initiallySelectedStars}
                rootCSS={props.rootCSS}
                />
        </div>
    )
}

export default MultipleStars;