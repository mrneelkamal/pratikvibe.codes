import { Metadata } from "next";
import EntranceDatesContent from "./content";

export const metadata: Metadata = {
  title: "entrancedates.com | Pratik's Projects",
  description:
    "A one-stop platform for Indian students to track engineering entrance exam dates, forms, and applications. Built by Pratik as part of his vibe coding journey.",
};

export default function EntranceDatesPage() {
  return <EntranceDatesContent />;
}
