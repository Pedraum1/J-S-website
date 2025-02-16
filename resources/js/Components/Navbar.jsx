import NavbarLink from "./NavbarLink";
import Sidebar from "./Sidebar";
import Tittle from "./Tittle";

export default function Navbar() {
    return (
        <nav className="w-full py-2 shadow-lg">
            <div className="md:block hidden">
                <section className="lg:w-2/3 w-[90%] mx-auto flex flex-row gap-x-8 justify-between items-center">
                    <div className="max-w-40">
                        <Tittle />
                    </div>
                    <ul className="flex flex-row justify-center lg:gap-x-12 gap-x-4 text-lg items-center">
                        <NavbarLink title="O que é a J&S?" link="/sobre" />
                        <NavbarLink title="Nossos Serviços" link="/servicos" />
                        <NavbarLink title="Imóveis" link="/imoveis" />
                        <NavbarLink title="Contato" link="/contato" />
                    </ul>
                    <ul>
                        <NavbarLink title="Login" link="/login" />
                    </ul>
                </section>
            </div>
            <div className="md:hidden px-8 mx-auto flex justify-between">
                <Sidebar />
                <div className="w-48">
                    <Tittle />
                </div>
            </div>
        </nav>
    );
}
