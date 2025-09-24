"use client";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 main-page">
        <Sidebar />
        <main className="flex-1 p-6 main-container">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
