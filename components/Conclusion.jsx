import threeImg from "@/public/3.svg";
import SmallTitle from "@/components/SmallTitle";


export default function Conclusion(props){
    
    return(
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
    )
}