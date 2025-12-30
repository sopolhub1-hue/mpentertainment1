/**
 * Auth placeholder.
 * Future: session validation / role checks.
 */
export type Role = "guest" | "user" | "admin";

export function getMockRole(): Role {
  return "guest";
}
