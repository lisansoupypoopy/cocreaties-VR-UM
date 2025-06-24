"use client"
import { useEffect, useRef } from "react"
import romyEnLisan from '@/public/hero_img.png'

export default function HeroSection() {
    const titleRef = useRef();
    useEffect(() => {
        const element = titleRef.current;
        const titel = element.textContent;

        let nieuweHTML = "";

        for (let letter of titel) {
            const isBold = Math.random() < 0.7;
            if (isBold) {
                nieuweHTML += `<span style="font-weight: bold;">${letter}</span>`;
            } else {
                nieuweHTML += `<span style="font-weight: normal;">${letter}</span>`;
            }
        }

        element.innerHTML = nieuweHTML;

    }, []);

        
    return (
        <section className="hero-section flex mt-25 gap-[50px] mx-auto rounded-3xl">
            <div className="bg-[#B5EF8A] rounded-3xl p-5 w-1/2 h-fit">
                <h1 ref={titleRef} className="fractul-title text-6xl mb-5">Shared stories. Shared making. Shared meaning.</h1>
                <p className="text-2xl">We are <span className="font-bold">Romy</span> and <span className="font-bold">Lisan</span>, students of Communication and Multimedia Design at Zuyd Hogeschool. Our project involved co-creating with students, to come up with innovative VR applications. We used their ideas and dreams to create meaningful learning experiences.</p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <img className="rounded-3xl h-auto" src={romyEnLisan.src} alt="A picture of Romy and Lisan"/>
            </div>
        </section>
    )
}