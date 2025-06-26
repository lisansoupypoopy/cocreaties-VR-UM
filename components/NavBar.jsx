"use client";

import vrPoppetje from '@/public/vr-poppetje.png';
import Link from 'next/link'
import { useRef } from 'react';


export default function Navbar() {

    const handleStoriesClick = (e) => {
        e.preventDefault();
        const thumbs = document.getElementById('thumbs');
        if (thumbs) {
            thumbs.scrollIntoView({ behavior: 'smooth' });
        } else {
            // fallback: scroll to another element, e.g. 'fallback-section'
            const fallback = document.getElementById('discover-more');
            if (fallback) {
                fallback.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="navbar sticky z-99 top-4 bg-[#DFFF63] h-[85px] mx-auto rounded-[50px] flex justify-between items-center font-bold text-xl">
            <ul className="navbar-links flex align-center items-center pl-10">
                <li className="pl-3 pr-3 w-12"><img src={vrPoppetje.src} alt="Poppetje met VR bril"/></li>
                <li className="pl-3 pr-3 hover:underline"><Link href="/">Home</Link></li>
            </ul>
            <ul className="navbar-links flex align-center pr-10">
                <li className="pl-5 pr-5 hover:underline">
                    <a href="#thumbs" onClick={handleStoriesClick}>The stories</a>
                </li>
                <li className="pl-5 pr-5 hover:underline"><Link href="/behind-the-scenes">BTS</Link></li>
            </ul>
        </nav>
    )
}