import Footer from "@/Layouts/components/Footer.jsx";
import Navbar from '@/Layouts/components/Navbar.jsx';
import { Head } from '@inertiajs/react';

export default function MainLayout({ children, title }){
    return (
        <>
            <Head title={title} />
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}
