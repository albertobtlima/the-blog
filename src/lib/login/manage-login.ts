import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString("base64");

  return base64;
}

export async function verifyPassword(password: string, base64Hash: string) {
  const hash = Buffer.from(base64Hash, "base64").toString("utf-8");

  return bcrypt.compare(password, hash);
}

(async () => {
  const isPasswordValid = await verifyPassword(
    "12345",
    "JDJiJDEwJGdla2Rsd0J2YjFvUm1GQlpuVk5OcHU2MUNreHNBQ0xDL2FFOW9xZ1ViN2hEdFh2Yy5qNjcu"
  );
  console.log({ isPasswordValid });
})();
