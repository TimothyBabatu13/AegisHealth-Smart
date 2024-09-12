import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProtectedRoute from "@/components/ProtectedRoute";
import ScrollObserver from "@/components/ScrollObserver";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ProtectedRoute>
            <ScrollObserver>
                <main className="min-[1220px]:flex gap-5 bg-[#FCFCFD]">
                    <NavBar />
                    <section className="flex-1">
                        <Header />
                        {children}
                    </section>
                </main>
            </ScrollObserver>
        </ProtectedRoute>
    );
};

export default layout;
