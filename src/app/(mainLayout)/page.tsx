import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-[90vh] rounded container flex-col items-start justify-center p-10 shadow-2xl ">
      <Sidebar />
    </main>
  );
}
