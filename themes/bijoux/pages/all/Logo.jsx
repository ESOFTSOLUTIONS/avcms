import React from "react";
import "./Logo.scss";

function Logo() {
  return (
    <div>
      <a href="/">
        <img className="logo" src="/logo-h.svg" alt="bijoux" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 1,
};
