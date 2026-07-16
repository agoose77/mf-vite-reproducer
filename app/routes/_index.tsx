import type { Route } from "./+types/home";
import { MyST } from "myst-to-react";
import { loadAST } from "../loader.server.js"

export async function loader() {
  return await loadAST();
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <MyST ast={loaderData} />;
}
