import oneImg from "@/images/1.svg";
import SmallTitle from "@/components/SmallTitle";


export default function Brainstorming(props){
    
    return(
        <>
        <div className="flex justify-center gap-[50px] pt-60 pb-25">
            
            <div className="flex-1 aspect-1/1 h-min bg-[#B0AFC6] flex items-center justify-center rounded-4xl">
                <img src={oneImg.src} alt={oneImg.alt} />
            </div>
            
            <div className="flex-3">
                <SmallTitle title="Brainstorming" />
                <div className="bg-[#DFFF63] rounded-4xl p-[30px] text-2xl mt-[50px]">
                    <p>In order to gather valuable stories and insights to shape our VR solution, we had to collect a little more information on the students’ curriculum. What do they do exactly, what drives them, and what do they think is lacking? Finding out their wants and needs. We guided participants with and without VR experience in exploring different applications and had them share their thoughts through guided questions and a short brainstorm. We won’t bore you with the details, so here is a short passage:</p>
                </div>
            </div>

        </div>

        <div className="flex flex-col gap-[100px] mt-8">
            {props.brainstorms.map((quote, index) => (
                <div key={index}
                className={`flex gap-[50px] ${
                    index % 2 === 1 ? 'flex-row-reverse' : ''
                }`}
                >
                    <div className="flex-1 aspect-1/1 h-min bg-[#7FC29B] rounded-4xl flex items-center justify-center">
                        <img
                            src="/images/vr-poppetje.png"
                            alt="Persoontje"
                        />
                    </div>
                    <p className="bg-[#B0AFC6] h-min flex-3 p-[50px] text-2xl rounded-4xl">
                        {quote}
                    </p>
                </div>
            ))}
        </div>
        </>
    )
}