import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

type Props = {
  link: string;
  label: string;
};

export const   NavItems: FC<Props> = ({ link, label }) => {
  const pathname = usePathname()
  const isActive = pathname === link;
  return (
    <li>
      <Link
        className={`text-center ${isActive?"text-header bg-tertiary dark:bg-header dark:text-tertiary ":""}  hover:text-header  dark:hover:text-tertiary trans-eio hover:scale-110  px-2 dark:hover:bg-header hover:bg-tertiary p-1 rounded-full`}
        href={link}
      >
        {label}
      </Link>
    </li>
  );
};
