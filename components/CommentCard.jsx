function CommentCard({ comment }) {
  return (
    <>
      <h1>{comment.author}</h1>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </>
  );
}
export default CommentCard;
