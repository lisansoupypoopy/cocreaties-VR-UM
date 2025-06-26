import SmallTitle from "@/components/SmallTitle";
import { cocreatieData } from "@/data/cocreatieData";

import Link from "next/link";

export default function DiscoverMore({ currentPerson }){
    
  const others = cocreatieData.filter(entry => entry.person !== currentPerson);

  return (
    <>
      <SmallTitle title="More stories" />

      <div id="discover-more" className="grid grid-cols-4 gap-[50px] mt-[50px] mb-[100px] scroll-mt-[300px]">

        {others.map((person) => (
          <Link href={`/stories/${person.person.toLowerCase()}`} scroll={true} className="w-full" key={person.person}>
            <div key={person.person} className="relative flex justfy-center align-center p-4 rounded-4xl aspect-1/1 flex-1" style={{ backgroundColor: person.thumbBg }}>

                <img src={person.thumbImg.src} alt={person.thumbImg.alt} className="rounded-2xl w-full object-contain" />
                
                <h3 className="text-lg rounded-4xl absolute bottom-0 left-0 font-semibold m-2 p-[10px]" style={{ backgroundColor: person.titleBg }}>
                  {person.tagline}
                </h3>

            </div>
          </Link>
        ))}

      </div>
    </>
  );
}