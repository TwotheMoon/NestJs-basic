import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === "/" ? "active" : "black"}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : "black"}>About</a>
            </Link >
            <style jsx>{`
                nav{
                }
                a{
                    text-decoration: none;
                }
            `}</style>
        </nav >
    );
}