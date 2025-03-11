import PropertyForm from "@/Components/propertyForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
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
