import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

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

      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-600 text-sm/tight" dateTime="2026-06-15">
          15/06/2026 18:00
        </time>

        <PostHeading as="h1" url={postLink}>
          Lorem ipsum dolor sit amet
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
          assumenda illo fugit quis eum ipsam distinctio modi incidunt ducimus
          praesentium earum dicta molestias odit, vel, reiciendis nihil
          accusantium dignissimos!
        </p>
      </div>
    </section>
  );
}
