import Link from "next/link";
import React from "react";

const NavLink = ({ href, title, onClick, className = "" }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white ${className}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
