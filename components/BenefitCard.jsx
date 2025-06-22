"use client"
import { useState } from "react";

export default function BenefitCard(props){

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((previousState) => !previousState);
    };

    const styles = {
        backgroundColor: props.color,
        transform: isOpen ? "translateX(120%)" : "translateX(0px)",
          transition: "transform 300ms ease-in-out, scale 100ms ease-in",
    }
    
    return(
        <div
            onClick={handleClick} 
            className="cursor-pointer w-5/11 rounded-4xl bg-[#B5EF8A] p-10 mt-[-280] hover:scale-105" style={styles}>
            
            <h2 className="font-bold text-3xl pb-5">{props.title}</h2>
            <p className="text-2xl leading-9">{props.explanation}</p>

        </div>
    )
}