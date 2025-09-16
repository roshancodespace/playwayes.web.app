"use client"
import Link from "next/link";
import React, { useState } from "react";
import { PiGithubLogo } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="max-w-4xl h-[100px] fixed left-0 right-0 px-3 mx-auto top-2 md:top-4 z-50">
      <div className="rounded-full backdrop-blur-sm flex justify-between items-center shadow-[0px_0px_0px_0.5px_#2d3748] bg-[#ffffff06] px-5 py-4 mt-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Playwaves"
            className="size-10 rounded-full"
          />
          <h1
            className="text-2xl ml-1"
            style={{ fontFamily: "var(--font-marck)" }}
          >
            Playwaves
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <Link
            href="/#home"
            className="inline-block mx-4 cursor-pointer hover:underline"
          >
            Home
          </Link>
          <Link
            href="/#features"
            className="inline-block mx-4 cursor-pointer hover:underline"
          >
            Features
          </Link>
          <Link
            href="/#showcase"
            className="inline-block mx-4 cursor-pointer hover:underline"
          >
            Showcase
          </Link>
          <Link
            href="/#downloads"
            className="inline-block mx-4 cursor-pointer hover:underline"
          >
            Downloads
          </Link>
          <Link
            href="https://github.com/Bhanu7773-dev/PlayWaves-Releases"
            className="inline-flex mx-4 cursor-pointer hover:underline flex-nowrap items-end gap-1"
          >
            <PiGithubLogo size={23} />
            Github
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown with motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-2 rounded-2xl bg-[#111]/90 backdrop-blur-md shadow-lg py-4 flex flex-col items-center space-y-4"
          >
            <Link href="/#home" onClick={toggleMenu} className="hover:underline">
              Home
            </Link>
            <Link
              href="/#features"
              onClick={toggleMenu}
              className="hover:underline"
            >
              Features
            </Link>
            <Link
              href="/#showcase"
              onClick={toggleMenu}
              className="hover:underline"
            >
              Showcase
            </Link>
            <Link
              href="/#downloads"
              onClick={toggleMenu}
              className="hover:underline"
            >
              Downloads
            </Link>
            <Link
              href="https://github.com/Bhanu7773-dev/PlayWaves-Releases"
              onClick={toggleMenu}
              className="flex items-center gap-1 hover:underline"
            >
              <PiGithubLogo size={22} />
              Github
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;
