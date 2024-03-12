import {Link} from 'react-router-dom'
function TopicCard({ topic }) {
  return (
    <Link to={`/?topic=${topic.slug}`}>
      <h1>{topic.slug}</h1>
      <p>{topic.description}</p>
    </Link>
  );
}
export default TopicCard;
