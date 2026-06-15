import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={clsx(
          "grid grid-cols-1 gap-8 mb-16",
          "sm:grid-cols-2",
          "group"
        )}
      >
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src="/images/bryen_0.webp"
            width={1200}
            height={720}
            alt="Título do post"
            priority
          />
        </Link>

        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2026-06-15">
            15/06/2026 18:00
          </time>

          <PostHeading as="h1" url="#">
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

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é o FOOTER</h1>
      </footer>
    </Container>
  );
}
