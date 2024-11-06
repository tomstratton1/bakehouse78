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
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/van1.jpg`}
            alt="The van"
            width={300}
            height={450}
            className="rounded-lg shadow-md"
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/oven1.jpg`}
            alt="The oven"
            width={300}
            height={450}
            className="rounded-lg shadow-md"
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/headbaker1.jpg`}
            alt="The head baker"
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
              From a young age, my passion for baking was evident. Taking a leap of faith, I left my job as a nutritionist to pursue my dream of baking full-time. After gaining industry experience, I transformed my family's study into BakeHouse 78's commercial kitchen. With dedication and my oven, I craft delicious baked goods using local ingredients where possible, aiming to share the joy and love of cooking with individuals and cafes alike.
            </p>
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
