export default function StringInput({
    title = "",
    name,
    placeholder = "",
    type = "text",
    onChange
}) {
    return (
        <>
            <div>
                {title !== "" ? (
                    <label className="block mb-1">{title}</label>
                ) : (
                    ""
                )}
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="w-full border-gray-200 shadow-lg rounded-lg focus:outline-0 focus:ring-0"
                />
            </div>
        </>
    );
}
