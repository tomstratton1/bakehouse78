import Navbar from './components/Navbar';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen md:h-[60vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/croissants1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional overlay */}
        <div className="relative z-10 px-4 flex flex-col items-center">
          <img
            src="/logo/secondary/monochromeWhite/White-Secondary-Logo.png"
            alt="Bakehouse 78 Logo"
            width="1000"
            height="300"
            className="mb-4"
          />
          <p className="text-lg md:text-2xl mb-6">
            Happiness is a piece of cake
          </p>
          <a href="/menu">
            <button className="px-8 py-3 bg-teal text-white font-semibold rounded hover:bg-coral transition">
              Browse Our Bakes
            </button>
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-offWhite text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-4">
          Welcome to BakeHouse 78
        </h2>
        <p className="text-xl text-charcoal mb-8">
          Where every baked good is crafted with love and the finest ingredients.
        </p>
        <p className="text-lg text-charcoal">
          Supplying cafes, individuals, and events with baked goods.
        </p>
      </section>

      {/* Call to Action / Product Icons Section */}
      <section className="py-16 bg-offWhite text-center" id="menu">
        <h2 className="text-3xl font-bold text-charcoal mb-6">Explore Our Menu</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8 px-2">
          <div className="relative w-[450px] h-[280px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/bread1.jpg"
              alt="Savoury"
              width={450}
              height={250}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-10"></div> {/* Dark overlay */}
            <p className="absolute bottom-4 left-0 w-full text-offWhite text-lg font-semibold z-10 text-center">
              Savoury
            </p>
          </div>
          <div className="relative w-[450px] h-[280px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/scones1.jpg"
              alt="Sweet"
              width={450}
              height={250}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-0"></div> {/* Dark overlay */}
            <p className="absolute bottom-4 left-0 w-full text-black text-lg font-semibold z-10 text-center">
              Sweet
            </p>
          </div>
          <div className="relative w-[450px] h-[280px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/choc_croissants1.jpg"
              alt="Pastry & Other"
              width={450}
              height={150}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-10"></div> {/* Dark overlay */}
            <p className="absolute bottom-4 left-0 w-full text-offWhite text-lg font-semibold z-10 text-center">
              Pastry & Other
            </p>
          </div>
        </div>

        <a href="/contact">
          <button className="px-8 py-3 bg-teal text-white font-semibold rounded hover:bg-coral transition">
            Contact Us With Your Order
          </button>
        </a>
      </section>



      {/* Customer Reviews Section */}
      <section className="py-16 bg-offWhite text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-6">Customer Reviews</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          <blockquote className="bg-white p-4 shadow-lg rounded-lg text-left max-w-xs">
            <p className="text-charcoal mb-2">
              &quot;Best pastries I&apos;ve ever had! Our café patrons love them!&quot;
            </p>
            <footer className="text-sm text-gray-500">- Café Owner</footer>
          </blockquote>
          <blockquote className="bg-white p-4 shadow-lg rounded-lg text-left max-w-xs">
            <p className="text-charcoal mb-2">
              &quot;The quality and taste are unmatched. Highly recommend!&quot;
            </p>
            <footer className="text-sm text-gray-500">- Happy Customer</footer>
          </blockquote>
          <blockquote className="bg-white p-4 shadow-lg rounded-lg text-left max-w-xs">
            <p className="text-charcoal mb-2">
              &quot;A hit at our last event! Everything was perfect.&quot;
            </p>
            <footer className="text-sm text-gray-500">- Event Organizer</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
