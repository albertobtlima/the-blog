import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;

  return (
    <section
      className={clsx(
        "grid grid-cols-1 gap-8 mb-16",
        "sm:grid-cols-2",
        "group"
      )}
    >
      <PostCoverImage
        src={post.coverImageUrl}
        href={postLink}
        alt={post.title}
      />

      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
}
