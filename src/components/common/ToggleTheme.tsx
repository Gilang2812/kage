"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark"; 
  return (
    <section className="flex items-center gap-2">
      <FaSun className=" dark:text-slate-400   trans-eio" />
      <div className="bg-transparent border-slate-500 dark:border-primary trans-eio  border-2   p-1 rounded-full">
        <div
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="cursor-pointer relative h-4 w-12    rounded-full "
        >
          <div
            className={`absolute top-1/2  trans-eio  -translate-y-1/2  ${
              isDark ? "translate-x-[200%]" : ""
            } rounded-full h-4 w-4 bg-slate-500 dark:bg-primary`}
          ></div>
        </div>
      </div>
      <BsMoonStarsFill className="text-slate-500 trans-eio dark:text-primary" />
    </section>
  );
};
