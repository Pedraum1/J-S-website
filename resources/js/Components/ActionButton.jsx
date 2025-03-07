export default function ActionButton({ children }){
    return (
        <button type="button" className="p-2 py-1 rounded text-lg font-regular bg-red-800 text-red-50 border-e text-center w-full active:bg-red-900 transition-colors duration-200 ease-in-out">
            {children}
        </button>
    );
}