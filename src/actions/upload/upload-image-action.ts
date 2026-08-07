"use server";

import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData
): Promise<UploadImageActionResult> {
  const makeResult = ({ url = "", error = "" }) => ({ url, error });
  const file = formData.get("file");

  if (!(formData instanceof FormData)) {
    return makeResult({ error: "Dados inválidos" });
  }

  if (!(file instanceof File)) {
    return makeResult({ error: "Arquivo inválidos" });
  }

  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({ error: "Arquivo muito grande" });
  }

  if (!file.type.startsWith("image/")) {
    return makeResult({ error: "Imagem inválidos" });
  }

  return makeResult({ url: "URL" });
}
