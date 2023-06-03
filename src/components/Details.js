import React, { useState } from "react";
import VoteButton from "./VoteButton";

function Details({ videoInfo }) {
  const { title, views, createdAt, upvotes, downvotes } = videoInfo;
  const [upVoteCount, setupVoteCount] = useState(upvotes);
  const [downVoteCount, setDownVoteCount] = useState(downvotes);

  return (
    <div>
      <h1>{title}</h1>
      <p>
        {views} views | uploaded {createdAt}
      </p>
      <VoteButton
        upVoteCount={upVoteCount}
        setupVoteCount={setupVoteCount}
        downVoteCount={downVoteCount}
        setDownVoteCount={setDownVoteCount}
      />
    </div>
  );
}

export default Details;
