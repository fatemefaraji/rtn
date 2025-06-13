import React, { useState } from 'react';

// Navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarItems = [
    { label: "Home", href: "#" },
    { label: "Posts", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" }
  ];

  return (
    <nav className='bg-white shadow-md w-full z-10 sticky top-0'>
      <div className='max-w-4xl mx-auto px-4 flex justify-between items-center py-0'>
        {/* Brand */}
        <div className='text-2xl font-serif text-purple-500 py-4'>
          Bloggy
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6'>
          {NavbarItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='text-gray-600 hover:text-purple-500 transition py-4'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-2 shadow-inner">
          <ul className="flex flex-col items-center space-y-2">
            {NavbarItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 w-full text-center"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

// App component
function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Clear browser default styles */}
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          #root {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="p-8 text-center text-gray-700">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog!</h1>
        <p className="text-lg">
          This is the main content area, positioned directly below the navbar.
        </p>
      </main>
    </div>
  );
}

export default App;
