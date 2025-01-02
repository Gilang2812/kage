import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWifi,
  FaYoutube,
} from "react-icons/fa6";

import Link from "next/link";
export const SosMedAccount = () => {
  return (
    <nav className="h-fit bg-white/40 border border-white-20 rounded-full py-4 px-2">
    <Link className="opacity-0 animate-[fade_1s_2s_forwards]" href="">
      <FaFacebook />
    </Link>
    <Link className="opacity-0 animate-[fade_1s_2.2s_forwards]" href="">
      <FaInstagram />
    </Link>
    <Link className="opacity-0 animate-[fade_1s_2.4s_forwards]" href="">
      <FaWifi />
    </Link>
    <Link className="opacity-0 animate-[fade_1s_2.7s_forwards]" href="">
      <FaTiktok />
    </Link>
    <Link className="opacity-0 animate-[fade_1s_3s_forwards]" href="">
      <FaYoutube />
    </Link>
  </nav>
  )
}
