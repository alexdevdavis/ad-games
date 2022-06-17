import { React, useState, useEffect, useContext } from "react";
import { adGamesApi } from "../utils/api";
import { UserContext } from "../contexts/User";
import UserCard from "./UserCard";
import UserVote from "./UserVote";

export default function UsersPanel() {
  const { user, setUser } = useContext(UserContext);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [btnMessage, setBtnMessage] = useState("login");

  useEffect(() => {
    adGamesApi.get("/users").then((res) => {
      setUsers(res.data.users);
      setIsLoading(false);
    });
  }, []);

  const handleUserClick = (event) => {
    const foundUser = users.find((user) => {
      return user.username === event.target.id;
    });
    if (foundUser) {
      setUser(foundUser);
      setIsBtnDisabled(true);
      setBtnMessage("logged in");
    }
  };

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <ul className="users-panel">
      {users.map((oneUser) => {
        return (
          <li className="users-panel__user-card" key={oneUser.username}>
            <UserCard className="users-panel__user-card" user={oneUser} />
            <UserVote
              btnId={oneUser.username}
              clickFn={handleUserClick}
              isDisabled={isBtnDisabled}
              btnMessage={btnMessage}
            />
          </li>
        );
      })}
    </ul>
  );
}
