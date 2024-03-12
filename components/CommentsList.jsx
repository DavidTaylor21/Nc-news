import CommentCard from "./CommentCard"
function CommentsList({ currentComments }) {
  return (
    <>
      <h1 id="comments-header">Comments</h1>
      <ul className="comments-list">
        <li>
            {currentComments.map((comment)=>{
                return <CommentCard comment={comment} key={comment.comment_id}/>
            })}
        </li>
      </ul>
    </>
  );
}
export default CommentsList;