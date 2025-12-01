'use client';
export default function Navbar() {
  return (
    <>
      
      <header className="bg-white border-b border-gray-200">
        <div className="bg-gray-50 py-2.5 text-sm">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center space-x-6 text-gray-600 font-medium">
              <a href="#" className="hover:text-gray-900">Premium</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-gray-900">Mobile App</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-gray-900">Dictionary</a>
            </div>
            <button title="Toggle theme" aria-label="Toggle theme" className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="py-6">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <a href="#" className="flex items-center space-x-2">
                <img src="https://langeek.co/assets/images/logo.svg" alt="LanGeek" className="h-9" />
              </a>
              <nav className="hidden lg:flex space-x-10 text-gray-700 font-medium">
                {['Vocabulary', 'Grammar', 'Expressions', 'Pronunciation', 'Reading'].map((item) => (
                  <a key={item} href={`/${item.toLowerCase()}`} className="hover:text-blue-600 transition">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900" title="Search" aria-label="Search">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition flex items-center gap-2 shadow-sm">
                {/* <span className="text-xs">UK Flag</span> */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span>Sign in</span>
              </button>
            </div>
          </div>
        </div>
      </header>  
    </>
  );
}