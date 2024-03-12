import { Link } from "react-router-dom";
function HomeButton() {
  return (
    <Link to={`/`}>
      <label htmlFor="home"></label>
      <button id="home">Home</button>
    </Link>
  );
}
export default HomeButton;
