import PropertyLabel from "@/Components/PropertyLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <section className="my-12 mx-auto max-w-7xl sm:p-6 lg:p-8 bg-white shadow-sm sm:rounded-lg">
                <h2 className="text-3xl mb-4">Lista de imóveis</h2>

                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right">
                        <thead class="uppercase">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    tipo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    endereço
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    valor
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ativo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <PropertyLabel/>
                        </tbody>
                    </table>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
