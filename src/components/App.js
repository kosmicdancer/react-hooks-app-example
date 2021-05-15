import React from "react";
// import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <header>
      <h1>"Now"</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      </header>
      
    {/* <div className="example">
        <img
          src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
          alt="a deeply impressed man, perhaps thinking 'whoa'"
        />
      <p>Whoa!</p>
    </div>
    <div className="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5TbUxGZtwGI"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="time video"
        allowFullScreen
      ></iframe>
    </div> */}
      <ExampleComponent />  <TestComponent /> 
    </div>
  );
}

export default App;
