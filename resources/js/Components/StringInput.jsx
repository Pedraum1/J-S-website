export default function StringInput({ title = "", name, placeholder="" }) {
    return (
        <>
            {title !== "" ? <label className="block mb-1">{title}</label> : ""}
            <input
                name={name}
                placeholder={placeholder}
                className="w-full border-gray-200 shadow-lg rounded-lg focus:outline-0 focus:ring-0"
            />
        </>
    );
}
