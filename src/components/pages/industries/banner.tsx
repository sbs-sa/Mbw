import { useTranslations } from "next-intl";
import { FC } from "react";
import Image from "next/image";

type Props = {
  title: string;
  imageUrl: string;
};

export const Banner: FC<Props> = ({ title, imageUrl }) => {
  const note = useTranslations(title);
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          src="/assets/pages/industries/banner-background.jpg"
          alt="about-banner"
          width={100}
          height={100}
          className="h-fit w-full object-cover bg-no-repeat"
        />
        <div className="absolute top-0 w-full h-full">
          <div className="w-full flex items-center justify-center h-full">
            <h1 className="uppercase font-bold text-4xl md:text-6xl lg:text-8xl">
              {note("title")}
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center w-full absolute -bottom-20 md:-bottom-32 lg:-bottom-52">
          <Image
            src={imageUrl}
            alt="ecommerce"
            width={100}
            height={100}
            className="h-[50%] w-[50%] rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};
