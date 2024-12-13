import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";
import { FC } from "react";

export const BlogFooter: FC = () => {
  return (
    <div className="border-t p-4 flex items-center justify-between w-full">
      <p>By author</p>
      <div className="flex items-center space-x-5">
        <GithubIcon className="h-10 w-10 bg-green-500 p-2 rounded-full" />
        <LinkedinIcon className="h-10 w-10 bg-green-500 p-2 rounded-full" />
        <FacebookIcon className="h-10 w-10 bg-green-500 p-2 rounded-full" />
        <InstagramIcon className="h-10 w-10 bg-green-500 p-2 rounded-full" />
      </div>
    </div>
  );
};
