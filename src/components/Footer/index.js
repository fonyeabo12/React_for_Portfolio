import React from "react";
import "../Pages/Assets/css/style.css";

function Footer() {
  let copy = "\u00a9";

  return (
    <footer className="footer">
      <span>
        <small>{copy} Copyright Frankblack</small>
        </span>
    </footer>
  );
}

export default Footer;
