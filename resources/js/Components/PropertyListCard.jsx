import { Link } from "@inertiajs/react";

export default function PropertyListCard({ property }) {
    return (
        <>
            <section>
                <Link
                    href={"/imovel/"+property.encrypted_id}
                    className="flex flex-col items-cente bg-white border rounded-lg shadow-xl md:flex-row md:max-w-5xl min-h-60 hover:scale-105 transition-transform duration-300 ease-out mx-auto"
                >
                    <img
                        className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
                        src="/assets/no_image.png"
                    />
                    <div className="flex md:flex-row flex-col justify-between p-4 leading-normal">
                        <div className="md:w-2/3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight">
                                {property.neighborhood} - {property.street},{" "}
                                {property.street_number} -{" "}
                                {property.property_type}
                            </h5>
                            <p className="mb-3 font-normal break-words line-clamp-3">
                                {/* {property.description} */}
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Deleniti mollitia quas dolores
                                explicabo quam. Nemo, iste esse tempore quis
                                inventore, nobis placeat impedit ad aperiam
                                deleniti ipsa quod, voluptatum molestiae?
                            </p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-xl font-medium">
                                <span className="bg-red-800 text-red-50 p-2 rounded-xl font-light">
                                    {property.operation_type}
                                </span>{" "}
                                R$ {property.price}
                            </h5>
                        </div>
                    </div>
                </Link>
            </section>
        </>
    );
}
