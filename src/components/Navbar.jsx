import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/logo.png" alt=""/>
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-auto  lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Product</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
          </div>
        </nav>

      </header>
    </div>
  )
}
