import React from 'react'
import {headerLogo}from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants' 


function Nav() {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'> 
            {/* max-container is a class that styled in index.css */}
            <a href="/"><img src={headerLogo} alt="logo" 
            width={130}
            height={29}
            />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
                {/* items already defined in index.js at constants folder */}
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'>
                        {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-md:block'>
                <img
                 src={hamburger}
                 alt="hamburger"
                 width={25}
                 height={25}
                  />
            </div>
        </nav>  
    </header>
  )
}

export default Nav
