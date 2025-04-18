export default function PropertyInfoLabel({ title="", info="" }) {
    return (
        <div className="text-center lg:w-1/4 md:w-1/3 w-1/2">
            <h6 className="uppercase">{title}</h6>
            <h3 className="font-medium text-lg">{info}</h3>
        </div>
    );
}
