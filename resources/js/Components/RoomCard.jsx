export default function RoomCard({text}){
    return (
        <>
            <span className="bg-red-600 text-red-50 p-2 py-1 rounded-full text-sm">
                {text}
            </span>
        </>
    );
}