import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log("\n", "findAllPublic D", "\n");

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log("\n", "findBySlugPublic D", "\n");

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error("Post não encontrado para Slug.");

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    console.log("\n", "findAll D", "\n");

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    console.log("\n", "findById D", "\n");

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error("Post não encontrado para ID.");

    return post;
  }
}

// (async () => {
//   const repository = new DrizzlePostRepository();
//   const post = await repository.findById("asd");

//   console.log(post);

//   posts.forEach((post) => {
//     console.log(post.slug, post.published);
//   });
// })();
