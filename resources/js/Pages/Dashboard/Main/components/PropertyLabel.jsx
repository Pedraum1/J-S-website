import { useState } from "react";
import ActionButton from "../../../../Components/ActionButton.jsx";
import { Link, router } from "@inertiajs/react";

export default function PropertyLabel({ property }) {
    const [favorite, setFavorite] = useState(property.is_favorite);
    const [active, setActive] = useState(property.is_active);

    const deleteProperty = () => {
        router.delete(
            route("dashboard.delete", property.encrypted_id),
            {},
            { preserveScroll: true }
        );
    };

    const updateFavorite = () => {
        setFavorite(!favorite);
        router.put(
            route("dashboard.favorite", property.encrypted_id),
            {},
            { preserveScroll: true }
        );
    };

    const updateActive = () => {
        setActive(!active);
        router.put(
            route("dashboard.toggle", property.encrypted_id),
            {},
            { preserveScroll: true }
        );
    };

    const redirectEdit = () => {
        router.get(route("dashboard.edit_image", property.encrypted_id));
    };

    const redirectEditImage = () => {
        router.get(route("dashboard.edit_image"), property.encrypted_id);
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
                <Link
                    href={route("property.description", property.encrypted_id)}
                    className="hover:underline text-blue-500"
                >
                    {property.street}, {property.street_number} -{" "}
                    {property.neighborhood}
                </Link>
            </td>
            <td className="px-6 py-4">R$ {property.price},00</td>
            <td className="px-6 py-4">
                <div
                    className="flex rounded-md shadow-xs overflow-hidden"
                    role="group"
                >
                    <ActionButton
                        className="flex-1"
                        action={() => {
                            redirectEditImage();
                        }}
                    >
                        <i class="fa-solid fa-image"></i>
                    </ActionButton>
                    <ActionButton
                        className="flex-1"
                        action={() => {
                            redirectEdit();
                        }}
                    >
                        <i className="fa-regular fa-pen-to-square"></i>
                    </ActionButton>
                    <ActionButton
                        className="flex-1"
                        action={() => deleteProperty(property.encrypted_id)}
                    >
                        <i className="fa-regular fa-trash-can"></i>
                    </ActionButton>

                    <ActionButton
                        className="flex-1"
                        action={() => updateFavorite()}
                    >
                        {favorite ? (
                            <i className="fa-solid fa-star"></i>
                        ) : (
                            <i className="fa-regular fa-star"></i>
                        )}
                    </ActionButton>

                    <ActionButton
                        className="flex-1"
                        action={() => updateActive()}
                    >
                        {active ? (
                            <i className="fa-regular fa-eye"></i>
                        ) : (
                            <i className="fa-solid fa-eye-slash"></i>
                        )}
                    </ActionButton>
                </div>
            </td>
        </tr>
    );
}
