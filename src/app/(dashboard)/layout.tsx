import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import Header from "../components/dashboard/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-svh h-full grid grid-rows-[auto_1fr] grid-cols-12">
      <div className="col-span-12">
      <Header />
      </div>
        <main className="col-span-11 h-full overflow-y-auto">{children}</main>
        <DashboardNavigation />
    </div>
  );
}
