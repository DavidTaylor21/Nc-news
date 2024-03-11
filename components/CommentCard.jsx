function CommentCard({ comment }) {
  return (
    <section className="comment-card">
      <h1>{comment.author}</h1>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </section>
  );
}
export default CommentCard;
