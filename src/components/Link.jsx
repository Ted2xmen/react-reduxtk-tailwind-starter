import React from "react";
import { useSelector } from "react-redux";

function Link() {
  const links = useSelector((state) => state.link.links);
  return (
    <div className="m-4 flex cursor-pointer justify-center gap-4 p-4 text-gray-500">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={`text-xl text-gray-300 underline ${link.color} hover:decoration-indigo-500 `}
        >
          {link.name}
        </a>
      ))}
      <h3>by ted2xmen</h3>
    </div>
  );
}

export default Link;
