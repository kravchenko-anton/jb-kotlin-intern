import type { Route } from "./+types/well-known.devtools";

export function loader(_args: Route.LoaderArgs) {
  return Response.json({});
}
