"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  // close on Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setNavBarOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = navBarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navBarOpen]);

  const closeMenu = () => setNavBarOpen(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          Vincent Toon
        </Link>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setNavBarOpen((v) => !v)}
            aria-controls="mobile-menu"
            aria-expanded={navBarOpen}
            className="flex items-center px-3 py-2 border rounded border-slate-400 text-slate-200 hover:text-white hover:border-white"
          >
            {navBarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile overlay/menu */}
      {navBarOpen && (
        <MenuOverlay id="mobile-menu" links={navLinks} onClose={closeMenu} />
      )}
    </nav>
  );
};

export default NavBar;
