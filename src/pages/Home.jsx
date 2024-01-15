import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/app"}>Welcome to the Ibom Languages Project</Link>
    </div>
  );
};

export default Home;
