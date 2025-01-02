"use client";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaSun } from "react-icons/fa6";
import Img from "./Img"; 
import { NavLinks } from "./NavLinks";
import { ToggleTheme } from "./ToggleTheme";

const Header = () => { 
  return (
    <header
      className={`capitalize    fixed header  
      }  w-full   top-0 shadow z-50`}
    >
      <section className="flex text-primary  justify-between border-b px-4 py-2  [&_nav]:flex [&_nav]:gap-8 [&_nav]:items-center">
        <nav>
          {/* <Img src="https://flagcdn.com/w40/id.png" alt="Bendera Indonesia" width={50} height={50} />
            <Img src="https://flagcdn.com/w40/gb.png" alt="Bendera Inggris"  width={50} height={50}/> */}
          <select
            name="flag"
            id="flag"
            className="bg-transparent focus:outline-none"
          >
            <option className="drop-shadow   " value="id"></option>
            <option className="drop-shadow" value="en"></option>
          </select>
          <FaEnvelope />
          <BsTelephoneFill />
          <ToggleTheme />
        </nav>
        <nav>
          <Link href="#">
            live info
            <FaSun />
          </Link>
          <Link href="#">E-Canang</Link>
        </nav>
      </section>
      <nav className="px-8 gap-8 text-nowrap  flex justify-around [&_ul]:flex [&_li]:basis-[200px]  [&_li]:grow [&_ul]:justify-evenly">
        <figure className="basis-[200px] min-w-fit bg justify-self-center">
          <Link href="#">
            <Img
              alt="logo"
              width={100}
              height={100}
              className="size-20 bg-gradient-to-br from-slate-200/70 to-slate-400 p-4 rounded-[50%] "
              src="/logo.svg"
              priority
            />
          </Link>
        </figure>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
