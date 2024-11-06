// app/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-charcoal p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={`/logo/secondary/monochromeWhite/White-Secondary-Logo.png`}
            alt="Bakehouse 78 Logo"
            width={250}
            height={70}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-lg font-semibold hover:text-sunshine transition ease-in-out duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
