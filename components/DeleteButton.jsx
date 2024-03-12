import { deleteComment } from "../Api";
import { useState } from "react";
function DeleteButton({ comment_id, setCurrentComments }) {
  const [deleting, setDeleting] = useState(false);
  const [err, setErr] = useState(null);
  function handleDelete() {
    setErr(null);
    setDeleting(true);
    deleteComment(comment_id)
      .then(() => {
        setDeleting(false);
        setCurrentComments((currComments) => {
          return currComments.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
        });
      })
      .catch((err) => {
        setErr(err);
      });
  }
  return (
    <>
      {deleting ? (
        <p>Please wait...</p>
      ) : (
        <button onClick={handleDelete}>Delete Comment</button>
      )}
      <p>{err ? "An error had occured please try again" : null}</p>
    </>
  );
}
export default DeleteButton;
