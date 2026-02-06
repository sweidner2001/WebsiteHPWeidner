import Link from "next/link";

export default function Header_1() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">Naturheilpraxis Dr. Weidner</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#start" className="text-gray-700 hover:text-green-600 transition-colors">Start</a>
            <a href="#uber-mich" className="text-gray-700 hover:text-green-600 transition-colors">Über mich</a>
            <a href="#behandlung" className="text-gray-700 hover:text-green-600 transition-colors">Behandlung</a>
            <a href="#leistungen" className="text-gray-700 hover:text-green-600 transition-colors">Leistungen</a>
            <a href="#praxis" className="text-gray-700 hover:text-green-600 transition-colors">Praxis</a>
            <a href="#kontakt" className="text-gray-700 hover:text-green-600 transition-colors">Kontakt</a>
            <Link href="/ui/page1" className="text-gray-700 hover:text-green-600 transition-colors">page1</Link>
            <Link href="/ui/page2" className="text-gray-700 hover:text-green-600 transition-colors">page2</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
