import { useTranslations } from "next-intl";
import { FC } from "react";
import Image from "next/image";

type Props = {
  title: string;
};

export const NoteSection: FC<Props> = ({ title }) => {
  const note = useTranslations(title);
  return (
    <div className="px-20 py-10 w-full grid grid-cols-1 md:grid-cols-3 gap-10 bg-gradient-to-t from-[#30478A] to-[#1E3059] text-white">
      <Image
        src="/assets/pages/industries/step-push.png"
        alt={title}
        width={100}
        height={100}
        className="h-full w-full"
      />
      <div className="space-y-5 col-span-2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold uppercase">{note("note title")}</h1>
        <p className="text-md">{note("note desc")}</p>
      </div>
    </div>
  );
};
