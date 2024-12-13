import { RecentPosts } from "~/components/pages/blogs/recent-posts";
import { CategoriesSection } from "~/components/pages/services/categories-section";

export default async function IndividualBlogPageLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 p-10 lg:p-20">
        <div className="col-span-3 space-y-10">
          <div>{children}</div>
        </div>
        <div className="space-y-10">
          <CategoriesSection />
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}
