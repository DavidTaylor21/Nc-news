import CommentCard from "./CommentCard";
import { UserContext } from "../context/User";
import { useContext } from "react";
import DeleteButton from "./DeleteButton";
function CommentsList({ currentComments , setCurrentComments}) {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <>
      <h1 id="comments-header">Comments</h1>
      <ul className="comments-list">
        <li>
          {currentComments.map((comment) => {
            if (comment.author === loggedInUser.username) {
              return (
                <section className="comment-card" key={comment.comment_id}>
                  <CommentCard comment={comment} />
                  <DeleteButton comment_id={comment.comment_id} setCurrentComments={setCurrentComments}/>
                </section>
              );
            }
            return (
              <section className="comment-card" key={comment.comment_id}>
                <CommentCard comment={comment} />
              </section>
            );
          })}
        </li>
      </ul>
    </>
  );
}
export default CommentsList;
