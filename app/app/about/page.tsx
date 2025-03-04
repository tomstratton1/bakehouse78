import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* About Section */}
      <section className="py-16 bg-offWhite text-center">
        <h1 className="text-4xl font-bold text-charcoal mb-6">About</h1>
        <p className="text-xl text-left text-charcoal leading-relaxed max-w-3xl mx-auto">
          At BakeHouse 78, we take pride in offering a diverse range of freshly baked goods. Each day, we craft our products using the finest ingredients to ensure every bite is a delightful experience. Whether you are an individual satisfying a food craving or a cafe seeking quality baked goods, we cater to all.
        </p>
      </section>

      {/* Photo Highlights Section */}
      <section className="py-16 bg-offWhite text-center">
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
          <Image
            src="./images-web/prep6.jpg"
            alt="The head baker"
            width={300}
            height={450}
            className="rounded-lg shadow-md"
          />
          <Image
            src="./images-web/oven1.jpg"
            alt="The oven"
            width={300}
            height={450}
            className="rounded-lg shadow-md"
          />
          <Image
            src="./images-web/carrot_slice1.jpg"
            alt="Carrot Cake"
            width={300}
            height={450}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-offWhite text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-4">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 max-w-5xl mx-auto px-4">
          <div className="text-left md:text-lg text-charcoal leading-relaxed">
            <p className="text-xl text-charcoal leading-relaxed max-w-3xl mx-auto">
            Baking has been my passion since childhood, and after working as a nutritionist, I took a leap of faith to turn that passion into a full-time career.
            Gaining industry experience along the way, I eventually opened my kitchen - a space where creativity and dedication come together.
            </p>
            <p className="text-xl text-charcoal leading-relaxed max-w-3xl mx-auto">
            <br></br>Today, BakeHouse 78 is fuelled by my love for baking and a commitment to quality.
            Every treat is crafted with care, using locally sourced ingredients whenever possible.
            Though our team is small, our mission is big.
            I believe that every baked good is an opportunity to bring happiness and connection to those who enjoy it.
            </p>
          </div>
        </div>
      </section>

      {/* Stockists */}
      <section className="py-16 bg-offWhite text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-8">Stockists</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 max-w-5xl mx-auto px-4">
          <div className="text-left md:text-lg text-charcoal leading-relaxed">
            <ul className="list-disc list-inside text-xl text-charcoal max-w-3xl mx-auto">
              <li>
                <a href="https://northumberlandhq.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Northumberland HQ
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/regularjoscoffee/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Regular Jos
                </a>
              </li>
              <li>
                <a href="https://northumberlandcoffee.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Northumberland Coffee
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/littlebrewcoffeeco/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Little Brew
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/halcyonhousecafe/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Halcyon House Cafe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-16 bg-offWhite text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-8">Our Team</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 max-w-5xl mx-auto px-4">
          <div className="text-left md:text-lg text-charcoal leading-relaxed">
            <p className="text-xl text-charcoal leading-relaxed max-w-3xl mx-auto">
              Currently, the heart and soul of BakeHouse 78 is just me and my oven. With a deep passion for baking and a commitment to quality, I personally craft each delicious baked good using local ingredients.
              While our team may be small, our dedication to creating exceptional treats and sharing the joy of cooking remains unwavering. I believe that every baked good is an opportunity to bring happiness and connection to those who enjoy it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
