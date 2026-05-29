import { Container } from "@/components/Container";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a HEADER</h1>

        <p className="text-justify p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat
          modi doloribus tempore ratione nulla dolores earum obcaecati,
          repellendus error aut assumenda minus deleniti cupiditate minima
          veniam officiis accusamus consequuntur! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse fugiat modi doloribus tempore
          ratione nulla dolores earum obcaecati, repellendus error aut assumenda
          minus deleniti cupiditate minima veniam officiis accusamus
          consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Esse fugiat modi doloribus tempore ratione nulla dolores earum
          obcaecati, repellendus error aut assumenda minus deleniti cupiditate
          minima veniam officiis accusamus consequuntur!
        </p>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é o FOOTER</h1>
      </footer>
    </Container>
  );
}
