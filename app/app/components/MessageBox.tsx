"use client";

import { useState } from "react";

export default function MessageBox() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Message sent successfully!");
        setMessage("");
        setEmail("");
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-8 bg-offWhite text-center">
      <h2 className="text-3xl font-bold text-charcoal mb-4">Leave Us a Message</h2>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-teal"
          placeholder="Your email (required)"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-32 p-4 border border-gray-300 rounded-lg mt-4 focus:ring-teal"
          placeholder="Type your message here..."
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-teal text-white px-6 py-2 rounded-lg hover:bg-charcoal transition disabled:bg-gray-400"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-600 mt-2">{success}</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </section>
  );
}
