import { Link } from "react-router-dom";
import { Wordmark } from "@/shared/components/DotMark";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-6xl flex-col items-start justify-center gap-6 px-5 sm:px-8">
      <Wordmark />
      <h1 className="text-4xl font-extrabold tracking-tight">This page doesn’t exist.</h1>
      <Link to="/" className="rounded-2xl bg-ink px-6 py-4 font-bold text-white hover:bg-ink-soft">
        Go to the home page
      </Link>
    </main>
  );
}
