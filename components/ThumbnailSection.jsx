import Link from 'next/link';
// import SmallTitle from './SmallTitle';

// import mentorThumbnail from '@/public/VR-mentor-thumb.png';
// import presentationThumbnail from '@/public/fear-presentation-thumb.png';
// import surgeryThumbnail from '@/public/Vr-operation-thumb.png';
// import labThumbnail from '@/public/VR-lab-thumb.png';

import { cocreatieData } from '@/data/cocreatieData';



export default function ThumbnailSection() {

    const thumbnails = cocreatieData.map((cocreatie) => ({
        person: cocreatie.person,
        tagline: cocreatie.tagline,
        thumbImg: cocreatie.thumbImg,
    }));


    return (
        <>
            <h2 id="thumbs" className="h-min w-3/4 text-5xl font-bold p-[30px] rounded-4xl bg-[#FF63E5] mt-[235px] mb-[50px] scroll-mt-35">
                Discover the stories
            </h2>
            
            <section className="flex flex-col gap-[50px]">

                <Link href="/stories/adia" className="w-3/4">

                    <article className="bg-[#7FC29B] rounded-4xl relative h-100 w-1/1  flex items-center justify-center">
                        <img src={thumbnails[1].thumbImg.src} alt="VR mentor" className="w-auto h-9/10" />
                        <h3 className="w-[97%] p-[20px] font-bold absolute left-0 bottom-0 m-3 text-3xl rounded-4xl bg-[#B0AFC6]">{thumbnails[1].tagline}</h3>
                    </article>
                </Link>

                <div className="flex gap-[50px] relative h-100">

                    <Link href="/stories/rachel" className="w-1/2 rounded-4xl bg-[#B0AFC6] relative h-100">

                        <article className="relative h-1/1  flex items-center justify-center">
                            <img src={thumbnails[3].thumbImg.src} alt="Fear of presentations" className="w-auto h-9/10" />
                            <h3 className="w-[97%] p-[20px] font-bold absolute left-0 bottom-0 m-3 text-3xl rounded-4xl bg-[#FF63E5]">{thumbnails[3].tagline}</h3>
                        </article>
                    </Link>

                    <Link href="/stories/daantje" className="w-1/2 rounded-4xl bg-[#B0AFC6] relative h-100">

                        <article className="relative h-1/1 flex items-center justify-center">
                            <img src={thumbnails[2].thumbImg.src} alt="VR surgery" className="w-auto h-9/10" />
                            <h3 className="w-[97%] p-[20px] font-bold absolute left-0 bottom-0 m-3 text-3xl rounded-4xl bg-[#B5EF8A]">{thumbnails[2].tagline}</h3>
                        </article>
                    </Link>

                </div>

                <Link href="/stories/luca" className="w-3/4 place-self-end">

                    <article className="bg-[#DFFF63] rounded-4xl relative h-100 w-1/1  flex items-center justify-center">
                        <img src={thumbnails[0].thumbImg.src} alt="VR lab" className="w-auto h-9/10" />
                        <h3 className="w-[97%] p-[20px] font-bold absolute left-0 bottom-0 m-3 text-3xl rounded-4xl bg-[#B0AFC6]">{thumbnails[0].tagline}</h3>
                    </article>
                </Link>

            </section>
        </>
    )
}