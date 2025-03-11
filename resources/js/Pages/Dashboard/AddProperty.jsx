import PropertyForm from "@/Components/propertyForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function AddProperty() {
    return (
        <>
            <AuthenticatedLayout>
                <Head title="Adicionar Imóvel" />
                <h1 className="text-3xl">Adicione um imóvel</h1>
                <PropertyForm />
            </AuthenticatedLayout>
        </>
    );
}
