import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

export const CategoriesSection: FC = () => {
  const categories = useTranslations("Categories");
  return (
    <div className="w-full h-fit space-y-5 mt-10">
      <h1 className="text-2xl font-bold uppercase">{categories("title")}</h1>
      <ul className="space-y-3 list-disc text-lg px-10">
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("App Development (2)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Business Growth Strategies (8)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Customization Chronicles (4)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Implementation Insights (7)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Innovation Insights (2)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Integration Techniques (1)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("IT Consulting (23)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Module Spotlight (2)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Odoo consulting (3)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Odoo Devops (1)")}{" "}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Startup (1)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Support & Troubleshooting (2)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Tech (21)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("UI/UX Design (1)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Uncategorized (11)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("User Experience & Tips (3)")}
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-500 duration-300">
            {categories("Web Development (2)")}
          </Link>
        </li>
      </ul>
    </div>
  );
};
