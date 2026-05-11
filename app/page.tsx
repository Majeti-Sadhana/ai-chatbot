import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="mb-6 text-5xl font-bold">
        AI Chatbot
      </h1>

      <p className="mb-10 text-zinc-400">
        Modern AI assistant platform
      </p>

      <div className="flex gap-4">
        <Link
          href="/sign-in"
          className="rounded-xl bg-white px-6 py-3 text-black"
        >
          Sign In
        </Link>

        <Link
          href="/sign-up"
          className="rounded-xl border border-white/20 px-6 py-3"
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
}