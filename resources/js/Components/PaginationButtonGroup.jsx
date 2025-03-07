import { Link } from "@inertiajs/react";
import PaginationButton from "./PaginationButton";

export default function PaginationButtonGroup({ links }) {
    return (
        <>
            <div
                className="inline-flex shadow-xs"
                role="group"
            >
                {links.map((link, index) => (
                    <PaginationButton
                        link={link}
                        key={index}
                        arrayLength={links.length}
                        currentPage={index}
                    />
                ))}
            </div>
        </>
    );
}
