import Outdoor from "@/Components/Outdoor";
import PropertyCard from "@/Components/PropertyCard";
import SelectInput from "@/Components/SelectInput";
import StringInput from "@/Components/StringInput";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Homepage({ properties }) {
    console.log(properties);
    return (
        <>
            <Head title="Página Inicial" />
            <MainLayout>
                <Outdoor />

                <article className="pb-4">
                    <form action="">
                        <h3 className="w-2/3 mx-auto mt-4 text-3xl text-center font-light">
                            Encontre seu imóvel ideal
                        </h3>
                        <section className="lg:w-1/2 w-[90%] mx-auto my-4 grid lg:grid-cols-5 grid-cols-2 lg:grid-rows-1 grid-rows-3 gap-4 items-end">
                            <div className="col-span-1">
                                <SelectInput title="Tipo de Imóvel">
                                    <option value=""></option>
                                    <option value="">Apartamento</option>
                                    <option value="">Casa</option>
                                    <option value="">Ponto comercial</option>
                                    <option value="">Sala</option>
                                    <option value="">Terreno</option>
                                </SelectInput>
                            </div>
                            <div className="col-span-1">
                                <SelectInput title="Operação">
                                    <option value=""></option>
                                    <option value="">Aluguel</option>
                                    <option value="">Temporada</option>
                                    <option value="">Venda</option>
                                </SelectInput>
                            </div>
                            <div className="col-span-1">
                                <StringInput
                                    title="Valor máximo"
                                    placeholder="R$ 1.000,00"
                                />
                            </div>
                            <div className="col-span-1">
                                <SelectInput title="Bairro">
                                    <option value=""></option>
                                    <option value="">Bairro</option>
                                </SelectInput>
                            </div>
                            <div className="lg:col-span-1 col-span-2 text-center">
                                <button className="lg:w-full md:w-1/2 w-full py-[0.6rem] bg-red-800 text-red-50 rounded-lg hover:-translate-y-1 active:translate-y-0 active:bg-red-700 transition-all duration-200 ease-out">
                                    Pesquisar
                                </button>
                            </div>
                        </section>
                    </form>
                </article>

                <article className="bg-gray-100">
                    <section className="w-[90%] xl:w-3/4 mx-auto py-4">
                        <h1 className="text-4xl font-light text-center mb-4">
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
                    </section>
                </article>
            </MainLayout>
        </>
    );
}
