import React, { FC } from "react";
import Paragraph from "../home/Paragraph";

type Props = {
  children: React.ReactNode;
  route: string;
  location: string;
};
export const ToKotoGadangItems: FC<Props> = ({ location, children, route  }) => {
  const contact :string[]=  ['penyewaan kendaraan', 'taxi online','transportasi umum']
  return (
    <article>
      <header className="capitalize space-y-4">
        <h3 className="text-tertiary font-bold text-xl"> {route}</h3>
        <h4 className="font  font-semibold text-lg">{location}</h4>
      </header>
      <div className="space-y-2">
        <Paragraph>{children}</Paragraph>
        <Paragraph>
            Untuk penyewaan kendaraan dapat menghubungi kontak berikut:{contact.map((item)=>`${item}, ` )}
        </Paragraph>
      </div>
    </article>
  );
};
