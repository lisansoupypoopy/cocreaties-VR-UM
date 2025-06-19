
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import Introduction from "@/components/Introduction"
import Profile from "@/components/Profile"

import { cocreatieData } from "@/data/cocreatieData";
// import { vrBenefits } from "@/data/vrBenefits"

export default function LucaPage() {
  
  const luca = cocreatieData.find(entry => entry.person === "Luca");


  return (
    <div className="w-9/10 mx-auto">
        <NavBar/>

        <Title title={luca.person} />

        <Introduction text={luca.introduction.text} src={luca.introduction.image.src} alt={luca.introduction.image.alt}/>

        <Profile src={luca.profile.image.src} alt={luca.profile.image.alt} name={luca.profile.name} study={luca.profile.study} age={luca.profile.age} country={luca.profile.country} quote={luca.profile.quote} traits={luca.profile.personalityTraits} />


        <Footer/>
    </div>
  );
}