import { ContentSection } from "../common/ContentSection";
import { Card } from "./Card";

export const NiniakMamak = () => {
  return (
    <ContentSection title="niniak mamak nan XXIV">
      <div className="flex relative">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} index={index} />
        ))}
      </div>
      <div className="h-screen"></div>
    </ContentSection>
  );
};
