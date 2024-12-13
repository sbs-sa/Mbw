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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import Image from "next/image";

export const BlogList: FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center md:p-10 p-0">
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

      <div className="mt-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
