
// import HomeScreen from "@/components/HomeScreen";
import ProtectedRoute from "@/components/ProtectedRoute";
import UserId from "@/components/UserId";
export default function Home() {
  return (
    <ProtectedRoute>
      <main>
        Welcome, user with id: <UserId />
      </main>
    </ProtectedRoute>
  );
}
