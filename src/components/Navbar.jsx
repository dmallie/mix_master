import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../logo.svg';
import WrapperNavbar from '../assets/wrapper_navbar';

const Navbar = () => {
       return(
<WrapperNavbar>

       <div className='navbar-wrapper'>
              <div className='container'>
                     <Link to='/'>
                            <img src={logo} alt="logo" />
                     </Link>
                     <ul>
                            <Link to='/'>
                                   <li className='nav_list active'>Home </li>
                            </Link>
                            <Link to='/about'>
                                   <li className='nav_list'>About</li>
                            </Link>
                            <Link to='/newsletter'>
                                   <li className='nav_list'>Newsletter</li>
                            </Link>
                     </ul>
              </div>
       </div>
</WrapperNavbar>
       );
}; export default Navbar;