import {Link} from "react-router-dom"
function UsersButton(){
    return (
        <Link to={`/users`}>
          <label htmlFor="change-user"></label>
          <button id="change-user">change user</button>
        </Link>
      );
}
export default UsersButton