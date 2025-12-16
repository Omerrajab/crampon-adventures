import { Metadata } from "next"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Admin Panel | Crampon Adventures",
  description: "Manage content for Crampon Adventures",
}

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  )
}
