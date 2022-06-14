import { React, useContext } from "react";
import { UserContext } from "../contexts/User";
import UserCard from "./UserCard";

export default function UserPanel() {
  const user = useContext(UserContext);

  return <UserCard user={user} />;
}
