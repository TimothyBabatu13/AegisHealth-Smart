import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProtectedRoute from "@/components/ProtectedRoute";

const layout = ({
    children
} : Readonly<{
    children: React.ReactNode;
  }>) => {

  return (
    <ProtectedRoute>
        <main className="flex">
            <NavBar />
            <section className="flex-1">
                <Header />
                {children}
            </section>
        </main>
    </ProtectedRoute>
  )
}

export default layout