import ProfileCard from "@/components/ProfileCard";

export default function Profile({ people, multiple }) {
  return (
    <div className="pt-[100px] w-full text-xl font-bold space-y-[50px]">
      <div className="bg-[#B0AFC6] rounded-[30px] mb-[50px] p-5 w-[calc(50%-25px)] text-5xl">
        {multiple === false ? <h2>Who is {people[0].name}?</h2> : <h2>Who are {people[0].name} and {people[1].name}?</h2>}
      </div>

      <div className="flex gap-[50px]">
        {people.map((person, index) => (

          <ProfileCard
                key={index}
                name={person.name}
                src={person.image.src}
                alt={person.image.alt}
                study={person.study}
                age={person.age}
                country={person.country}
                quote={person.quote}
                traits={person.personalityTraits}
          />
          
        ))}
      </div>
    </div>
  );
}