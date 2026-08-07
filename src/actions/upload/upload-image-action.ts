"use server";

import { logColor } from "@/utils/log-color";

export async function uploadImageAction() {
  logColor("Ola da uploadImageAction", "yellow");

  return {
    user: "SENHA DO USUARIO",
  };
}
