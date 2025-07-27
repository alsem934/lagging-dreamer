// components/Header.js
export default function Header() {
  return (
    <header className="w-full bg-black/30 border-b border-gray-700 sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-white text-xl font-semibold">Lagging Dreamer</h1>
        <ul className="flex space-x-6 text-gray-400 text-sm">
          <li><a href="/" className="hover:text-white">Home</a></li>
          <li><a href="/about" className="hover:text-white">About</a></li>
          <li><a href="/goals" className="hover:text-white">Goals</a></li>
           <li><a href="/tracker" className="hover:text-white">tracker</a></li>
        <li><a href="/stats" className="hover:text-white">Stats</a></li>

        </ul>
      </nav>
    </header>
  )
}
