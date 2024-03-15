import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);

  return <div>Welcome back {user && user.name}</div>;
};

export default Home;
