"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: "/awards", label: "Awards" },
    { href: "/gallery", label: "Gallery" },
    { href: "/courses", label: "Courses" },
    { href: "/auth", label: <User strokeWidth={2} /> },
  ];

  return (
    <header>
      <nav className="w-full flex justify-between gap-10 items-center">
        <p>LOGO</p>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center transition">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="forward-link">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex gap-6 items-center p-0 m-0">
          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ opacity: 1, y: 0, x: -5 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{ duration: 0.3 }}
                className="flex gap-6 items-center"
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="forward-link h-6 items-center flex"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Toggle Button */}
          <AnimatePresence>
            <button onClick={toggleMenu} className="md:hidden  cursor-pointer">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </button>
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
