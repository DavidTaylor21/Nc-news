import { UserContext } from "../context/User";
import { useContext } from "react";
function UserCard({ user }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  function handleLogIn() {
    setLoggedInUser(user);
  }
  return (
    <section className="user-card" onClick={handleLogIn}>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <img
        src={user.avatar_url}
        id="avatar-image"
        alt={`${user.username}'s avatar image`}
      />
    </section>
  );
}
export default UserCard;
