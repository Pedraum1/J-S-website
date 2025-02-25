export default function CarouselControl({ direction }) {
    return (
        <>
            <div className="hidden md:block relative rounded-full w-8 h-8 bg-red-700 text-red-50 text-xl mx-6">
                {direction == "left" ? (
                    <i className="fa-solid fa-chevron-left absolute -translate-x-1/2 translate-y-1/2 bottom-1/2"></i>
                ) : (
                    <i className="fa-solid fa-chevron-right absolute -translate-x-1/2 translate-y-1/2 bottom-1/2"></i>
                )}
            </div>
        </>
    );
}
