import Thumb from '@/components/Thumb';
import SmallTitle from './SmallTitle';
export default function ThumbnailSection() {
    return (
        <>
            <h2 className="h-min w-3/4 place-self-end text-5xl font-bold p-[30px] rounded-4xl bg-[#FF63E5] mt-[235px] mb-[50px]">
                Discover the stories
            </h2>
            
            <section className="flex">
                <Thumb 
                    // img={{src: "./images/vr mentor.png", alt: "A virtual mentor"}}
                    title="Our mentor is always busy. Why not a virtual one?"
                    href="/stories/adia"
                />
                <Thumb 
                    // img="./images/vr mentor.png"
                    title="Stage Fright Simulator"
                    href="/stories/rachel"
                />
                <Thumb 
                    // img={{src: "./images/vr mentor.png", alt: "A virtual mentor"}}
                    title="Inside the Operating Room: Up Close in VR"
                    href="/stories/daantje"
                />
                <Thumb 
                    // img="./images/vr mentor.png"
                    title="Lab Skills for Everyone, Anytime"
                    href="/stories/luca"
                />
            </section>
        </>
    )
}