import { CommentSection } from "~/components/pages/blogs/individual-blog/comment-section";
import { BlogFooter } from "~/components/pages/blogs/individual-blog/blog-footer";

export default function IndividualBlogPage() {
  return (
    <div className="space-y-10 w-full">
      <h1>Blog Page</h1>
      <BlogFooter />
      <CommentSection />
    </div>
  );
}
