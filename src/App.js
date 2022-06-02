import './App.css';
import StarRating from './components/StarRating';

function App() {

  function handleClickEvent(){
    console.log("USER CLICKED!");
  }

  function handleBlurEvent(){
    console.log("USER BLURED");
  }
  
  function handleInputEvent(){
    console.log("USER INPUT!");
  }

  function handleFocusEvent(){
    console.log("USER FOCUSED!");
  }

  const style={
    color:"red"
  }

  const childStyle={
    height: 35,
    color:"black",
    margin:"2px"
  }

  return (
    <div className="App">
      <StarRating
        mode={"edit"}
        numberOfStars={5}
        initiallySelectedStars={2}
        clickEvent={handleClickEvent}
        blurEvent={handleBlurEvent}
        inputEvent={handleInputEvent}
        focusEvent={handleFocusEvent}
        maxCharLength={15}
        rootCSS={style}
        childStarCSS={childStyle}
      />
    </div>
  );
}

export default App;
