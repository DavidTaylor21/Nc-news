import { Link } from "react-router-dom";
function HomeButton() {
  return (
    <Link to={`/`}>
      <label htmlFor="home"></label>
      <button id="home">take me home</button>
    </Link>
  );
}
export default HomeButton;
