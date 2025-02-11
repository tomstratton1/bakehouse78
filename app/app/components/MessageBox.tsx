"use client";

import { useState } from "react";

interface CartItem {
  title: string;
  quantity: number;
}

interface MessageBoxProps {
  orderSummary: CartItem[];
}

export default function MessageBox({ orderSummary }: MessageBoxProps) {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const formattedOrderSummary = orderSummary
    .map((item) => `${item.title.replace(/[^a-zA-Z0-9 .,!?()'"-]/g, '')}: ${item.quantity}`)
    .join("\n") || "No items ordered.";


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const fullMessage = `Message:\n${message}\n\nOrder Summary:\n${formattedOrderSummary}`;

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: fullMessage }),
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

        {orderSummary.length > 0 && (
          <div className="bg-gray-100 p-4 rounded-lg mt-4 text-left">
            <h3 className="text-xl font-semibold text-charcoal mb-2">Order Summary</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {orderSummary.map((item) => (
                <li key={item.title}>
                  {item.title}: <strong>{item.quantity}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}

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
