import { useForm } from "@inertiajs/react";
import ActionButton from "./ActionButton";
import SelectInput from "./SelectInput";
import StringInput from "./StringInput";

export default function PropertyForm({ property = null, isEditing = false }) {
    const { data, setData, post, errors, processing } = useForm({
        is_active: "",
        description: "",
        street: "",
        street_number: 0,
        neighborhood: "",
        city: "",
        area_size: "",
        price: 0,
        condo_fee: 0,
        agent_id: "",
        operation_type: "",
        property_type: "",
        bedrooms: 0,
        master_bedrooms: 0,
        bathrooms: 0,
        rooms: 0,
        kitchens: 0,
        service_rooms: 0,
        parking_spots: 0,
    });

    const submitForm = (e) => {
        e.preventDefault();
        
        if(isEditing){
            patch('/dashboard/update',)
        } else {
            post('/dashboard/store',);
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
                    <textarea
                        value={data.description}
                        onChange={(e) => {
                            setData("description", e.target.value);
                        }}
                        id="description"
                        className="block rounded-xl shadow-xl border-neutral-200 focus:outline-none focus:ring-0 w-full h-40 mb-4"
                    ></textarea>
                    <div className="flex items-start justify-between">
                        <div>
                            <SelectInput
                                value={data.property_type}
                                onChange={(e) => {
                                    setData("property_type", e.target.value);
                                }}
                            >
                                <option>Tipo de imóvel</option>
                                <option value="CASA">CASA</option>
                                <option value="APARTAMENTO">APARTAMENTO</option>
                                <option value="PONTO COMERCIAL">
                                    PONTO COMERCIAL
                                </option>
                                <option value="SALA">SALA</option>
                                <option value="TERRENO">TERRENO</option>
                            </SelectInput>
                        </div>
                        <div className="flex items-center mt-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                defaultChecked
                                value={data.is_active}
                                onChange={(e) => {
                                    setData("is_active", e.target.value);
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
                    </div>
                    <div className="lg:col-span-1 col-span-2 row-span-1">
                        <SelectInput
                            value={data.operation_type}
                            onChange={(e) => {
                                setData("operation_type", e.target.value);
                            }}
                        >
                            <option>Tipo de operação</option>
                            <option value="ALUGUEL">Aluguel</option>
                            <option value="VENDA">Venda</option>
                            <option value="TEMPORADA">Temporada</option>
                        </SelectInput>
                    </div>
                    <div className="xl:col-span-1 col-span-2 row-span-1">
                        <SelectInput
                            value={data.agent_id}
                            onChange={(e) => {
                                setData("agent_id", e.target.value);
                            }}
                        >
                            <option>Corretor responsável</option>
                            <option value="JP">João</option>
                            <option value="SQ">Suzi</option>
                        </SelectInput>
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
                    <StringInput
                        title="Número"
                        type="number"
                        value={data.street_number}
                        onChange={(e) => {
                            setData("street_number", e.target.value);
                        }}
                    />
                    <StringInput
                        title="Novo bairro"
                        value={data.new_neighborhood}
                        onChange={(e) => {
                            setData("new_neighborhood", e.target.value);
                        }}
                    />
                    <SelectInput
                        value="city"
                        onChange={(e) => {
                            setData("city", e.target.value);
                        }}
                    >
                        <option>Cidade</option>
                        <option value="cidade1">Cidade 1</option>
                        <option value="cidade2">Cidade 2</option>
                        {/* Insert cities list */}
                    </SelectInput>
                    <SelectInput
                        value="neighborhood"
                        onChange={(e) => {
                            setData("neighborhood", e.target.value);
                        }}
                    >
                        <option>Bairro</option>
                        <option value="bairro1">Bairro 1</option>
                        <option value="bairro2">Bairro 2</option>
                        {/* Insert neighborhoods list */}
                    </SelectInput>
                </section>
                <div className="col-span-1 md:col-start-2 mt-8">
                    <ActionButton type={"submit"}>
                        {isEditing ? "Atualizar" : "Adicionar"} imóvel
                    </ActionButton>
                </div>
            </form>
        </>
    );
}
