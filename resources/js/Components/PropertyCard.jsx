import { Link } from "@inertiajs/react";

export default function PorpertyCard({ property_data }) {
    return (
        <div className="min-h-96 md:max-w-80 max-w-96 min-w-72 col-span-1 row-span-1 shadow-2xl rounded-xl overflow-hidden bg-white hover:scale-105 hover:text-red-50 hover:bg-red-800 transition-all duration-300 ease-out">
            <Link href={"/imovel/" + property_data.encrypted_id}>
                {property_data.main_photo.length > 0 ? (
                    <img
                        src={"/storage/" + property_data.photos[0].name}
                        className="object-cover h-64"
                    />
                ) : (
                    <img
                        src={"/assets/no_image.png"}
                        className="object-cover h-64"
                    />
                )}
                <div className="p-2">
                    <h3 className="text-xl">
                        {property_data.property_type} | {property_data.street},{" "}
                        {property_data.street_number} -{" "}
                        {property_data.neighborhood}
                    </h3>
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <h2 className="text-3xl my-2">
                                R$ {property_data.price},00
                            </h2>
                        </div>
                        <div>
                            <p className="bg-red-800 p-1 rounded-lg text-red-50 text-sm uppercase">
                                {property_data.operation_type}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row text-sm gap-x-4">
                        {property_data.bathrooms > 0 ? (
                            <div>
                                <i className="fa-solid fa-toilet"></i> 1
                            </div>
                        ) : (
                            ""
                        )}
                        {property_data.bathrooms > 0 ? (
                            <div>
                                <i className="fa-solid fa-bed"></i> 1
                            </div>
                        ) : (
                            ""
                        )}
                        {property_data.bathrooms > 0 ? (
                            <div>
                                <i className="fa-solid fa-car"></i> 1
                            </div>
                        ) : (
                            ""
                        )}
                        <div>
                            <i className="fa-solid fa-expand"></i>{" "}
                            {property_data.area_size} m²
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
