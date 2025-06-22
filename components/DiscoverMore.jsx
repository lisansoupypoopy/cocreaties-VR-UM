import SmallTitle from "@/components/SmallTitle";
import { cocreatieData } from "@/data/cocreatieData";

import Link from "next/link";

export default function DiscoverMore({ currentPerson }){
    
  const others = cocreatieData.filter(entry => entry.person !== currentPerson);

  return (
    <>
      <SmallTitle title="Discover more" />
      <div className="flex gap-[50px]">
        {others.map((person) => (
          <Link href={`/stories/${person.person.toLowerCase()}`} scroll={true} className="w-1/3" key={person.person}>
            <div key={person.person} className="p-4 rounded">
                {person.person}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}