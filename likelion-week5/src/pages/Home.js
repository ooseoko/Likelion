import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>이곳은 홈페이지입니다.</p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
