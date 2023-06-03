import React from "react";
import VoteButton from "./VoteButton";

function Comment({ user, comment }) {
  return (
    <div>
      <h2>{user}</h2>
      <p>{comment}</p>
      <VoteButton />
    </div>
  );
}

export default Comment;
