import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "~/components/ui/button";

export const ContactSection: FC = () => {
  const contact = useTranslations("Contact Banner");
  return (
    <div className="w-full h-full">
      <div className="relative bg-blue-400 bg-opacity-90 h-full">
        <Image
          src="/assets/pages/services/contact-background.jpg"
          alt="about-banner"
          width={100}
          height={100}
          className="h-full w-full opacity-80"
        />
        <div className="absolute top-0 w-full h-full px-10">
          <div className="w-full flex items-center justify-center h-full">
            <div className="flex flex-col items-center h-fit w-full text-center">
              <Phone className="bg-white h-10 w-10 lg:h-20 lg:w-20 p-2 rounded-full" />
              <p className="uppercase font-bold text-2xl mt-10 text-white">
                {contact("for support Call us 24/7")}
              </p>
              <Link
                href="tel:+1800356789142"
                className="text-4xl font-bold mt-10 text-white"
              >
                +1800 356 789 142
              </Link>
              <Button size="lg" className="mt-10">
                {contact("Contact Us")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
