import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import Introduction from "@/components/Introduction"
import Profile from "@/components/Profile"

import { btsData } from "@/data/btsData";


export default function BTS() {
  return (
    <div className="w-9/10 mx-auto">
      <NavBar />

      <Title title="Behind the Scenes" />

      <Introduction text={btsData.introduction.text} src={btsData.introduction.image.src} alt={btsData.introduction.image.alt}/>

      <Profile people={[btsData.lisanProfile, btsData.romyProfile]} multiple={true} />

      <Footer />
    </div>
  );
}

// import NavBar from "@/components/NavBar"
// import Footer from "@/components/Footer"
// import Title from "@/components/Title"
// import Introduction from "@/components/Introduction"
// import Profile from "@/components/Profile"
// import Brainstorming from "@/components/Brainstorming"
// import Drawing from "@/components/Drawing"
// import Conclusion from "@/components/Conclusion"
// import DiscoverMore from "@/components/DiscoverMore";

// import Link from "next/link";

// import { cocreatieData } from "@/data/cocreatieData";

// export default function DaantjePage() {
  
//   const person = cocreatieData.find(entry => entry.person === "Daantje");


//   return (
//     <div className="w-9/10 mx-auto">
//         <NavBar/>

//         <Title title={person.person} />

//         <Introduction text={person.introduction.text} src={person.introduction.image.src} alt={person.introduction.image.alt}/>

//         <Profile src={person.profile.image.src} alt={person.profile.image.alt} name={person.profile.name} study={person.profile.study} age={person.profile.age} country={person.profile.country} quote={person.profile.quote} traits={person.profile.personalityTraits} />

//         <Brainstorming brainstorms={person.brainstorm} />

//          <Drawing person={person.person} profile={person.profile} courseStory={person.courseStory} courseName={person.course.course} courseDescription={person.course.description}/>
        
//         <Conclusion conclusion={person.conclusion} />

//         <Link href="#title" scroll={true} className="h-auto w-1/2 block text-4xl font-bold p-[20px] place-self-center-safe bg-[#B0AFC6] rounded-2xl mt-[200px] mb-[200px]">Back to top ^</Link>

//         <DiscoverMore currentPerson={person.person} />

//         <Footer/>
//     </div>
//   );
// }