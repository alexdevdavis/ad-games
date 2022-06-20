import { React, useState, useEffect, useContext } from "react";
import { adGamesApi } from "../utils/api";
import { UserContext } from "../contexts/User";
import ButtonComponent from "./ButtonComponent";
import ErrorPanel from "./ErrorPanel";

export default function UserCard() {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [userSelect, setUserSelect] = useState("select user");
  const [btnMessage, setBtnMessage] = useState("login");
  const [error, setError] = useState(null);

  useEffect(() => {
    adGamesApi
      .get("/users")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => setError(err));
  }, [user]);

  const handleLogin = (event) => {
    if (!user) {
      event.preventDefault();
      users.forEach((user) => {
        if (user.username === event.target.id) {
          setUser(user);
          setBtnMessage("log out");
        }
      });
    } else {
      event.preventDefault();
      setUser(null);
      setBtnMessage("login");
    }
  };

  const handleChange = (event) => {
    setUserSelect(event.target.value);
  };

  if (error) {
    return <ErrorPanel error={error} />;
  }

  if (user) {
    return (
      <section className="user-panel">
          <img
            className="user-panel__user-image"
            src={user.avatar_url}
            alt="user avatar"
          />
          <p className="user-panel__username">{user.username}</p>
        <ButtonComponent
          className="user-login--button"
          btnId={userSelect}
          clickFn={handleLogin}
          btnMessage={btnMessage}
        />
      </section>
    );
  }

  return (
    <>
      <form className="user-login__form">
        <select
          id={"select-user"}
          className="user-login__form--select"
          onChange={handleChange}
        >
          <option className="user-login__form--option">{userSelect}</option>
          {users.map((user) => {
            return (
              <option className="user-login__form--option" key={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
        <ButtonComponent
          className="user-login--button"
          btnId={userSelect}
          clickFn={handleLogin}
          isDisabled={false}
          btnMessage={btnMessage}
        />
      </form>
    </>
  );
}
