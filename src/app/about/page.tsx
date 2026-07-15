import { redirect } from "next/navigation";

export default function AboutPage(): never {
  redirect("/about/who-we-are");
}
