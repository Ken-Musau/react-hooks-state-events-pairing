import React from "react";
import Comment from "./Comment.js";

function Comments({ comments }) {
  console.log(comments);
  return (
    <div>
        
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          user={comment.user}
          comment={comment.comment}
        />
      ))}
    </div>
  );
}

export default Comments;
