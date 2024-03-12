import { UserContext } from "../context/User";
import { useContext, useState } from "react";
import { postComment } from "../Api";
function CommentAdder({ setCurrentComments, article_id }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [commentInput, setCommentInput] = useState("");
  const [err, setErr] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setIsPosting(true);
    setErr(null);
    const body = {
      username: loggedInUser.username,
      body: commentInput,
    };
    setCommentInput("");
    postComment(article_id, body)
      .then((comment) => {
        setIsPosting(false);
        setCurrentComments((currComments) => {
          return [comment, ...currComments];
        });
      })
      .catch((err) => {
        setErr(err);
      });
  }
  function handleInput(event) {
    setCommentInput(event.target.value);
  }
  return !loggedInUser.username ? (
    <p>Log in to comment</p>
  ) : (
    <>
      <p>Add a new comment:</p>
      <form onSubmit={handleSubmit} id="comment-form">
        <textarea
          type="text"
          placeholder="Type comment here"
          value={commentInput}
          onChange={handleInput}
          required
          rows="3"
          cols="40"
        ></textarea>
        <button type="submit" id="comment-submit">
          post
        </button>
      </form>
      <p>{err ? "Unable to post comment, please try again" : null}</p>
      <p>{isPosting? "Posting comment, please wait..." : null}</p>
    </>
  );
}
export default CommentAdder;
