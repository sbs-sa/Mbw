import Image from "next/image";
import { BlogList } from "~/components/pages/blogs/blog-list";
import { RecentPosts } from "~/components/pages/blogs/recent-posts";
import { CategoriesSection } from "~/components/pages/services/categories-section";

export default function BlogsPage() {
  return (
    <div className="w-full h-full">
      <div className="relative bg-blue-900 bg-opacity-90 h-[50vh]">
        <Image
          alt="blog-banner"
          src="/assets/pages/blogs/blog-banner.jpg"
          width={500}
          height={500}
          className="h-full w-full opacity-80 object-cover"
        />
        <div className="absolute h-full px-40 space-y-10 flex flex-col items-center md:items-start justify-center text-white top-0 w-full">
          <h1 className="text-6xl font-bold uppercase">Blogs</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-10">
        <div className="md:col-span-2 lg:col-span-4">
          <BlogList />
        </div>
        <div className="space-y-10">
          <CategoriesSection />
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}
