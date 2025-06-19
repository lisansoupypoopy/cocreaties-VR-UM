import luca from '@/images/Luca_profile.svg'; 

export default function Profile(props) {

    return (
        <div className="pt-[100px] w-19/40 text-xl font-bold">
            <div className=" bg-[#B0AFC6] rounded-[30px] mb-[50px] p-5">
                <h2 className=" text-5xl text-center">Who is {props.name}?</h2>
            </div>
            <div className="bg-[#DFFF63] rounded-[50px] p-[25px] flex gap-[40px]">
                <div className="w-1/2">
                    <div className="h-min bg-[#B5EF8A] flex align-center justify-center rounded-[30px] p-6">
                        <img src={props.src} alt={props.alt}/>
                    </div>
                    <div className="flex flex-wrap gap-[20px] justify-evenly mt-6">

                        {props.traits.map(({ trait, color }, index) => (
                            <p
                            key={index}
                            className="pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[20px]"
                            style={{ backgroundColor: color }}
                            >
                                {trait}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] w-1/2">
                    <p className="w-min bg-[#7FC29B] p-[20px] rounded-[30px] text-2xl">{props.name}</p>
                    <p className="w-min bg-[#FF63E5] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[20px]">{props.study}</p>
                    <p className="w-max bg-[#B5EF8A] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[20px]">{props.age}</p>
                    <p className="w-max bg-[#B0AFC6] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[20px]">{props.country}</p>
                    <p className="w-fit bg-[#7FC29B] p-[20px] rounded-[30px]">“{props.quote}”</p>
                </div>
            </div>
        </div>
    )
}


        // zwart: "#181818",
        // paars: "#B0AFC6",
        // turquoise: "#7FC29B",
        // groen: "#B5EF8A",
        // geel: "#DFFF63",
        // wit: "#FFFFFF",
        // roze: "#FF63E5"