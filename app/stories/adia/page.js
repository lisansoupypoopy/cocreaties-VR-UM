import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import Introduction from "@/components/Introduction"
import Profile from "@/components/Profile"
import Brainstorming from "@/components/Brainstorming"
import Drawing from "@/components/Drawing"

import { cocreatieData } from "@/data/cocreatieData";

export default function LucaPage() {
  
  const person = cocreatieData.find(entry => entry.person === "Adia");


  return (
    <div className="w-9/10 mx-auto">
        <NavBar/>

        <Title title={person.person} />

        <Introduction text={person.introduction.text} src={person.introduction.image.src} alt={person.introduction.image.alt}/>

        <Profile src={person.profile.image.src} alt={person.profile.image.alt} name={person.profile.name} study={person.profile.study} age={person.profile.age} country={person.profile.country} quote={person.profile.quote} traits={person.profile.personalityTraits} />

        <Brainstorming brainstorms={person.brainstorm} />

        <Drawing />

        <Footer/>
    </div>
  );
}