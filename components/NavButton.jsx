import { Link } from "react-router-dom";
function NavButton({ path }) {
  let link = "";
  if (path === "Home") {
    link = "/";
  } else {
    link = path;
  }
  return (
      <Link to={link}>
        <button id={`change-${path}`}>{path}</button>
      </Link>
  );
}
export default NavButton;
