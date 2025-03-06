import ActionButton from "@/Components/ActionButton";
import PropertyListCard from "@/Components/PropertyListCard";
import SelectInput from "@/Components/SelectInput";
import StringInput from "@/Components/StringInput";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function PropertyList({ properties, neighborhoods }) {
    console.log(properties);
    return (
        <>
            <Head title="Pesquisar imóveis" />
            <MainLayout>
                <h3 className="text-2xl mt-3 text-center">
                    Encontre seu Imóvel ideal
                </h3>
                <article className="bg-white border border-neutral-200 shadow-xl rounded-xl px-4 py-8 my-4 mx-2 grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-4 items-end xl:grid-rows-1 lg:grid-rows-2 md:grid-rows-3 grid-rows-4 gap-y-2 gap-x-2 md:max-w-5xl xl:mx-auto">
                    <div className="xl:col-span-2 lg:col-span-3 col-span-2 md:col-span-1 row-span-1">
                        <SelectInput title="Tipo de imóvel">
                            <option></option>
                            <option value="1">Casa</option>
                            <option value="2">Apartamento</option>
                            <option value="3">Terreno</option>
                            <option value="4">Sala Comercial</option>
                        </SelectInput>
                    </div>
                    <div className="xl:col-span-2 lg:col-span-3 col-span-2 md:col-span-1 row-span-1">
                        <SelectInput title="Tipo de operação">
                            <option></option>
                            <option value="1">Aluguel</option>
                            <option value="2">Compra</option>
                            <option value="3">Temporada</option>
                        </SelectInput>
                    </div>
                    <div className="lg:col-span-2 col-span-1 row-span-1">
                        <StringInput title="Valor máximo" placeholder="R$" />
                    </div>
                    <div className="lg:col-span-2 col-span-1 row-span-1">
                        <SelectInput title="Bairro">
                            <option value=""></option>
                            {neighborhoods.map((neighborhood) => (
                                <option
                                    key={neighborhood.id}
                                    value={neighborhood.id}
                                >
                                    {neighborhood.name}
                                </option>
                            ))}
                        </SelectInput>
                    </div>
                    <div className="mt-4 xl:col-span-4 lg:col-span-2 col-span-2 row-span-1 w-full">
                        <ActionButton>
                            Filtrar
                        </ActionButton>
                    </div>
                </article>

                <article className="p-4 my-4 mx-2">
                    {properties.map((property) => (
                        <PropertyListCard
                            key={property.encrypted_id}
                            property={property}
                        />
                    ))}
                </article>
            </MainLayout>
        </>
    );
}
