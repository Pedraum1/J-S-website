import ActionButton from "@/Components/ActionButton.jsx";
import PaginationButtonGroup from "@/Components/PaginationButtonGroup.jsx";
import PropertyListCard from "@/Pages/Property/List/components/PropertyListCard.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import StringInput from "@/Components/StringInput.jsx";
import MainLayout from "@/Layouts/MainLayout.jsx";
import { Head, useForm } from "@inertiajs/react";

export default function PropertyList({
    properties,
    neighborhoods,
    applied_filters = {},
}) {
    const { data, setData, get } = useForm({
        property_type  : applied_filters ? (applied_filters.property_type) : (""),
        operation_type : applied_filters ? (applied_filters.operation_type) : (""),
        max_value      : applied_filters ? (applied_filters.max_value) : (""),
        neighborhood_id: applied_filters ? (applied_filters.neighborhood_id) : (""),
    });

    const submitForm = (e) => {
        e.preventDefault();
        get(route("property.filter"));
    };

    return (
        <>
            <Head title="Pesquisar imóveis" />
            <MainLayout>
                <h3 className="text-2xl mt-3 text-center">
                    Encontre seu Imóvel ideal
                </h3>
                <form
                    onSubmit={submitForm}
                    className="bg-white border border-neutral-200 shadow-xl rounded-xl px-4 py-8 my-4 mx-2 grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-4 items-end xl:grid-rows-1 lg:grid-rows-2 md:grid-rows-3 grid-rows-4 gap-y-2 gap-x-2 md:max-w-5xl xl:mx-auto"
                >
                    <div className="xl:col-span-2 lg:col-span-3 col-span-2 md:col-span-1 row-span-1">
                        <SelectInput
                            value={data.property_type}
                            title="Tipo de imóvel"
                            onChange={(e) => {
                                setData("property_type", e.target.value);
                            }}
                        >
                            <option></option>
                            <option
                                selected={
                                    applied_filters.property_type == "Casa"
                                }
                                value="Casa"
                            >
                                Casa
                            </option>
                            <option
                                selected={
                                    applied_filters.property_type ==
                                    "Apartamento"
                                }
                                value="Apartamento"
                            >
                                Apartamento
                            </option>
                            <option
                                selected={
                                    applied_filters.property_type == "Terreno"
                                }
                                value="Terreno"
                            >
                                Terreno
                            </option>
                            <option
                                selected={
                                    applied_filters.property_type == "Sala"
                                }
                                value="Sala"
                            >
                                Sala
                            </option>
                            <option
                                selected={
                                    applied_filters.property_type ==
                                    "Ponto Comercial"
                                }
                                value="Ponto Comercial"
                            >
                                Ponto Comercial
                            </option>
                        </SelectInput>
                    </div>
                    <div className="xl:col-span-2 lg:col-span-3 col-span-2 md:col-span-1 row-span-1">
                        <SelectInput
                            value={data.operation_type}
                            onChange={(e) => {
                                setData("operation_type", e.target.value);
                            }}
                            title="Tipo de operação"
                        >
                            <option></option>
                            <option
                                selected={
                                    applied_filters.operation_type == "Aluguel"
                                }
                                value="Aluguel"
                            >
                                Aluguel
                            </option>
                            <option
                                selected={
                                    applied_filters.operation_type == "Venda"
                                }
                                value="Venda"
                            >
                                Venda
                            </option>
                            <option
                                selected={
                                    applied_filters.operation_type ==
                                    "Temporada"
                                }
                                value="Temporada"
                            >
                                Temporada
                            </option>
                        </SelectInput>
                    </div>
                    <div className="lg:col-span-2 col-span-1 row-span-1">
                        <StringInput
                            value={data.max_value}
                            onChange={(e) => {
                                setData("max_value", e.target.value);
                            }}
                            title="Valor máximo"
                            placeholder="R$"
                        />
                    </div>
                    <div className="lg:col-span-2 col-span-1 row-span-1">
                        <SelectInput
                            value={data.neighborhood_id}
                            onChange={(e) => {
                                setData("neighborhood_id", e.target.value);
                            }}
                            title="Bairro"
                        >
                            <option value=""></option>
                            {neighborhoods.map((neighborhood) => (
                                <option
                                    key={neighborhood.encrypted_id}
                                    value={neighborhood.encrypted_id}
                                    selected={neighborhood.name == applied_filters.neighborhood_name}
                                >
                                    {neighborhood.name}
                                </option>
                            ))}
                        </SelectInput>
                    </div>
                    <div className="mt-4 xl:col-span-4 lg:col-span-2 col-span-2 row-span-1 w-full">
                        <ActionButton type="submit">Filtrar</ActionButton>
                    </div>
                </form>

                <article className="p-4 my-4 mx-2 flex flex-col gap-y-4">
                    {properties.data.map((property) => (
                        <PropertyListCard
                            key={property.encrypted_id}
                            property={property}
                        />
                    ))}
                </article>
                <section className="mx-auto md:w-fit w-[95%] my-4 text-center">
                    <PaginationButtonGroup links={properties.links} />
                </section>
            </MainLayout>
        </>
    );
}
