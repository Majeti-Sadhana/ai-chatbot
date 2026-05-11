"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);

    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      if (!response.body) return;

      const reader =
        response.body.getReader();

      let aiResponse = "";

      while (true) {
        const { done, value } =
          await reader.read();

        if (done) break;

        aiResponse +=
          new TextDecoder().decode(value);

        setMessages([
          ...updatedMessages,
          {
            role: "assistant",
            content: aiResponse,
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          AI Chatbot
        </h1>

        <div className="space-y-4 mb-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-4 rounded-xl"
            >
              {message.content}
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Ask anything..."
            className="flex-1 rounded-xl bg-zinc-900 p-4 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-white text-black px-6 rounded-xl"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}