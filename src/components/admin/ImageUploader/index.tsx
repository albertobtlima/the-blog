"use client";

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef, useTransition } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploadin, startTransition] = useTransition();

  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  function handleFileChange() {
    toast.dismiss();

    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const maxSizeInKB = IMAGE_UPLOAD_MAX_SIZE / 1024;
      toast.error(`Arquivo grande, Max. ${maxSizeInKB} KB`);

      fileInput.value = ""; // limpa o imput
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = "";
        return;
      }

      // TODO: continuar depois
      toast.success(result.url);
    });

    fileInput.value = ""; // limpa o imput apos o processamento
  }

  return (
    <div className="flex flex-col gap-2 py-4">
      <Button type="button" className="self-center" onClick={handleChooseFile}>
        <ImageUpIcon />
        Enviar Imagem
      </Button>

      <input
        className="hidden"
        type="file"
        name="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
}
