import { fetchUsers } from "../Api";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loading from "./Loading";
function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <h1>Users</h1>
      <div className="users-list">
        {...users.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    </>
  );
}
export default Users;
