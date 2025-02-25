export default function Outdoor() {
    return (
        <article className="relative lg:h-96 h-[500px] bg-red-800 bg-opacity-40 text-red-50 px-4 flex flex-col-reverse lg:flex-row justify-center lg:justify-between lg:mx-auto xl:px-[15%] lg:gap-x-8 gap-y-8 items-center">
            <div className="max-w-[500px]">
                <h1 className="text-center text-4xl">
                    Garanta já o apartamento dos seus sonhos!
                </h1>
            </div>
            <section className="bg-white rounded-3xl px-2 max-w-[500px] z-[3]">
                <img src="/assets/tittle.png" className="" />
            </section>
            <img
                src="/assets/outdoor_background.jpg"
                className="absolute inset-0 z-[-1] object-cover h-full w-full"
            />
        </article>
    );
}
