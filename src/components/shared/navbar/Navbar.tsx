"use client";
import React, { useRef, useState } from "react";
import Container from "../Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import mainLogo from "../../../assets/main-logo.svg";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constant/common";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (latestValue > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 15 }}
    >
      <Container className="relative">
        <div
          className={cn(
            " h-[90px]  flex justify-between lg:justify-normal items-center gap-5",
            { "opacity-0": hidden }
          )}
        >
          {/* mobile */}
          <MobileNav />
          {/* desktop */}
          <div
            className={cn(
              "flex-1 hidden lg:flex justify-between items-center",
              {
                "hidden opacity-0": hidden,
              }
            )}
          >
            <Link href="/">
              <Image
                className=""
                height={40}
                width={180}
                src={mainLogo}
                alt=""
              />
            </Link>
            <div className="flex justify-between items-center gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-2xl leading-8 group relative link-before uppercase text-white"
                >
                  {item.pathName}
                  <span className="absolute bottom-0 left-0  h-[3px] rounded-md w-0 group-hover:w-full duration-200 bg-white z-10 transition-all"></span>
                </Link>
              ))}
            </div>
            <div>
              <Link href="contact">
                <Button>Appoinment</Button>
              </Link>
            </div>
          </div>

          {/* affter scroll 80 pixel then show the small nav */}
        </div>
      </Container>
    </motion.div>
  );
};

export default Navbar;
