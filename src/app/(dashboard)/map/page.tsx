import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
export const instant = false;
export default function MapPage() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 h-20 border border-amber-300"></div>
      <div className="h-20 border border-amber-300"></div>
      <div className="h-20 border border-amber-300">
        <DashboardSidebar />
      </div>
    </div>
  );
}
