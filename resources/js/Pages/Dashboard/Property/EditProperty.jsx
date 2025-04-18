import PropertyForm from "@/Pages/Dashboard/Property/components/PropertyForm.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head, usePage } from "@inertiajs/react";

export default function EditProperty() {
    return (
        <>
            <AuthenticatedLayout>
                <Head title="Atualizar Imóvel" />
                <h1 className="text-3xl">Atualize um imóvel</h1>
                <PropertyForm isEditing={true} />
            </AuthenticatedLayout>
        </>
    );
}
