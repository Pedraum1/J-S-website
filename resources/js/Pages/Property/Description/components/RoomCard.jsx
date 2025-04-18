export default function RoomCard({ room_name, rooms, complement = "" }) {
    return (
        <>
            {rooms > 0 ? (
                <span className="bg-red-600 text-red-50 p-2 py-1 rounded-full text-sm">
                    {rooms} {room_name}
                    {rooms > 1 ? "s" : ""} {complement}
                </span>
            ) : (
                ""
            )}
        </>
    );
}
