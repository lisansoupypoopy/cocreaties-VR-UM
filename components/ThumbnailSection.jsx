import Thumb from '@/components/Thumb';
export default function ThumbnailSection() {
    return (
        <>
            <h2 className="fractul-title text-4xl text-center text-white p-10">These are their stories</h2>
            
            <section className="flex">
                <Thumb 
                    img={{src: "./images/vr mentor.png", alt: "A virtual mentor"}}
                    title="Our mentor is always busy. Why not a virtual one?"
                />
                <Thumb 
                    img="./images/vr mentor.png"
                    title="Lab experiments are exprensive. So how do we practice?"
                />
            </section>
        </>
    )
}