import twoImg from "@/public/2.svg";
import SmallTitle from "@/components/SmallTitle";

import Link from "next/link";

export default function Drawing(props) {

  return (
    <>
      <div className="flex justify-center gap-[50px] pt-60 pb-25">
        <div className="flex-3">
          <SmallTitle title="Let's get drawing" />
          <div className="bg-[#DFFF63] rounded-4xl p-[30px] text-2xl mt-[50px]">
            <p>
              We believe that drawing helps unleash creativity that might not come
              up otherwise. We asked them to think of their wildest VR-dreams.
              Even though we kept getting the same reaction, “I can’t draw!”, they
              thought up fascinating and innovative ideas. Afterwards, we analyzed
              the drawings and sketches, and based on them, we created new
              illustrations that tell the story they wanted to express. The
              sketches weren’t the final result, but a tool to spark creativity.
              If you would like to see the drawing {props.person} made, <Link href="" className="underline hover:font-bold">click here</Link>.
            </p>
          </div>
        </div>

        <div className="flex-1 aspect-1/1 h-min bg-[#B0AFC6] flex items-center justify-center rounded-4xl">
          <img src={twoImg.src} alt={twoImg.alt} />
        </div>
      </div>

      <div className="flex flex-cols-4 gap-[50px] pb-[100px]">
        <div className="flex-3">
          <h3 className="font-bold text-3xl p-[20px] bg-[#B0AFC6] rounded-4xl mb-[50px]">
            Inside {props.person}'s imagination
          </h3>
          <div className="flex gap-[50px]">
            <p className="font-bold text-3xl p-[20px] bg-[#DFFF63] rounded-4xl">Course {props.person} believes needs change: <span className="font-extrabold">{props.courseName}</span></p>
            <p className="text-2xl p-[20px] bg-[#FF63E5] rounded-4xl h-fit">{props.courseDescription}</p>
          </div>
        </div>
        <div className="flex-1 aspect-1/1 h-min bg-[#7FC29B] flex items-center justify-center rounded-4xl">
          <img src={props.profile.image.src} alt={props.profile.image.alt}/>
        </div>
      </div>

    <div className="flex flex-col gap-[50px]">

      {props.courseStory.map((story, i) => (
        <div  key={i}
              className={`flex justify-between items-start text-2xl gap-[50px] rounded-4xl ${story.imgBg}
                ${ i % 2 === 1 ? 'flex-row-reverse' : ''}`
              }
        >
          <div className="rounded-4xl w-1/2 flex items-center justify-center pt-[50px] pb-[50px] pl-[70px] pr-[70px]" style={{ backgroundColor: story.imgBg }}>
            <img src={story.src} alt={story.alt} />
          </div>
          <p className="rounded-4xl w-1/2 pt-[50px] pb-[50px] pl-[70px] pr-[70px] " style={{ backgroundColor: story.textBg }}>{story.text}</p>
        </div>
      ))}

    </div>
          
    </>
  );
}
