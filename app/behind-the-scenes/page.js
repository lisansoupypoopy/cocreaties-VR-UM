import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import Introduction from "@/components/Introduction"
import Profile from "@/components/Profile"
import SmallTitle from "@/components/SmallTitle"
import DiscoverMore  from "@/components/DiscoverMore"

import { btsData } from "@/data/btsData";
import Link from "next/link";

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

      <div className="flex justify-center gap-[50px] pb-[50px]">
        <div className="bg-[#B5EF8A] text-2xl p-[50px] rounded-4xl flex-3">
          <p className="pb-5">&quot;What followed was a period full of ups and downs. It was very valuable for my learning process, but in the moment it was quite stressful. I sometimes found (and still find) it difficult to work on the project, because there were so many different paths to explore. I find it hard to write down our process because it goes in so many different directions. </p>
          <p>We tried a bit of everything and had conversations with various people. Many had different opinions and ideas, which is logical. The designer&apos;s task is to summarize all those ideas into one final design. Maybe I was afraid of making mistakes; you don&apos;t want to forget anything, so maybe that&apos;s why you end up doing nothing at all.&quot;</p>
        </div>
        <div className="flex-1 aspect-1/1 h-min bg-[#7FC29B] rounded-4xl flex items-center justify-center">
          <img
            src={btsData.romyProfile.image.src} 
            alt={btsData.romyProfile.image.alt} 
          />
        </div>
      </div>

      <div className="flex justify-center gap-[50px] pb-[100px]">
        <img className="w-[calc(50%-25px)]" src={btsData.onzeImages.romyVr.src} alt={btsData.onzeImages.romyVr.alt}/>
        <img className="w-[calc(50%-25px)]" src={btsData.onzeImages.romyPaper.src} alt={btsData.onzeImages.romyPaper.alt}/>
      </div>

      <div className="flex flex-row-reverse justify-center gap-[50px] pb-[50px]">
        <div className="bg-[#B5EF8A] text-2xl p-[50px] rounded-4xl flex-3">
          <p className="pb-5">&quot;We interviewed three FHML students who already had some experience with VR. Their reaction wasn&apos;t very enthusiastic (read: 🙄). The apps they had tested in class often missed the mark, and students tend to be brutally honest about that. But that actually gave us more motivation: it can be done better. VR cán be meaningful in education - but only if it&apos;s done right. </p>
          <p>We chose to involve students very closely, by having them give their opinions via co-creation. I had never even heard of co-creation before, but it seemed like this was the perfect opportunity to learn. It took a few weeks to perfect, and the first session was far from perfect, but with some hard work we managed to get there in the end. And we had a lot of fun during the process!&quot;</p>
        </div>
        <div className="flex-1 aspect-1/1 h-min bg-[#7FC29B] rounded-4xl flex items-center justify-center">
          <img
            src={btsData.lisanProfile.image.src} 
            alt={btsData.lisanProfile.image.alt} 
          />
        </div>
      </div>

      <div className="flex justify-center gap-[50px] pb-[200px]">
        <img className="w-[calc(50%-25px)]" src={btsData.onzeImages.lisanCocreatie.src} alt={btsData.onzeImages.lisanCocreatie.alt}/>
        <img className="w-[calc(50%-25px)]" src={btsData.onzeImages.lisanVr.src} alt={btsData.onzeImages.lisanVr.alt}/>
      </div>


      <div className="flex flex-row-reverse justify-center gap-[50px]">

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

      <p className="w-[calc(75%-25px)] font-bold text-3xl bg-[#B0AFC6] p-[30px] rounded-4xl mt-[50px] mb-[50px]">Gravity Sketch</p>

      <div className="flex gap-[50px] justify-center pb-[100px]">
        <p className="text-2xl h-fit bg-[#7FC29B] p-[50px] w-1/2 rounded-4xl">We used Gravity Sketch to introduce people with VR: Gravity Sketch is a VR app where you can create 3D drawings. You can move around your creations and see them from every side, as if you're inside your own design.</p>
        <img className="rounded-4xl h-fit w-1/2" src={btsData.gravitySketch.luca.src} alt={btsData.gravitySketch.luca.alt} />
      </div>

      <div className="flex gap-[50px] justify-center">
        <img className="rounded-4xl w-1/2 h-fit" src={btsData.gravitySketch.romy.src} alt={btsData.gravitySketch.romy.alt} />
        <p className="text-2xl h-fit bg-[#FF63E5] p-[50px] w-1/2 rounded-4xl">We played a game where we drew something in VR and hid a specific object. The other person needed to find it. If they did, they could also draw something. This was really fun. We made our drawing very abstract to encourage people to draw whatever they want. It doesn’t need to be realistic to fulfill its purpose.</p>
      </div>

      <p className="w-[calc(75%-25px)] font-bold text-3xl bg-[#B0AFC6] p-[30px] rounded-4xl mt-[50px] mb-[50px]">Brainstorming and Sketching</p>

      <div className="flex gap-[50px] justify-center">
        <p className="text-2xl h-fit bg-[#B5EF8A] p-[50px] w-1/2 rounded-4xl">We used Gravity Sketch to introduce people with VR: Gravity Sketch is a VR app where you can create 3D drawings. You can move around your creations and see them from every side, as if you're inside your own design.</p>
        <img className="rounded-4xl h-fit w-1/2" src={btsData.questionnaire.src} alt={btsData.questionnaire.alt} />
      </div>

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

      <Link href="#title" scroll={true} className="h-auto w-1/2 block text-4xl font-bold p-[20px] place-self-center-safe bg-[#B0AFC6] rounded-2xl mt-[200px] mb-[200px]">Back to top ^</Link>

      <DiscoverMore />

      <Footer />
    </div>
  );
}