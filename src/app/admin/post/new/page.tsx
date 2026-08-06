import { InputText } from "@/components/InputText";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div className="flex flex-col gap-6">
      <InputText labelText="Nome" placeholder="Digite o seu nome" />
      <InputText labelText="Sobrenome" placeholder="Digite o seu sobrenome" />
      <InputText
        disabled
        labelText="Endereço"
        placeholder="Digite o seu endereço"
        defaultValue="Olá mundo!"
      />
      <InputText
        disabled
        labelText="Endereço"
        placeholder="Digite o seu endereço"
      />
      <InputText
        labelText="Endereço"
        placeholder="Digite o seu endereço"
        readOnly
      />
      <InputText
        labelText="Endereço"
        placeholder="Digite o seu endereço"
        defaultValue="Olá mundo!"
        readOnly
      />
    </div>
  );
}
