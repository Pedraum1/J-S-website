import { Link } from "@inertiajs/react";

export default function Logo() {
    return(
        <Link href="/">
            <img src="/assets/logo_js.svg" className="h-24" />
        </Link>
    );
}
