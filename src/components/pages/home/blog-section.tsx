import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

export const BlogSection: FC = () => {
  const blogs = useTranslations("Our Blogs");
  return (
    <div className="h-full w-full p-10 lg:p-20 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
        {blogs("title")}
      </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card className="p-0 h-fit">
          <Image
            src="/assets/blogs/blog-1.jpg"
            alt="blog-1"
            width={100}
            height={100}
            className="w-full h-full bg-cover object-contain"
          />
          <CardHeader>
            <CardTitle>{blogs("Blog 1")}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Link href="/">{blogs("Read More")}</Link>
          </CardFooter>
        </Card>
        <Card className="p-0 h-fit">
          <Image
            src="/assets/blogs/blog-2.jpg"
            alt="blog-1"
            width={100}
            height={100}
            className="w-full h-full bg-cover object-contain"
          />
          <CardHeader>
            <CardTitle>{blogs("Blog 1")}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Link href="/">{blogs("Read More")}</Link>
          </CardFooter>
        </Card>
        <Card className="p-0 h-fit">
          <Image
            src="/assets/blogs/blog-3.jpg"
            alt="blog-1"
            width={100}
            height={100}
            className="w-full h-full bg-cover object-contain"
          />
          <CardHeader>
            <CardTitle>{blogs("Blog 3")}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Link href="/">{blogs("Read More")}</Link>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <Link href="/blogs">
          <Button size="lg">{blogs("Explore More")}</Button>
        </Link>
      </div>
    </div>
  );
};
