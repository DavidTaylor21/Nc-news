import { UserContext } from "../context/User";
import { useContext, useState } from "react";
import { postComment } from "../Api";
function CommentAdder({ setCurrentComments, article_id }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [commentInput, setCommentInput] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const body = {
      username: loggedInUser.username,
      body: commentInput,
    };
    setCurrentComments((currComments) => {
      const newCommentBody = {
        body: commentInput,
        author: loggedInUser.username,
        votes: 0,
        comment_id: currComments.length + 1,
      };
      postComment(article_id, body).catch((err) => {
        return currComments;
      });
      setCommentInput("");
      return [newCommentBody, ...currComments];
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
          rows="5"
          cols="60"
        ></textarea>
        <button type="submit" id="comment-submit">
          post
        </button>
      </form>
    </>
  );
}
export default CommentAdder;
