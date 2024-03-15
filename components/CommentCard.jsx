import VoteButton from "./VoteButton";
import {useState} from 'react'
function CommentCard({ comment }) {
  const [votes, setVotes] = useState(comment.votes)
  return (
    <>
      <h1>{comment.author}</h1>
      <p>{comment.body}</p>
      <VoteButton setVotes={setVotes} votes={votes} id={comment} />
    </>
  );
}
export default CommentCard;
