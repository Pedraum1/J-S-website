import { Link } from "@inertiajs/react";
import FooterLink from "./FooterLink";

export default function Footer() {
    return (
        <footer className="bg-red-800 py-8 text-red-50 font-light">
            <section className="md:w-2/3 w-[90%] mx-auto flex md:flex-row flex-col md:justify-between justify-center">
                <article className="md:w-1/3 text-center mb-5">
                    <h2 className="text-3xl font-regular mb-4">
                        J&S Corretores de Imóveis
                    </h2>
                    <p>Rua Arruda Câmara, 147 - Vila Pery, Fortaleza/CE</p>
                    <p>CRECI/CE 10250-F</p>
                </article>
                <article className="flex flex-row md:w-2/5 gap-x-4 justify-between">
                    <div>
                        <h3 className="text-2xl mb-3">Contato</h3>
                        <ul className="mb-4">
                            <FooterLink title="contato@jscorretores.com" />
                            <FooterLink title="(85) 98774-4331" />
                            <FooterLink title="(85) 98777-5743" />
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-3">Links</h3>
                        <ul>
                            <FooterLink title="Página Inicial" link="/" />
                            <FooterLink title="Sobre nós" link="/sobre" />
                            <FooterLink title="Serviços" link="/servicos" />
                            <FooterLink title="Contato" link="/contato" />
                            <FooterLink
                                title="Pesquise Imóveis"
                                link="/search"
                            />
                        </ul>
                    </div>
                </article>
            </section>
            <div className="w-4/5 mx-auto text-center text-sm border-t border-red-50 mt-4 pt-4">
                © Copyright 2024 - J&S Corretores - Todos os direitos
                reservados. Desenvolvido por{" "}
                <Link href="https://github.com/Pedraum1">
                    <span className="underline underline-offset-2">
                        Pedro Paulo
                    </span>
                </Link>
            </div>
        </footer>
    );
}
