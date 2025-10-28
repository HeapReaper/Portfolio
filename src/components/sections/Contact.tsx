"use client";

import { FormEvent, useState } from "react";
import {contactSchema} from "@/zod/contact";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);
    setErrors({});

    const validation = contactSchema.safeParse({ name, email, message });
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      const formatted: Record<string, string> = {};

      // Pick first error for each field
      Object.entries(fieldErrors).forEach(([key, value]) => {
        if (value && value.length > 0) formatted[key] = value[0];
      });

      setErrors(formatted);
      setLoading(false);
      return;
    }

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
    <section className="w-full flex justify-center py-20">
      <div className="w-full backdrop-blur-sm rounded-2xl p-10 flex flex-col gap-6 border border-white/10 shadow-2xl">
        <h1 className="text-4xl text-center font-bold text-white mb-4">
          Contact Me
        </h1>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
          {/* Name */}
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
              className={`p-4 rounded-lg border ${
                errors.name ? "border-red-500" : "border-white/10"
              } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
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
              className={`p-4 rounded-lg border ${
                errors.email ? "border-red-500" : "border-white/10"
              } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-300 mb-2 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              rows={6}
              className={`p-4 rounded-lg border ${
                errors.message ? "border-red-500" : "border-white/10"
              } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="self-end px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {statusMessage && (
            <p
              className={`mt-2 text-xl font-bold text-center ${
                statusMessage.includes("success")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
