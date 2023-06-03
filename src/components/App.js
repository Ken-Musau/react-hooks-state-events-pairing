import React, { useState } from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";
import Details from "./Details.js";

function App() {
  const [hideComments, setHideComments] = useState(false);

  const toggleComments = () => {
    setHideComments((prev) => !prev);
  };
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details videoInfo={video} />
      <br />
      <button onClick={toggleComments}>
        {hideComments ? "Show Comments" : "Hide Comments"}
      </button>
      <hr />
      {hideComments ? null : <Comments comments={video.comments} />}
    </div>
  );
}

export default App;
