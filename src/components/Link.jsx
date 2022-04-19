import React from "react";
import { useSelector } from "react-redux";

function Link() {
  const links = useSelector((state) => state.link.links);
  return (
    <div className="text-center space-x-4 space-y-4 cursor-pointer gap-4 p-4 text-gray-500">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={`text-xl flex items-center justify-center text-gray-300 underline ${link.color} hover:decoration-indigo-500`}>
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default Link;
