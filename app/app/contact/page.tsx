import Navbar from '../components/Navbar';

export default function ContactPage() {
    return (
      <main>
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-screen bg-lightGray p-6">
        <h1 className="text-3xl font-bold text-charcoal mb-4">Contact Us</h1>
        <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-charcoal font-semibold mb-2">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-charcoal font-semibold mb-2">Email Address</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-charcoal font-semibold mb-2">Message</label>
            <textarea id="message" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Your Message" rows={4}></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-teal text-white font-semibold rounded hover:bg-coral transition">Send</button>
        </form>
      </section>

      </main>
    );
  }