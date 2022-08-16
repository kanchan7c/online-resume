import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Skills', link: '/skills' },
    { name: 'Experience', link: '/experience' },
    { name: 'Contact', link: '/contact' },
  ];
  return (
    <nav>
      <ul>
        {navLinks.map((item) => (
          <Link href={item.link} key={item.name}>
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
