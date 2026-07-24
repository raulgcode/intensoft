import { redirect } from "react-router";

import type { Route } from "./+types/home-en";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const search = url.search || "";

  throw redirect(`/${search}`, {
    status: 302,
  });
}

export default function HomeEnglishAlias() {
  return null;
}
