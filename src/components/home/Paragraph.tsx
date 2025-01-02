'use client'
import { useObserver } from "@/utils/useObserver";
import React, { FC  } from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph: FC<Props> = ({ children }) => {
  const paragraphRef = useObserver<HTMLParagraphElement>("animate-typingMultiline");

  return (
    <p ref={paragraphRef} className="relative  overflow-clip text-xl">
      {children}
    </p>
  );
};

export default Paragraph;
