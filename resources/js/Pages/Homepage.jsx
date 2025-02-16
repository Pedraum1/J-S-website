import Outdoor from "@/Components/Outdoor";
import PropertyCard from "@/Components/PropertyCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Homepage({ properties }) {
    console.log(properties);
    return (
        <>
            <Head title="Página Inicial" />
            <MainLayout>
                <Outdoor />
                <article className="w-[90%] xl:w-3/4 mx-auto py-8">
                    <h1 className="text-4xl font-light text-center">
                        Imóveis em Destaque
                    </h1>
                    <section className="grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {properties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                property_data={property}
                            />
                        ))}
                    </section>
                </article>
            </MainLayout>
        </>
    );
}
