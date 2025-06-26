import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="footer mx-auto flex justify-between items-center p-5 mt-10 mb-10 bg-[#D7F171] rounded-3xl font-bold text-xl">
            <p>© 2025 Romy & Lisan</p>
            <ul>
                <li className="text-right pb-[5px]"><Link href="/" className="hover:underline">Home</Link></li>
                <li className="text-right pb-[5px]"><Link href="/key-benefits-of-VR" className="hover:underline">Key benefits of VR</Link></li>
                <li className="text-right"><Link href="/behind-the-scenes" className="hover:underline">Behind The Scenes</Link></li>
            </ul>
        </footer>
    )
}