import React, { useState } from 'react';

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
        <div className='text-2xl font-serif text-purple-500 py-4'>
          Bloggy
        </div>

        <ul className='hidden md:flex space-x-6'>
          {NavbarItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='text-gray-600 hover:text-purple-500 transition py-4'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 text-2xl">
            ☰
          </button>
        </div>
      </div>

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

export default Navbar;
