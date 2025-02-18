export default function SelectInput({ children, title = "", name }) {
    return (
        <>
            {title !== "" ? <label className="block mb-1">{title}</label> : ""}
            <select name={name} className="w-full border-gray-200 shadow-lg rounded-lg focus:outline-0 focus:ring-0">
                {children}
            </select>
        </>
    );
}
