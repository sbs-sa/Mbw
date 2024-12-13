import { useTranslations } from "next-intl";
import { FC } from "react";

type Props = {
  title: string;
};

export const OverviewSection: FC<Props> = ({ title }) => {
  const overview = useTranslations(title);
  return (
    <div className="w-full h-full p-10 lg:p-20 space-y-10 text-center">
      <h1 className="text-4xl font-bold uppercase">
        {"Overview of " + overview("title")}
      </h1>
      <p className="text-lg px-0 lg:px-10">{overview("overview desc")}</p>
    </div>
  );
};
