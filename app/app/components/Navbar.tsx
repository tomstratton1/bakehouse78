// app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-teal p-4 text-white flex justify-between items-center">
      <div className="text-2xl font-bold">Bakehouse 78</div>
      <div>
        <Link href="/" className="mr-4 hover:text-coral">Home</Link>
        <Link href="/contact" className="hover:text-coral">Contact</Link>
      </div>
    </nav>
  );
}
