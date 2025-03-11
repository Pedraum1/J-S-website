import ActionButton from "@/Components/ActionButton";
import PaginationButtonGroup from "@/Components/PaginationButtonGroup";
import PropertyLabel from "@/Components/PropertyLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const properties = usePage().props.properties.data;
    const links = usePage().props.properties.links;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <header className="text-3xl mb-4">
                <h2>Lista de imóveis</h2>
            </header>

            <section className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                tipo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                endereço
                            </th>
                            <th scope="col" className="px-6 py-3">
                                valor
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((property) => (
                            <PropertyLabel
                                key={property.encrypted_id}
                                property={property}
                            />
                        ))}
                    </tbody>
                </table>
            </section>
            <footer className="my-4 w-fit mx-auto">
                <PaginationButtonGroup links={links} />
            </footer>
        </AuthenticatedLayout>
    );
}
