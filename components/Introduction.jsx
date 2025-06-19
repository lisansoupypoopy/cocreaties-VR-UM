// img import:
// import vrPoppetje from '@/images/vr-poppetje.png';
import lucaAdia from '@/images/image_luca_adia.png'; 

export default function Introduction(props) {

    return (
       <div className="flex gap-[50px] rounded-[50px] justify-between mt-[50px]">
        <div className="bg-[#FF63E5] rounded-[50px] h-min w-1/2">
            <p className="text-2xl pt-[50px] pb-[50px] pl-[70px] pr-[70px]">{props.text}</p>
        </div>
        <img src={props.src} alt={props.alt} className="rounded-[50px] w-1/2" />

       </div>
    )
}
