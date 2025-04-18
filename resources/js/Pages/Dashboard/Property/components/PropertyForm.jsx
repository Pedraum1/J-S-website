import { useForm, usePage } from "@inertiajs/react";
import ActionButton from "../../../../Components/ActionButton.jsx";
import SelectInput from "../../../../Components/SelectInput.jsx";
import StringInput from "../../../../Components/StringInput.jsx";
import ErrorFlashMessage from "../../../../Components/ErrorFlashMessage.jsx";
import Spinner from "../../../../Components/Spinner.jsx";

export default function PropertyForm({ isEditing = false }) {
    const property = usePage().props.property;
    const neighborhoods = usePage().props.neighborhoods;
    const agents = usePage().props.agents;

    const { data, setData, post, patch, errors, processing } = useForm({
        is_active       : property ? (property.is_active) : true,
        description     : property ? (property.description ?? "") : (""),
        street          : property ? (property.street ?? "") : (""),
        street_number   : property ? (property.street_number ?? 0) : (0),
        neighborhood    : property ? (property.neighborhood ?? "") : (""),
        new_neighborhood: "",
        city            : property ? (property.city ?? "") : (""),
        area_size       : property ? (property.area_size ?? "") : (""),
        price           : property ? (property.price ?? 0) : (0),
        condo_fee       : property ? (property.condo_fee ?? 0) : (0),
        agent_id        : property ? (property.encrypted_agent_id ?? "") : (""),
        operation_type  : property ? (property.operation_type ?? "") : (""),
        property_type   : property ? (property.property_type ?? "") : (""),
        bedrooms        : property ? (property.bedrooms ?? 0) : (0),
        master_bedrooms : property ? (property.master_bedrooms ?? 0) : (0),
        bathrooms       : property ? (property.bathrooms ?? 0) : (0),
        rooms           : property ? (property.rooms ?? 0) : (0),
        kitchens        : property ? (property.kitchens ?? 0) : (0),
        service_rooms   : property ? (property.service_rooms ?? 0) : (0),
        parking_spots   : property ? (property.parking_spots ?? 0) : (0),
        agent_name      : property ? (property.agent_name ?? "") : (""),
    });

    const submitForm = (e) => {
        e.preventDefault();

        if (isEditing) {
            patch(route('dashboard.update', property.encrypted_id));
        } else {
            post("/dashboard/store");
        }
    };

    return (
        <>
            <form
                onSubmit={submitForm}
                className="grid grid-cols-1 md:grid-cols-2 grid-flow-row w-full py-4 px-2 gap-y-4 md:gap-x-4"
            >
                <section className="col-span-1 row-span-1">
                    <label htmlFor="description" className="text-lg">
                        Descrição do Imóvel
                    </label>
                    <div className="mb-4">
                        <textarea
                            value={data.description}
                            onChange={(e) => {
                                setData("description", e.target.value);
                            }}
                            id="description"
                            className="block rounded-xl shadow-xl border-neutral-200 focus:outline-none focus:ring-0 w-full h-40"
                        >
                            {data.description}
                        </textarea>
                        <ErrorFlashMessage error={errors.description} />
                    </div>

                    <div className="flex items-start justify-between">
                        <div>
                            <SelectInput
                                value={data.property_type}
                                onChange={(e) => {
                                    setData("property_type", e.target.value);
                                }}
                            >
                                <option value="">Tipo de imóvel</option>
                                <option
                                    selected={data.property_type === "Casa"}
                                    value="Casa"
                                >
                                    Casa
                                </option>
                                <option
                                    selected={
                                        data.property_type === "Apartamento"
                                    }
                                    value="Apartamento"
                                >
                                    Apartamento
                                </option>
                                <option
                                    selected={
                                        data.property_type === "Ponto Comercial"
                                    }
                                    value="Ponto Comercial"
                                >
                                    Ponto comercial
                                </option>
                                <option
                                    selected={data.property_type === "Sala"}
                                    value="Sala"
                                >
                                    Sala
                                </option>
                                <option
                                    selected={data.property_type === "Terreno"}
                                    value="Terreno"
                                >
                                    Terreno
                                </option>
                            </SelectInput>
                        </div>
                        <div className="flex items-center mt-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                checked={data.is_active}
                                value={data.is_active}
                                onChange={(e) => {
                                    setData("is_active", e.target.checked);
                                }}
                                className="w-4 h-4 rounded-sm"
                            />
                            <label
                                htmlFor="default-checkbox"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Anunciar imóvel
                            </label>
                        </div>
                    </div>
                    <ErrorFlashMessage error={errors.property_type} />
                </section>

                <section className="col-span-1 row-span-1 grid grid-rows-4 grid-cols-2 gap-x-2 gap-y-2">
                    <div className="col-span-1 row-span-1">
                        <StringInput
                            title="Quartos"
                            value={data.bedrooms}
                            onChange={(e) => {
                                setData("bedrooms", e.target.value);
                            }}
                            type="number"
                        />
                        <ErrorFlashMessage error={errors.bedrooms} />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <StringInput
                            title="Suítes"
                            value={data.master_bedrooms}
                            onChange={(e) => {
                                setData("master_bedrooms", e.target.value);
                            }}
                            type="number"
                        />
                        <ErrorFlashMessage error={errors.master_bedrooms} />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <StringInput
                            title="Salas"
                            value={data.rooms}
                            onChange={(e) => {
                                setData("rooms", e.target.value);
                            }}
                            type="number"
                        />
                        <ErrorFlashMessage error={errors.rooms} />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <StringInput
                            title="Banheiros"
                            value={data.bathrooms}
                            onChange={(e) => {
                                setData("bathrooms", e.target.value);
                            }}
                            type="number"
                        />
                        <ErrorFlashMessage error={errors.bathrooms} />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <StringInput
                            title="Áreas de serviço"
                            value={data.service_rooms}
                            onChange={(e) => {
                                setData("service_rooms", e.target.value);
                            }}
                            type="number"
                        />
                        <ErrorFlashMessage error={errors.service_rooms} />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <StringInput
                            title="Cozinhas"
                            value={data.kitchens}
                            onChange={(e) => {
                                setData("kitchens", e.target.value);
                            }}
                            type="number"
                        />
                        <ErrorFlashMessage error={errors.kitchens} />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <StringInput
                            title="Garagens"
                            value={data.parking_spots}
                            onChange={(e) => {
                                setData("parking_spots", e.target.value);
                            }}
                            type="number"
                        />
                        <ErrorFlashMessage error={errors.parking_spots} />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <StringInput
                            title="Área total"
                            value={data.area_size}
                            onChange={(e) => {
                                setData("area_size", e.target.value);
                            }}
                            type="number"
                        />
                        <ErrorFlashMessage error={errors.area_size} />
                    </div>
                </section>
                <section className="grid grid-cols-2 grid-flow-row md:gap-y-4 gap-y-8 gap-x-4 h-fit">
                    <div className="lg:col-span-1 col-span-2 row-span-1">
                        <StringInput
                            title="Valor"
                            placeholder="R$ 0000,00"
                            type="number"
                            value={data.price}
                            onChange={(e) => {
                                setData("price", e.target.value);
                            }}
                        />
                        <ErrorFlashMessage error={errors.price} />
                    </div>
                    <div className="lg:col-span-1 col-span-2 row-span-1">
                        <StringInput
                            title="Taxa de condomínio"
                            placeholder="R$ 0000,00"
                            type="number"
                            value={data.condo_fee}
                            onChange={(e) => {
                                setData("condo_fee", e.target.value);
                            }}
                        />
                        <ErrorFlashMessage error={errors.condo_fee} />
                    </div>
                    <div className="lg:col-span-1 col-span-2 row-span-1">
                        <SelectInput
                            value={data.operation_type}
                            onChange={(e) => {
                                setData("operation_type", e.target.value);
                            }}
                        >
                            <option value="">Tipo de operação</option>
                            <option
                                selected={data.operation_type === "Aluguel"}
                                value="Aluguel"
                            >
                                Aluguel
                            </option>
                            <option
                                selected={data.operation_type === "Venda"}
                                value="Venda"
                            >
                                Venda
                            </option>
                            <option
                                selected={data.operation_type === "Temporada"}
                                value="Temporada"
                            >
                                Temporada
                            </option>
                        </SelectInput>
                        <ErrorFlashMessage error={errors.operation_type} />
                    </div>
                    <div className="xl:col-span-1 col-span-2 row-span-1">
                        <SelectInput
                            value={data.agent_id}
                            onChange={(e) => {
                                setData("agent_id", e.target.value);
                            }}
                        >
                            <option value="">Corretor responsável</option>
                            {agents.map((agent) => (
                                <option
                                    key={agent.name}
                                    value={agent.encrypted_id}
                                    selected={data.agent_name === agent.name}
                                >
                                    {agent.name}
                                </option>
                            ))}
                        </SelectInput>
                        <ErrorFlashMessage error={errors.agent_id} />
                    </div>
                </section>

                <section className="col-span-1 row-span-1 flex flex-col gap-y-2">
                    <StringInput
                        title="Rua"
                        value={data.street}
                        onChange={(e) => {
                            setData("street", e.target.value);
                        }}
                        placeholder='Não inserir iniciais "R." ou "Av." nem ponto final ou vírgula, já serão adicionados automaticamente'
                    />
                    <ErrorFlashMessage error={errors.street} />
                    <StringInput
                        title="Número"
                        type="number"
                        value={data.street_number}
                        onChange={(e) => {
                            setData("street_number", e.target.value);
                        }}
                    />
                    <ErrorFlashMessage error={errors.street_number} />
                    <StringInput
                        title="Novo bairro"
                        value={data.new_neighborhood}
                        onChange={(e) => {
                            setData("new_neighborhood", e.target.value);
                        }}
                    />
                    <ErrorFlashMessage error={errors.new_neighborhood} />

                    <SelectInput
                        value="neighborhood"
                        onChange={(e) => {
                            setData("neighborhood", e.target.value);
                        }}
                    >
                        <option value="">Bairro</option>
                        {neighborhoods.map((neighborhood) => (
                            <option
                                key={neighborhood.name}
                                value={neighborhood.name}
                                selected={
                                    data.neighborhood === neighborhood.name
                                }
                            >
                                {neighborhood.name}
                            </option>
                        ))}
                    </SelectInput>
                    <ErrorFlashMessage error={errors.neighborhood} />

                    <SelectInput
                        value="city"
                        onChange={(e) => {
                            setData("city", e.target.value);
                        }}
                    >
                        <option value="">Cidade</option>
                        <option
                            selected={data.city === "Fortaleza"}
                            value="Fortaleza"
                        >
                            Fortaleza
                        </option>
                    </SelectInput>
                    <ErrorFlashMessage error={errors.city} />
                </section>

                <section className="col-span-1 md:col-start-2 mt-8">
                    <ActionButton type={"submit"}>
                        {processing ? (
                            <Spinner />
                        ) : (
                            (isEditing ? "Atualizar" : "Adicionar ") + " imóvel"
                        )}
                    </ActionButton>
                </section>
            </form>
        </>
    );
}
