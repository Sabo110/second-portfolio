import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
    const links = [
        {text: '659182723', link: 'https://wa.me/659182723', icon: <FaWhatsapp className='text-xl md:text-2xl'/>},
        {text: 'sabo110', link: 'https://github.com/Sabo110', icon: <FaGithub className='text-xl md:text-2xl'/>},
        {text: 'jalloud-phanuel', link: 'https://www.linkedin.com/in/jalloud-phanuel', icon: <FaLinkedinIn className='text-xl md:text-2xl'/>}
    ]
  return (
    <footer className='px-3 pt-5 pb-2 bg-gray-800 text-gray-300'>
        <div className='flex md:flex-row md:justify-center flex-col gap-2 md:gap-6 mb-3'>
            {links.map((item, index) => (
                <a href={item.link} target='_blank' key={index} className='flex items-center gap-1'>
                    {item.icon}
                    {item.text}
                </a>
            ))}
        </div>
        <p>Tous droits reservés @copiright 2024</p>
    </footer>
  )
}
