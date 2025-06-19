import vrPoppetje from '@/images/vr-poppetje.png';

export default function Navbar() {

        return (
            <nav className="navbar sticky z-99 top-4 bg-[#D7F171] h-[85px] mx-auto rounded-[50px] flex justify-between items-center font-bold text-xl">
                <ul className="navbar-links flex align-center items-center pl-10">
                    <li className="pl-3 pr-3 w-12"><img src={vrPoppetje.src} alt="Poppetje met VR bril"/></li>
                    <li className="pl-3 pr-3 hover:underline"><a href="#">Home</a></li>
                </ul>
                <ul className="navbar-links flex align-center pr-10">
                    <li className="pl-5 pr-5 hover:underline"><a href="#">The stories</a></li>
                    <li className="pl-5 pr-5 hover:underline"><a href="#">BTS</a></li>
                </ul>
            </nav>
        )
    }