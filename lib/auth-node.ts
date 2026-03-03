// Node.js runtime only — do NOT import from middleware
import { createHash } from "crypto";

export { SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth";

const SALT = "dbor-2025-alliance";

export function hashPasswordNode(password: string): string {
  return createHash("sha256").update(SALT + password).digest("hex");
}
