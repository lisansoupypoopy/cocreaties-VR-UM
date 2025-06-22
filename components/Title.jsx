"use client"
import { useEffect, useRef } from "react"

export default function Title(props){
    
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

    return(
        <h1 ref={titleRef} id={props.id} className="text-6xl p-15 rounded-[50px] bg-[#B5EF8A] mx-auto mt-15 scroll-mt-38">{props.title}</h1>
    )
}