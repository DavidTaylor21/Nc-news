import { Link } from "react-router-dom";
function TopicButton(){
  return (
    <Link to={`/topic`}>
      <label htmlFor="topics-button"></label>
      <button id="topics-button">Topics</button>
    </Link>
  );
}
export default TopicButton
