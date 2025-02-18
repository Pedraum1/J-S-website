export default function ActionButton({ children }){
    return (
        <button type="button" class="p-2 text-xl font-medium bg-red-800 text-red-50 border-e text-center">
            {children}
        </button>
    );
}