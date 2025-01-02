"use client";
/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Img = ({src,...props}: { src: string } & React.ComponentProps<typeof Image>) => {

  const notFound = "/images/Image_not_available.png";
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    return () => {
      setImgSrc(notFound);
    };
  }, [src]);
  
  return (
    <Image
      src={imgSrc}
      {...props}
      onError={() => setImgSrc("/images/Image_not_available.png")}
    />
  );
};

export default Img;
