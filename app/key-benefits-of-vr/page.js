
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import BenefitCard from "@/components/BenefitCard"
import Title from "@/components/Title"
import { vrBenefits } from "@/data/vrBenefits"

export default function BenefitPage() {

    let benefits = vrBenefits.map((benefit) => {
      return (
        <BenefitCard 
          key={benefit.id}
          title={benefit.title}
          explanation={benefit.description}
          color={benefit.color}
        />
      )
    })
  return (
    <div className="w-9/10 mx-auto">
        <NavBar />

        <Title title="Key benefits of VR" />
        <p className="bg-[#FF5CE4] p-10 rounded-4xl bg-[#B5EF8A] w-5/11 mt-15 text-2xl">As guidelines of “good practice” we have used the 10 Key benefits of VR research of Steve Bambury. These benefits answer the question “Why VR?”.<br/> <span className="font-bold">Click on the cards to reveal a specific benefit!</span></p>
        <div className="flex flex-col mt-80">
            {benefits}
        </div>
        
        <Footer />
    </div>
  );
}