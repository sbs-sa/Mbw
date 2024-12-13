import { FC } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Image from "next/image";

export const RecentPosts: FC = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold uppercase">Recent Posts</h1>
      <Card className="w-full hover:drop-shadow-2xl duration-500">
        <Image
          src="/assets/pages/blogs/blog-1.jpg"
          alt="blog-1"
          className="h-48 w-full object-cover"
        />
        <CardHeader>
          <CardTitle>
            Odoo Sales Module for Improving Business Sales Process
          </CardTitle>
          <CardDescription>August 8, 2024</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            href="/blogs"
            className="hover:text-blue-500 duration-300 flex items-center space-x-2 text-lg"
          >
            <p> Read More</p>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
      <Card className="w-full hover:drop-shadow-2xl duration-500">
        <Image
          src="/assets/pages/blogs/blog-1.jpg"
          alt="blog-1"
          className="h-48 w-full object-cover"
        />
        <CardHeader>
          <CardTitle>
            Odoo Sales Module for Improving Business Sales Process
          </CardTitle>
          <CardDescription>August 8, 2024</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            href="/blogs"
            className="hover:text-blue-500 duration-300 flex items-center space-x-2 text-lg"
          >
            <p> Read More</p>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
      <Card className="w-full hover:drop-shadow-2xl duration-500">
        <Image
          src="/assets/pages/blogs/blog-1.jpg"
          alt="blog-1"
          className="h-48 w-full object-cover"
        />
        <CardHeader>
          <CardTitle>
            Odoo Sales Module for Improving Business Sales Process
          </CardTitle>
          <CardDescription>August 8, 2024</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            href="/blogs"
            className="hover:text-blue-500 duration-300 flex items-center space-x-2 text-lg"
          >
            <p> Read More</p>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
