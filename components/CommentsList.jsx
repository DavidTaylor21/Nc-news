import CommentCard from "./CommentCard"
function CommentsList({ currentComments }) {
  return (
    <>
      <h1 id="comments-header">Comments</h1>
      <ul className="comments-list">
        <li>
            {currentComments.map((comment)=>{
                return <CommentCard comment={comment}/>
            })}
        </li>
      </ul>
    </>
  );
}
export default CommentsList;
