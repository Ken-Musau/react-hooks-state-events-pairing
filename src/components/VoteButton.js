import React from "react";

function VoteButton({
  upVoteCount,
  setupVoteCount,
  downVoteCount,
  setDownVoteCount,
}) {
  return (
    <div>
      <button onClick={() => setupVoteCount((prev) => prev + 1)}>
        {upVoteCount}👍
      </button>
      <button onClick={() => setDownVoteCount((prev) => prev + 1)}>
        {downVoteCount}👎
      </button>
    </div>
  );
}

export default VoteButton;
