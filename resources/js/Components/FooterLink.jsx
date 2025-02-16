import { Link } from "@inertiajs/react";

export default function FooterLink({ title, link = "" }){
    return (
        <>
            <li>
                {link !== "" ? (
                    <Link href={link} className="hover:text-red-200 transition-colors duration-200 ease-out">
                        {title}
                    </Link>
                ) : (
                    <p className="hover:text-red-200 hover:cursor-pointer transition-colors duration-200 ease-out">
                        {title}
                    </p>
                )}
            </li>
        </>
    );
}