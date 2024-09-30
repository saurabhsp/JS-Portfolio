"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="flex gap-5"> {/* Changed layout to flex for horizontal alignment */}
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link}>
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.link ? "text-purple-800" : "text-white"
            } hover:text-purple-500`} // Added hover effect
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
