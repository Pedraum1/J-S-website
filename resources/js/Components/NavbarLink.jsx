import { Link } from "@inertiajs/react";

export default function NavbarLink({title, link}){
    return (
        <li>
            <Link href={link}>
                <h6 className="hover:border-b-red-800 border-b-transparent border-b transition-colors duration-200 ease-out">
                    {title}
                </h6>
            </Link>
        </li>
    );
}