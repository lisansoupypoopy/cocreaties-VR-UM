import Link from 'next/link';


export default function Thumb(props){
    return(
        <article>
            <Link href={props.href}>
                {/* <img src={props.img.src} alt={props.title.alt} className="w-1/2 h-auto rounded-lg" /> */}
                <h3 className="text-2xl text-center mt-4">{props.title}</h3>
            </Link>
        </article>
    )
}