import { useState } from "react";
import NavbarLink from "./NavbarLink";
import Logo from "./Logo";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
            <button
                onClick={() => {
                    setShowSidebar(!showSidebar);
                }}
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className=""
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            <aside
                id="default-sidebar"
                className={
                    "fixed z-40 md:w-1/3 sm:w-2/5 w-9/12 h-screen transition-transform ease-in-out" +
                    (showSidebar
                        ? " -translate-x-10 shadow-xl shadow-gray-500"
                        : " md:-translate-x-[120%] -translate-x-[115%]")
                }
                aria-label="Sidebar"
            >
                <div className="h-full relative overflow-y-auto bg-white dark:bg-gray-800">
                    <button
                        className="absolute right-4 top-4"
                        onClick={() => {
                            setShowSidebar(!showSidebar);
                        }}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <ul className="space-y-2 font-medium flex flex-col justify-between p-8 h-full">
                        <li className="flex justify-between">
                            <div className="w-1/2">
                                <Logo />
                            </div>
                        </li>
                        <li className="h-1/2">
                            <ul className="flex flex-col gap-y-4 text-xl">
                                <NavbarLink
                                    title="O que é a J&S?"
                                    link="/sobre"
                                />
                                <NavbarLink
                                    title="Nossos Serviços"
                                    link="/servicos"
                                />
                                <NavbarLink title="Imóveis" link="/imoveis" />
                                <NavbarLink title="Contato" link="/contato" />
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <NavbarLink title="Login" link="/login" />
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
