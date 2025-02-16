import Footer from "@/Components/Footer";
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

export default function MainLayout({ children, title }){
    return (
        <>
            <Head title={title} />
            <Navbar/>
            <main className="w-3/4 mx-auto">
                {children}
            </main>
            <Footer/>
        </>
    );
}