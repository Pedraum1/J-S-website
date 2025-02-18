import ActionButton from "./ActionButton";

export default function PropertyLabel({ property_data = {} }) {
    return (
        <tr class="bg-white border-b border-gray-200">
            <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
            >
                Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Rua Arruda Câmara 147</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">R$ 2999,00</td>
            <td class="px-6 py-4">
                <div class="inline-flex rounded-md shadow-xs overflow-hidden" role="group">
                    <ActionButton><i class="fa-regular fa-eye"></i></ActionButton>
                    <ActionButton><i class="fa-regular fa-trash-can"></i></ActionButton>
                    <ActionButton><i class="fa-regular fa-pen-to-square"></i></ActionButton>
                    <ActionButton><i class="fa-regular fa-trash-can"></i></ActionButton>
                </div>
            </td>
        </tr>
    );
}
