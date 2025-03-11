import { useState } from "react";
import ActionButton from "./ActionButton";
import { Link, router } from "@inertiajs/react";

export default function PropertyLabel({ property }) {

    const [favorite, setFavorite] = useState(property.is_favorite);
    const [active, setActive] = useState(property.is_active);

    const deleteProperty = (id) => {
        router.delete(
            `/dashboard/${id}`,
            {},
            { preserveScroll: true }
        );
    }

    const updateFavorite = () => {
        setFavorite(!favorite);
        router.put(
            `/dashboard/${property.encrypted_id}/favorite`,
            {},
            { preserveScroll: true }
        );
    };

    const updateActive = () => {
        setActive(!active);
        router.put(
            `/dashboard/${property.encrypted_id}/toggle`,
            {},
            { preserveScroll: true }
        );
    };
    return (
        <tr
            className={`border-b border-gray-200 transition-collors duration-150 ease-out ${
                active ? "bg-white" : "bg-neutral-300"
            }`}
        >
            <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap uppercase"
            >
                {property.property_type}
            </th>
            <td className="px-6 py-4">
                {property.street}, {property.street_number} -{" "}
                {property.neighborhood}
            </td>
            <td className="px-6 py-4">R$ {property.price},00</td>
            <td className="px-6 py-4">
                <div
                    className="flex rounded-md shadow-xs overflow-hidden"
                    role="group"
                >
                    <Link href={route('dashboard.edit',property.encrypted_id)}>
                    <ActionButton>
                        <i className="fa-regular fa-pen-to-square"></i>
                    </ActionButton>
                    </Link>
                    <ActionButton action={() => deleteProperty(property.encrypted_id)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </ActionButton>
                    {favorite ? (
                        <ActionButton action={() => updateFavorite()}>
                            <i className="fa-solid fa-star"></i>
                        </ActionButton>
                    ) : (
                        <ActionButton action={() => updateFavorite()}>
                            <i className="fa-regular fa-star"></i>
                        </ActionButton>
                    )}
                    {active ? (
                        <ActionButton action={() => updateActive()}>
                            <i className="fa-regular fa-eye"></i>
                        </ActionButton>
                    ) : (
                        <ActionButton action={() => updateActive()}>
                            <i className="fa-solid fa-eye-slash"></i>
                        </ActionButton>
                    )}
                </div>
            </td>
        </tr>
    );
}
