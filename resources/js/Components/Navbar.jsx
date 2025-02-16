import Logo from "./Logo";
import NavbarLink from "./NavbarLink";

export default function Navbar(){
    return (
        <nav className="w-full py-2 shadow-lg">
            <section className="w-2/3 mx-auto flex flex-row justify-between items-center">
            <Logo />
                <ul className="flex flex-row justify-center gap-x-16 text-lg">
                    <NavbarLink title="O que é a J&S?" link="/sobre" />
                    <NavbarLink title="Nossos Serviços" link="/servicos" />
                    <NavbarLink title="Imóveis" link="/imoveis" />
                    <NavbarLink title="Contato" link="/contato" />
                </ul>
                <ul>
                    <NavbarLink title="Login" link="/login"/>
                </ul>
            </section>
        </nav>
    );
}