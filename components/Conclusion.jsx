import threeImg from "@/public/3.svg";
import SmallTitle from "@/components/SmallTitle";

import Link from "next/link";


export default function Conclusion(props){

    console.log(props.app.text);
    
    return(
        <>
            <div className="flex justify-center gap-[50px] pt-60 pb-25">
                
                <div className="flex-1 aspect-1/1 h-min bg-[#B0AFC6] flex items-center justify-center rounded-4xl">
                    <img src={threeImg.src} alt={threeImg.alt} />
                </div>
                
                <div className="flex-3">
                    <SmallTitle title="Long story short" />
                    <div className="bg-[#DFFF63] rounded-4xl p-[30px] text-2xl mt-[50px]">
                        <p>{props.conclusion}</p>
                    </div>
                </div>

            </div>

            <div className="flex justify-center gap-[50px]">
                <Link rel="noopener noreferrer" target="_blank" href={props.app.link} className="w-1/2 h-min">
                    <img src={props.app.image.src} alt={props.app.image.alt}/>
                </Link>
                <div className="bg-[#FF63E5] w-1/2 rounded-4xl pt-[50px] pb-[50px] pl-[70px] pr-[70px] text-2xl ml-[50px]">
                    <p>While researching, we found an app that really resonated with {props.person}'s idea.</p>
                    <p>{props.app.text}</p>
                </div>
            </div>
        </>

    )
}