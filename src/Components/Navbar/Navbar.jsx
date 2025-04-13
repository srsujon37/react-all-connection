import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react'

const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "Products",
      path: "/products"
    },
    {
      id: 3,
      name: "About Us",
      path: "/about"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog"
    }
  ];

const Navbar = () => {
    
    const [open, setOpen] = useState(false);

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (

        <nav className='flex justify-between mx-10  text-black mt-10'>           
            <span className='flex' onClick={() => setOpen(!open)}>
              {
              open ? 
              <X className='md:hidden'></X> 
              : <Menu className='md:hidden '></Menu>
              }
              <ul className={`md:hidden absolute duration-1000 ${open ? 'top-8' : '-top-40'} bg-amber-200 p-3 rounded-2xl`}>
                  {links}
              </ul>
              
              <h3>My Navbar</h3>
            </span>

            <ul className='md:flex hidden space-y-5'>
                  {
                    links
                  }
            </ul>

            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10'>
                      <a href="{route.path}">{route.name}</a>
                    </li>)
                }
            </ul> */}


            {/* <ul className='flex gap-6'>
                <ul className='mr-5'><a href="">Home</a></ul>
                <ul className='mr-5'><a href=""></a>About</ul>
                <ul className='mr-5'><a href=""></a>Blog</ul>
            </ul> */}

            <button>Login</button>
        </nav>

        
    );
};

export default Navbar;