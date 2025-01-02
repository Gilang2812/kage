'use client'
import { useObserver } from "@/utils/useObserver";
import React from "react";

const ContentHeader = ({ title }: { title: string }) => {
  const headerRef = useObserver<HTMLHeadingElement>("animate-typing")
  return (
    <header className="   flex justify-center capitalize pt-24 pb-12  text-tertiary font-bold text-3xl">
      <h2 ref={headerRef} className=" whitespace-nowrap overflow-hidden  text-center">{title}</h2>
    </header>
  );
};

export default ContentHeader;
