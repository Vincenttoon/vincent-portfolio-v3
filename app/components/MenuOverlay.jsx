import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose, id }) => {
  return (
    <div id={id} className="md:hidden fixed inset-0 z-40">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Panel under the navbar (navbar ~56px high => top-14) */}
      <div className="absolute top-14 left-0 right-0 bg-[#121212] border-t border-[#33353F] shadow-xl">
        <ul className="flex flex-col py-4 items-center gap-2">
          {links.map((link) => (
            <li key={link.title}>
              <NavLink
                href={link.path}
                title={link.title}
                onClick={onClose}
                className="text-xl"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuOverlay;
