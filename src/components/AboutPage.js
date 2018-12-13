import React from "react";
import "../styles/about-page.css";

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>An app where you can add every day your thoughtful thoughts.</p>
    </div>
  );
};

export default AboutPage;
