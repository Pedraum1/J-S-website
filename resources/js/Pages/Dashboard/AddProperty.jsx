import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function AddProperty() {
    return (
    <>
        <AuthenticatedLayout>
            <Head title="Adicionar Imóvel"/>
            <section className="grid grid-cols-12 grid-rows-12"></section>
        </AuthenticatedLayout>
    </>
);
}
