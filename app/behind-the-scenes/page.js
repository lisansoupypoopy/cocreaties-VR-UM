import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import Introduction from "@/components/Introduction"
import Profile from "@/components/Profile"
import SmallTitle from "@/components/SmallTitle"

import { btsData } from "@/data/btsData";

import oneImg from "@/public/1.svg";
import twoImg from "@/public/2.svg";
import threeImg from "@/public/3.svg";


export default function BTS() {
  return (
    <div className="w-9/10 mx-auto">
      <NavBar />

      <Title title="Behind the Scenes" />

      <Introduction text={btsData.introduction.text} src={btsData.introduction.image.src} alt={btsData.introduction.image.alt} />

      <Profile people={[btsData.lisanProfile, btsData.romyProfile]} multiple={true} />

      <div className="flex justify-center gap-[50px] pt-60 pb-25">

        <div className="flex-1 aspect-1/1 h-min bg-[#B0AFC6] flex items-center justify-center rounded-4xl">
          <img src={oneImg.src} alt={oneImg.alt} />
        </div>

        <div className="flex-3">
          <SmallTitle title="Research" />
          <div className="bg-[#DFFF63] rounded-4xl p-[30px] text-2xl mt-[50px]">
            <p>Our VR experiences were very minimal; we had only put on a VR headset once or twice. Step 1 was getting familiar with VR, through the headsets we have at school. One day, we went to the VR lab by ourselves and tried out various things. Like the meditation app TRIPP: we were completely alone in the room with no sounds, which allowed us to fully immerse ourselves in the app. Or beatsaber: getting our daily exercise by slashing blocks to the rythm of a song. Some games were clearly fun, but some didn’t work or weren’t successful. That did cause some frustration.</p>
          </div>
        </div>

      </div>


{/* hier komt nog wat tussen */}


      <div className="flex flex-row-reverse justify-center gap-[50px] pt-60 pb-25">

        <div className="flex-1 aspect-1/1 h-min bg-[#B0AFC6] flex items-center justify-center rounded-4xl">
          <img src={twoImg.src} alt={twoImg.alt} />
        </div>

        <div className="flex-3">
          <SmallTitle title="Let&apos;s Co-Create" />
          <div className="bg-[#DFFF63] rounded-4xl p-[30px] text-2xl mt-[50px]">
            <p>
              A co-creation session is a gathering where different participants brainstorm ideas and solutions together. The process is all about equal collaboration, with everyone&apos;s unique perspective taking center stage.
              No prior experience with VR was needed. Although if you had some, that was a nice bonus!
            </p>
            <p>
              We started by asking a few short questions about VR, then gave everyone the chance to get familiar with the headset. After that, participants tried out several applications we had prepared. We ended the session with a short brainstorm and a conversation about everyone&apos;s experience.
            </p>
          </div>
        </div>

      </div>



{/* nog spul tussen */}



      <div className="flex justify-center gap-[50px] pt-60 pb-25">

        <div className="flex-1 aspect-1/1 h-min bg-[#B0AFC6] flex items-center justify-center rounded-4xl">
          <img src={threeImg.src} alt={threeImg.alt} />
        </div>

        <div className="flex-3">
          <SmallTitle title="Long story short" />
          <div className="bg-[#DFFF63] rounded-4xl p-[30px] text-2xl mt-[50px]">
            <p>
              We hope this project opens the door to more opportunities for students and educators to think outside the box. Too often, we fall back on the most obvious or traditional choices in education, not because they’re the best, but because they’re familiar and easy to implement. But education should be more than efficient; it should be engaging, inspiring, and meaningful.
            </p>
            <p>
              Through this project, we wanted to challenge that mindset. Students today are asking for more creativity, more room to explore, and more space to express themselves in ways that match how they experience the world. A large part of the student population are visual thinkers. Yet, traditional educational methods often prioritize text-heavy, abstract approaches.
            </p>
            <p>
              By using tools like VR and Gravity Sketch, we can support those who learn best through images, space, interaction, and movement. These technologies make it possible to design learning experiences that are immersive, intuitive, and deeply personal.
            </p>
            <p>
              Let&apos;s give students the chance to learn in a way that fits them. Not just the way that fits the system.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}