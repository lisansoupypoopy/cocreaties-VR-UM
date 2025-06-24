import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="footer mx-auto flex justify-between items-center p-5 mt-10 mb-10 bg-[#D7F171] rounded-3xl font-bold text-xl">
            <p>© 2025 Romy & Lisan</p>
            <ul>
                <li className="place-self-right"><Link href="/" className="hover:underline">Home</Link></li>
                <li className="place-self-right"><Link href="/behind-the-scenes" className="hover:underline">BTS</Link></li>
                {/* <li><a href="#" className="hover:underline">BTS</a></li> */}
            </ul>
        </footer>
    )
}