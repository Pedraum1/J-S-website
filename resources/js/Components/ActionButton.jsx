export default function ActionButton({ children, action, className = "", type="button" }) {
    return (
        <button
            type={type}
            onClick={action}
            className={"p-2 py-2 rounded font-regular bg-red-800 text-red-50 border-e text-center w-full active:bg-red-900 transition-colors duration-200 ease-in-out " + className}
        >
            {children}
        </button>
    );
}
