import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: body.messages,
        stream: true,
      });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of completion) {
          const text =
            chunk.choices[0]?.delta?.content || "";

          controller.enqueue(
            encoder.encode(text)
          );
        }

        controller.close();
      },
    });

    return new Response(stream);
  } catch (error) {
    console.log(error);

    return new Response("Error");
  }
}