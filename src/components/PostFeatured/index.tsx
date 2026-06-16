import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;

  return (
    <section
      className={clsx(
        "grid grid-cols-1 gap-8 mb-16",
        "sm:grid-cols-2",
        "group"
      )}
    >
      <PostCoverImage
        src="/images/bryen_5.webp"
        href={postLink}
        alt="Título do post"
      />

      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
}
