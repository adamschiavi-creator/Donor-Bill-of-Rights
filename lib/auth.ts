// Edge-safe only — imported by middleware (no Node.js modules)
export const SESSION_COOKIE = "dbor_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days in seconds
const SALT = "dbor-2025-alliance";

export async function hashPasswordEdge(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(SALT + password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
