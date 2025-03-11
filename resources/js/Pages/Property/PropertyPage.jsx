import { Carousel } from "flowbite-react";
import MainLayout from "@/Layouts/MainLayout";
import { Head, usePage } from "@inertiajs/react";
import CarouselControl from "@/Components/CarouselControl";
import RoomCard from "@/Components/RoomCard";
import PropertyInfoLabel from "@/Components/PropertyInfoLabel";

export default function PropertyPage() {
    const { property } = usePage().props;
    const agent = property.agent;

    //TODO: this array will be substituted futurelly for inertia dynamic data
    const images_array = [
        { id: 1, link: "no_image.png" },
        { id: 2, link: "no_image.png" },
        { id: 3, link: "no_image.png" },
        { id: 4, link: "no_image.png" },
    ];

    return (
        <>
        {/* TODO:Insert property's address on page tittle */}
            <Head title={`${property.street}, ${property.street_number} - ${property.neighborhood}/${property.city}`} />
            <MainLayout>
                <article className="h-96 xl:h-80 2xl:h-[700px]">
                    <Carousel
                        rightControl={<CarouselControl direction="right" />}
                        leftControl={<CarouselControl direction="left" />}
                    >
                        {images_array.map((image) => (
                            <img key={image.id} src={"/assets/" + image.link} />
                        ))}
                    </Carousel>
                </article>
                <h1 className="text-3xl font-light my-4 md:w-3/4 mx-auto">{property.street}, {property.street_number} - {property.neighborhood}/{property.city}</h1>
                <article className="md:w-3/4 w-[95%] bg-neutral-50 border border-neutral-200 mx-auto mt-4 mb-8 shadow-zinc-400 shadow-xl rounded-3xl p-4">
                    <header className="flex flex-wrap flex-row justify-center gap-y-3 mb-4 w-[90%] mx-auto">
                        <PropertyInfoLabel title="aluguel" info={"R$" + property.price + ",00"}/>
                        <PropertyInfoLabel title="quartos" info={property.rooms}/>
                        <PropertyInfoLabel title="suítes" info={property.master_bedrooms}/>
                        <PropertyInfoLabel title="garagens" info={property.parking_spots}/>
                        <PropertyInfoLabel title="banheiros" info={property.bathrooms}/>
                        <PropertyInfoLabel title="área total" info={property.area_size + " m²"}/>
                    </header>

                    <hr />

                    <section className="flex flex-wrap xl:flex-row flex-col my-3">
                        <div className="xl:w-1/3 w-full">
                            <h3 className="text-center md:text-2xl text-xl font-medium">
                                Informações de contato
                            </h3>
                            <div className="shadow-xl rounded-xl w-fit xl:w-[80%] mx-auto my-4 p-4 flex flex-row gap-x-6 items-center">
                                <img
                                    className="rounded-full w-24 h-24"
                                    src="/assets/no_profile.webp"
                                    alt="Extra large avatar"
                                ></img>
                                <div>
                                    <h5 className="font-medium">{agent.name}</h5>
                                    <p>CRECI - {agent.creci_number} </p>
                                    <p>
                                        <i className="fa-solid fa-phone"></i>{" "}
                                        {agent.phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-2/3 w-full">
                            <h3 className="font-medium md:text-3xl text-xl">Cômodos</h3>
                            <div className="flex flex-row gap-x-2 mt-2">
                                {/* TODO:Insert dynamically property's rooms */}
                                <RoomCard text="ababa" />
                            </div>
                            <hr className="my-4" />
                            <h3 className="font-medium md:text-3xl text-xl">Descrição</h3>
                            <p className="whitespace-pre-line md:text-base text-sm text-justify break-words mt-6">
                                {property.description}
                            </p>
                        </div>
                    </section>
                </article>
            </MainLayout>
        </>
    );
}
