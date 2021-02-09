import Link from "next/link";
import React from "react";

const Logo = () => (
  <div className="logoContainer">
    <Link href="/">
      <a>Easy Burger</a>
    </Link>

    <style jsx>
      {`
        a {
          font-weight: 600;
          font-size: 1.5em;
        }
      `}
    </style>
  </div>
);

export default Logo;
