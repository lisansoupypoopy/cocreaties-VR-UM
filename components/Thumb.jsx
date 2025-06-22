import Link from 'next/link';


export default function Thumb(props){

    return(
        <article style={props.style}>
            <Link href={props.href}>
                {/* <img src={props.img.src} alt={props.title.alt} className="w-1/2 h-auto rounded-lg" /> */}
                <h3 className="text-2xl rounded-4xl bg-[#a85a32]">{props.title}</h3>
            </Link>
        </article>
    )
}