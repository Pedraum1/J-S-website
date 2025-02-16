import Footer from "@/Components/Footer";
import Navbar from '@/Components/Navbar';
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