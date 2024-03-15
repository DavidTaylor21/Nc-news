import { patchVotesOnArticle, patchVotesOnComment } from "../Api";
import { useState } from "react";
function VoteButton({ setVotes, votes, id }) {
  const [err, setErr] = useState(null);
  function handleVote(event) {
    setVotes((currVotes) => {
      const incNum = parseInt(event.target.id);
      if (id.comment_id) {
        patchVotesOnComment(id.comment_id, incNum).catch((err) => {
          setVotes(votes);
          setErr("Something went wrong, please try again.");
        });
      } else if (id.article_id) {
        patchVotesOnArticle(id.article_id, incNum).catch((err) => {
          setVotes(votes);
          setErr("Something went wrong, please try again.");
        });
      }
      setErr(null);
      return currVotes + incNum;
    });
  }
  return (
    <div>
      <p>Votes: {votes}</p>
      {err ? <p>{err}</p> : null}
      <button className="vote-button">
        <img
          src="/images/thumbs-down.png"
          alt="thumbs down"
          id="-1"
          className="voteImage"
          onClick={handleVote}
        />
      </button>
      <button className="vote-button">
        <img
          src="/images/thumbs-up.png"
          alt="thumbs up"
          id="1"
          className="voteImage"
          onClick={handleVote}
        />
      </button>
    </div>
  );
}
export default VoteButton;
