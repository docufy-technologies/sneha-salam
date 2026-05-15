"use client";

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type React from "react";
import { useRef, useState } from "react";
import type { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

function NavBar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="mx-auto flex w-fit text-nowrap rounded-full border-2 border-secondary bg-transparent backdrop-blur-xl z-100 fixed top-1 left-1/2 -translate-x-1/2 px-2 py-1 max-sm:p-1 gap-4 max-sm:gap-0"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <NavTab setPosition={setPosition}>
        <Link to="/">Home</Link>
      </NavTab>
      <NavTab setPosition={setPosition}>
        <Link to="/about">About</Link>
      </NavTab>
      <NavTab setPosition={setPosition}>
        <a
          href="https://calendly.com/snehasalamhere/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book A Meeting
        </a>
      </NavTab>

      <Cursor position={position} />
    </ul>
  );
}

const NavTab = ({
  children,
  setPosition,
  className,
}: {
  children: React.ReactNode;
  setPosition: (position: Position) => void;
  className?: ClassNameValue;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={cn(
        "relative z-10 block cursor-pointer px-3 py-1.5 rounded-full hover:bg-secondary text-sm!",
        className,
      )}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-9 -translate-y-2 max-sm:-translate-y-2 rounded-full bg-secondary"
    />
  );
};

export default NavBar;
