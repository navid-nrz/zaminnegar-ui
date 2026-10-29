import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import Header from "../components/dashboard/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-full h-full flex flex-col">
      <Header />
      <div className="grid grid-cols-12 h-[-webkit-fill-available]">
        <main className="col-span-11 h-full">{children}</main>
        <DashboardNavigation />
      </div>
    </div>
  );
}
