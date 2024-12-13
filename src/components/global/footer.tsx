import {
  ChevronRightIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  LocateIcon,
  Mail,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  const footer = useTranslations("Footer");
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly w-full h-fit p-10 bg-[#041436] text-white">
      <div className="flex flex-col justify-evenly h-full space-y-5 p-4">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <p className="text-sm">{footer("Description")}</p>
        <div className="flex items-center justify-between gap-5">
          <Image
            src="/assets/odoo.png"
            alt="odoo"
            height={100}
            width={100}
            className="bg-white p-2 rounded-t-3xl rounded-bl-3xl hover:border hover:border-blue-500"
          />
          <Image
            src="/assets/rank.png"
            alt="rank"
            height={100}
            width={100}
            className="bg-white p-2 rounded-t-3xl rounded-br-3xl hover:border hover:border-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{footer("Services")}</h1>
        <ul className="space-y-3 mt-10">
          <li>
            <Link
              href="/services/odoo-implementation"
              className="flex gap-5 w-full"
            >
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("Odoo Implementation")}</p>
            </Link>
          </li>
          <li>
            <Link
              href="/services/odoo-consulting"
              className="flex gap-5 w-full"
            >
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("Odoo Consulting")}</p>
            </Link>
          </li>
          <li>
            <Link
              href="/services/odoo-customization"
              className="flex gap-5 w-full"
            >
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("Odoo Customization")}</p>
            </Link>
          </li>
          <li>
            <Link href="/services/odoo-migration" className="flex gap-5 w-full">
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("Odoo Migration")}</p>
            </Link>
          </li>
          <li>
            <Link href="/services/odoo-training" className="flex gap-5 w-full">
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("Odoo Training")}</p>
            </Link>
          </li>
          <li>
            <Link
              href="/services/hire-odoo-developer"
              className="flex gap-5 w-full"
            >
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("Hire Odoo Developer")}</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{footer("Quick Links")}</h1>
        <ul className="space-y-3 mt-10">
          <li>
            <Link href="/about" className="flex gap-5 w-full">
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("About Us")}</p>
            </Link>
          </li>
          <li>
            <Link href="/blog" className="flex gap-5 w-full">
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("Blog")}</p>
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="flex gap-5 w-full">
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("Contact Us")}</p>
            </Link>
          </li>
          <li>
            <Link href="/terms-and-conditions" className="flex gap-5 w-full">
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("Terms and Conditions")}</p>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="flex gap-5 w-full">
              <ChevronRightIcon className="h-6 w-6 p-1 bg-green-400 text-black rounded-full" />
              <p>{footer("Privacy Policy")}</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{footer("Get In Touch")}</h1>
        <div className="space-y-5 mt-10">
          <Link
            href={`mailto:${footer('email')}`}
            className="flex items-center space-x-2"
          >
            <Mail className="h-6 w-6 bg-green-400 text-black p-1 rounded-full" />
            <p>{footer("email")}</p>
          </Link>
          <Link
            href={`tel:${footer('phone')}`}
            className="flex items-center space-x-2"
          >
            <Phone className="h-6 w-6 bg-green-400 text-black p-1 rounded-full" />
            <p>{footer("phone")}</p>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2"
          >
            <LocateIcon className="h-6 w-6 bg-green-400 text-black p-1 rounded-full" />
            <p>{footer("address")}</p>
          </Link>
        </div>
        <div className="mt-5 flex items-center space-x-5 w-full">
          <Link href={footer('facebook')}>
            <FacebookIcon className="h-10 w-10 bg-green-500 p-2 rounded-full" />
          </Link>
          <Link href={footer('twitter')}>
            <TwitterIcon className="h-10 w-10 bg-green-500 p-2 rounded-full" />
          </Link>          
          <Link href={footer('instagram')}>
            <InstagramIcon className="h-10 w-10 bg-green-500 p-2 rounded-full" />
          </Link>
          <Link href={footer('linkedin')}>
            <LinkedinIcon className="h-10 w-10 bg-green-500 p-2 rounded-full" />
          </Link>
        </div>
      </div>
      <div className="whatsapp-pop">
          <Link href={footer('whatsapp')}>
          <Image
            src="/assets/whatsapp.png"
            alt="rank"
            height={30}
            width={30}
            className="bg-white p-2 rounded-t-3xl rounded-br-3xl hover:border hover:border-blue-500"
          />
          </Link>
      </div>
    </footer>
  );
};
