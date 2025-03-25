import { FC } from 'react'

interface HeaderProps {
  title?: string
}

const Header: FC<HeaderProps> = ({ title = 'My Website' }) => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="w-full px-4 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-xl font-bold text-gray-800">
            {title}
          </div>
          <div className="space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 