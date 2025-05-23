import { Link } from "@inertiajs/react";

export default function PaginationButton({ link, arrayLength, currentPage }) {
    const getPaginationText = (label) => {
        if(label == "pagination.previous"){return "&#x3c;"}
        if(label == "pagination.next"){return "&#x3e;"}
        return label;

    }

    return (
        <Link href={link.url}>
            <button
                type="button"
                className={"md:px-4 px-2 py-2 text-sm bg-red-800 hover:bg-red-900 transition-colors duration-200 ease-out text-red-50 " + (currentPage === (arrayLength-1) ? "rounded-r-lg " : "") + (currentPage === 0 ? "rounded-l-lg" : "")}
                dangerouslySetInnerHTML={{ __html: getPaginationText(link.label) }}
            >
            </button>
        </Link>
    );
}
