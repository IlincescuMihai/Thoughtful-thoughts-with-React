import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Thoughtful thoughts.</h1>

      <h2>Get Started</h2>
      <ol>
        <li>
          Create <Link to="/fuel-savings">an account </Link>
        </li>
        <li>
          Add an <Link to="/fuel-savings">thoughtful thought</Link>
        </li>
      </ol>
    </div>
  );
};

export default HomePage;
