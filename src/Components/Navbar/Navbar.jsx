import React from 'react';
import Link from './Link';

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
    return (


        <nav>
            <ul className='flex '>
                  {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
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
        </nav>
    );
};

export default Navbar;