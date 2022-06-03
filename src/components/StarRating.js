import React from 'react';
import PropTypes from 'prop-types';
import Merge from './Merge'

const StarRating = (props) => {

  if ((props.mode !== "view") && (props.mode !== "edit")) {
    console.error("ENTER CORRECT INFO!")
    return;
  }

  function clickEvent() {

    const { clickEvent } = props;

    (props.mode === "edit") && clickEvent && clickEvent();
  }

  function blurEvent() {

    const { blurEvent } = props;

    (props.mode === "edit") && blurEvent && blurEvent();
  }

  function inputEvent() {

    const { inputEvent } = props;

    (props.mode === "edit") && inputEvent && inputEvent();
  }

  function focusEvent() {

    const { focusEvent } = props;

    (props.mode === "edit") && focusEvent && focusEvent();
  }

  return (
    <Merge
      mode={props.mode}
      numberOfStars={props.numberOfStars}
      initiallySelectedStars={props.initiallySelectedStars}
      clickEvent={clickEvent}
      blurEvent={blurEvent}
      inputEvent={inputEvent}
      focusEvent={focusEvent}
      maxCharLength={props.maxCharLength}
      rootCSS={props.rootCSS}
      childStarCSS={props.childStarCSS}
    />
  );
}

StarRating.propTypes = {
  mode: PropTypes.string.isRequired,
  numberOfStars: PropTypes.number.isRequired,
  initiallySelectedStars: PropTypes.number.isRequired,
  maxCharLength: PropTypes.number,
  clickEvent: PropTypes.func,
  focusEvent: PropTypes.func,
  blurEvent: PropTypes.func,
  inputEvent: PropTypes.func,
  rootCSS: PropTypes.object,
  childStarCSS: PropTypes.object,
}

export default StarRating