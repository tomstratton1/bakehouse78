import Navbar from './components/Navbar';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen md:h-[60vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images-web/almond_croissant1.jpg')" }}
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
        <h2 className="text-3xl font-bold text-charcoal mb-8">
          Welcome to BakeHouse 78
        </h2>
        <p className="text-xl text-charcoal mb-8">
          Where every baked good is crafted with love and the finest ingredients.
        </p>
        <p className="text-xl text-charcoal">
          Supplying cafes, individuals, and events with baked goods and catering services.
        </p>
      </section>

      {/* Call to Action / Product Icons Section */}
      <section className="py-16 bg-offWhite text-center" id="menu">
        <h2 className="text-3xl font-bold text-charcoal mb-6">Explore Our Menu</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8 px-2">
          <div className="relative w-[450px] h-[280px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images-web/focaccia2.jpg"
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
              src="/images-web/red_velvet1.jpg"
              alt="Sweet"
              width={450}
              height={250}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-0"></div> {/* Dark overlay */}
            <p className="absolute bottom-4 left-0 w-full text-offWhite text-lg font-semibold z-10 text-center">
              Sweet
            </p>
          </div>
          <div className="relative w-[450px] h-[280px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images-web/pain_choc2.jpg"
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
              &quot;This is literally the BEST thing I&apos;ve ever eaten in my entire life.&quot;
            </p>
            <footer className="text-sm text-gray-500">- Beth Hodgson</footer>
          </blockquote>
          <blockquote className="bg-white p-4 shadow-lg rounded-lg text-left max-w-xs">
            <p className="text-charcoal mb-2">
              &quot;Thank you so much for our bakes!! Those pastries de nata were absolutely amazing!!!!
              I&apos;ll definitely be in touch soon to order again.&quot;
            </p>
            <footer className="text-sm text-gray-500">- NORMAD FLOWER DEN</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
