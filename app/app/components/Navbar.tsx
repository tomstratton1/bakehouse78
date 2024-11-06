// app/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-charcoal p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/bakehouse78/logo/secondary/monochromeWhite/White-Secondary-Logo.png" alt="Bakehouse 78 Logo" width={250} height={70} />
      </div>
      <div>
        <Link href="/" className="text-lg font-semibold mr-4 hover:text-sunshine transition ease-in-out duration-200">Home</Link>
        <Link href="/contact" className="text-lg font-semibold hover:text-sunshine transition ease-in-out duration-200">Contact</Link>
      </div>
    </nav>
  );
}
