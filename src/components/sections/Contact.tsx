"use client";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await resp.json();

      if (!resp.ok) {
        setStatusMessage(data.error || "😔 Oops! Something went wrong.");
        setLoading(false);
        return;
      }

      setStatusMessage("🥳 Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatusMessage("😔 Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-4 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl text-center font-bold text-white">Contact Me</h1>

      <form
        onSubmit={handleFormSubmit}
        className="backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-6 border border-white/10 shadow-lg"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-300 mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="p-3 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-300 mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="p-3 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-300 mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            rows={5}
            className="p-3 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="self-end px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {statusMessage && (
          <p
            className={`mt-2 text-xl font-bold text-center ${
              statusMessage.includes("success") ? "text-green-400" : "text-red-400"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
}
