import { Carousel } from "flowbite-react";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import CarouselControl from "@/Components/CarouselControl";
import RoomCard from "@/Components/RoomCard";

export default function PropertyPage() {
    //this array will be substituted futurelly for inertia dynamic data
    const images_array = [
        { id: 1, link: "no_image.png" },
        { id: 2, link: "no_image.png" },
        { id: 3, link: "no_image.png" },
        { id: 4, link: "no_image.png" },
    ];

    return (
        <>
            <Head title="Imóvel" />
            <MainLayout>
                <article className="h-56 sm:h-64 xl:h-80 2xl:h-[750px]">
                    <Carousel
                        rightControl={<CarouselControl direction="right" />}
                        leftControl={<CarouselControl direction="left" />}
                    >
                        {images_array.map((image) => (
                            <img key={image.id} src={"/assets/" + image.link} />
                        ))}
                    </Carousel>
                </article>
                <article className="md:w-3/4 w-[90%] bg-neutral-50 mx-auto mt-4 mb-8 shadow-zinc-400 shadow-xl rounded-3xl p-4">
                    <header className="grid md:grid-rows-2 grid-rows-3 md:grid-cols-12 grid-cols-2 justify-items-center mb-4 md:w-3/4 w-[90%] mx-auto gap-y-4">
                        
                    </header>

                    <hr />

                    <section className="flex flex-row my-3">
                        <div className="w-1/3">
                            <h3 className="text-center text-2xl font-medium">
                                Informações de contato
                            </h3>
                            <div className="shadow-xl rounded-xl w-[80%] mx-auto my-4 p-4 flex flex-row gap-x-6 items-center">
                                {/* TODO: Insert agent's infos */}
                                <img
                                    class="rounded-full w-24 h-24"
                                    src="/assets/no_image.png"
                                    alt="Extra large avatar"
                                ></img>
                                <div>
                                    <h5>Corretor responsável</h5>
                                    <p>CRECI - XXXXXXXX </p>
                                    <p>
                                        <i class="fa-solid fa-phone"></i>{" "}
                                        (xx)xxxxx-xxxx
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/3">
                            <h3 className="font-medium text-3xl">Cômodos</h3>
                            <div className="flex flex-row gap-x-2 mt-2">
                                {/* TODO:Insert dynamically property's rooms */}
                                <RoomCard text="ababa" />
                            </div>
                            <hr className="my-4" />
                            <h3 className="font-medium text-3xl">Descrição</h3>
                            <p className="whitespace-pre-line text-justify break-words mt-6">
                                {/* TODO:Insert property description here */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis sequi, assumenda, eaque cupiditate maiores placeat quo magni incidunt optio minima aut enim voluptate, doloremque illum ipsam explicabo debitis perspiciatis omnis?
                            </p>
                        </div>
                    </section>
                </article>
            </MainLayout>
        </>
    );
}
