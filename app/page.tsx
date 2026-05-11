export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
        <h1 className="mb-4 text-3xl font-bold">
          AI Chatbot
        </h1>

        <div className="mb-4 h-100 overflow-y-auto rounded-xl bg-zinc-950 p-4">
          <p className="text-zinc-400">
            Hello 👋 Ask me anything...
          </p>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none"
          />

          <button className="rounded-xl bg-white px-5 py-3 font-medium text-black">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
