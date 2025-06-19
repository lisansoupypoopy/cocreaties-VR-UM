import twoImg from "@/images/2.svg";
import SmallTitle from "@/components/SmallTitle";

export default function Drawing(props) {
  return (
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
            {/* If you would like to see the drawing Luca made, click here. */}
          </p>
        </div>
      </div>

      <div className="flex-1 aspect-1/1 h-min bg-[#B0AFC6] flex items-center justify-center rounded-4xl">
        <img src={twoImg.src} alt={twoImg.alt} />
      </div>
    </div>
  );
}
