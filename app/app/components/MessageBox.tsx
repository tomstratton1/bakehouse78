"use client";

import { useState } from "react";

export default function MessageBox() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
    setMessage(""); // Clear the message after submission
  };

  return (
    <section className="py-8 bg-offWhite text-center">
      <h2 className="text-3xl font-bold text-charcoal mb-4">Leave Us a Message</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
          placeholder="Type your message here..."
          required
        ></textarea>
        <button
          type="submit"
          className="mt-4 bg-teal text-white px-6 py-2 rounded-lg hover:bg-charcoal transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
