import { Link } from "react-router-dom";
function TopicCard({ topic }) {
  return (
    <>
      <Link to={`/${topic.slug}`}>
        <h1>{topic.slug}</h1>
      </Link>
      <p>{topic.description}</p>
    </>
  );
}
export default TopicCard;
