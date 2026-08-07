"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";
import { UploadIcon } from "lucide-react";

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState("Digite o post aqui");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite o seu nome" />
        <InputText labelText="Sobrenome" placeholder="Digite o seu sobrenome" />

        <ImageUploader />

        <InputCheckbox labelText="Aceitar termos" />

        <InputText
          disabled
          labelText="Endereço"
          placeholder="Digite o seu endereço"
          defaultValue="Olá mundo!"
        />

        <MarkdownEditor
          labelText="Conteúdo"
          textAreaName="content"
          disabled={false}
          value={contentValue}
          setValue={setContentValue}
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

        <div className="flex items-center justify-center mt-4">
          <Button type="submit">
            <UploadIcon />
            Enviar Post
          </Button>
        </div>
      </div>
    </form>
  );
}
