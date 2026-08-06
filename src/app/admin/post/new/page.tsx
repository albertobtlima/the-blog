import { Button } from "@/components/Button";
import { BanIcon, BugIcon, CheckIcon } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div>
      <div className="py-16 flex flex-wrap gap-4 items-center">
        <Button variant="default" size="sm">
          Novo Post
        </Button>
        <Button variant="ghost" size="md">
          Novo Post
        </Button>
        <Button variant="danger" size="lg">
          Novo Post
        </Button>
      </div>

      <div className="py-16 flex flex-wrap gap-4 items-center">
        <Button variant="default" size="sm" disabled>
          Novo Post
        </Button>
        <Button variant="ghost" size="md" disabled>
          Novo Post
        </Button>
        <Button variant="danger" size="lg" disabled>
          Novo Post
        </Button>

        <Button variant="danger" size="lg" className="w-full">
          <BugIcon />
          Confirmar
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <BanIcon />
          Cancelar
        </Button>
        <Button variant="default" size="lg" className="w-full">
          <CheckIcon />
          Ok
        </Button>
      </div>
    </div>
  );
}
