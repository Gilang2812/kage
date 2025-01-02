import React, { FC } from "react";
import { SustainabilityItem } from "./SustainabilityItem";

type Props = {
  perilaku: string[];
  alasan: string[];
};
export const SustanabilityArticle: FC<Props> = ({ perilaku, alasan }) => {
  return (
    <section className="space-y-4">
      <SustainabilityItem title="perilaku bertanggung jawab" data={perilaku} />
      <SustainabilityItem title="kenapa harus menjaganya?" data={alasan} />
    </section>
  );
};
