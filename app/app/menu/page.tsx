import Navbar from '../components/Navbar';
import Image from 'next/image';
import menuItems from '../data/menuItems';
import sweetBakes from '../data/sweetBakes';

export default function MenuPage() {
  return (
    <main className="relative">
      <Navbar />
      <section className="py-16 bg-offWhite text-center">
        <h1 className="text-6xl font-bold text-charcoal mb-8">Menu</h1>
        {menuItems.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-4xl font-semibold text-charcoal mb-8">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12 px-12">
              {category.items.map((item, idx) => (
                <div key={idx} className="border rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 bg-gray-300 flex items-center justify-center">
                    <Image
                      src={`/images/${item.image}`}
                      alt={item.title}
                      width={300}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold mb-2 text-charcoal">{item.title}</h3>
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-gray-500 text-sm mb-4">{item.ingredients}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Sweet Bakes Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-charcoal mb-8">Sweet Bakes</h2>
          {sweetBakes.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-3xl font-semibold text-charcoal mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12 px-12">
                {category.items.map((item, idx) => (
                  <div key={idx} className="border rounded-lg overflow-hidden shadow-lg">
                    <div className="h-64 bg-gray-300 flex items-center justify-center">
                      <Image
                        src={`/images/${item.image}`}
                        alt={item.title}
                        width={300}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-2xl font-bold mb-2 text-charcoal">{item.title}</h3>
                      <p className="text-gray-700 mb-2">{item.description}</p>
                      <p className="text-gray-500 text-sm mb-4">{item.ingredients}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
