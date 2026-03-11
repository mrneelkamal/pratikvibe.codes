import { Metadata } from "next";
import MoonAndSeemaContent from "./content";

export const metadata: Metadata = {
  title: "Moon & Seema — 25 Years | Pratik's Projects",
  description:
    "A digital celebration of Moon and Seema's 25th wedding anniversary. Their love story, photos, and memories — preserved forever.",
};

export default function MoonAndSeemaPage() {
  return <MoonAndSeemaContent />;
}
