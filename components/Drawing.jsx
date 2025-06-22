import twoImg from "@/public/2.svg";
import SmallTitle from "@/components/SmallTitle";

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
              If you would like to see the drawing {props.person} made, click here.
            </p>
          </div>
        </div>

        <div className="flex-1 aspect-1/1 h-min bg-[#B0AFC6] flex items-center justify-center rounded-4xl">
          <img src={twoImg.src} alt={twoImg.alt} />
        </div>
      </div>

      <div>
        <div>
          <h3 className="font-bold text-3xl text-center mt-10 mb-5">
            Inside {props.person}'s imagination
          </h3>
          <p className="">Course {props.person} believes needs change: <span className="font-extrabold">{props.courseName}</span></p>
          <p className="">{props.courseDescription}</p>
        </div>
        <img src={props.person} alt="persoontje"/>
      </div>

    <div className="flex flex-col">

      {props.courseStory.map((story, i) => (
        <div  key={i}
              className={`flex items-center text-2xl gap-[50px]
                ${ i % 2 === 1 ? 'flex-row-reverse' : ''}`
              }
        >
          <img src={story.src} alt={story.alt} className="rounded-2xl mb-3" />
          <p className="rounded-2xl bg-[#B]">{story.text}</p>
        </div>
      ))}

    </div>
          
    </>
  );
}
