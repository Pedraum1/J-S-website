import ActionButton from "@/Components/ActionButton";
import Outdoor from "@/Components/Outdoor";
import PropertyCard from "@/Components/PropertyCard";
import SelectInput from "@/Components/SelectInput";
import StringInput from "@/Components/StringInput";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Homepage({ properties, neighborhoods }) {
    const { data, setData, get, errors, processing } = useForm({
        property_type: "",
        operation_type: "",
        max_value: "",
        neighborhood_id: "",
    });

    const submitFilter = (e) => {
        e.preventDefault();
        get(route('property.filter'));
    };

    return (
        <>
            <Head title="Página Inicial" />
            <MainLayout>
                <Outdoor />

                <article className="pb-4">
                    <form onSubmit={submitFilter}>
                        <h3 className="w-2/3 mx-auto mt-4 text-3xl text-center font-light">
                            Encontre seu imóvel ideal
                        </h3>
                        <section className="lg:w-1/2 w-[90%] mx-auto my-4 grid lg:grid-cols-5 grid-cols-2 lg:grid-rows-1 grid-rows-3 gap-4 items-end">
                            <div className="col-span-1">
                                <SelectInput
                                    title="Tipo de Imóvel"
                                    value={data.property_type}
                                    onChange={(e) => {
                                        setData(
                                            "property_type",
                                            e.target.value
                                        );
                                    }}
                                >
                                    <option value=""></option>
                                    <option value="Apartamento">
                                        Apartamento
                                    </option>
                                    <option value="Casa">Casa</option>
                                    <option value="Ponto comercial">
                                        Ponto comercial
                                    </option>
                                    <option value="Sala">Sala</option>
                                    <option value="Terreno">Terreno</option>
                                </SelectInput>
                            </div>
                            <div className="col-span-1">
                                <SelectInput
                                    title="Operação"
                                    value={data.operation_type}
                                    onChange={(e) => {
                                        setData(
                                            "operation_type",
                                            e.target.value
                                        );
                                    }}
                                >
                                    <option value=""></option>
                                    <option value="Aluguel">Aluguel</option>
                                    <option value="Temporada">Temporada</option>
                                    <option value="Venda">Venda</option>
                                </SelectInput>
                            </div>
                            <div className="col-span-1">
                                <StringInput
                                    title="Valor máximo"
                                    placeholder="R$ 1.000,00"
                                    type="number"
                                    value={data.max_value}
                                    onChange={(e) => {
                                        setData("max_value", e.target.value);
                                    }}
                                />
                            </div>
                            <div className="col-span-1">
                                <SelectInput
                                    title="Bairro"
                                    onChange={(e) => {
                                        setData("neighborhood_id", e.target.value);
                                    }}
                                >
                                    <option value=""></option>
                                    {neighborhoods.map((neighborhood) => (
                                        <option
                                            value={neighborhood.encrypted_id}
                                            key={neighborhood.encrypted_id}
                                        >
                                            {neighborhood.name}
                                        </option>
                                    ))}
                                </SelectInput>
                            </div>
                            <div className="lg:col-span-1 col-span-2 text-center">
                                <ActionButton type="submit">
                                    Pesquisar
                                </ActionButton>
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
                                    key={property.encrypted_id}
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
