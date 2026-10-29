import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
export const instant = false;
export default function MapPage() {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-3 h-full border border-slate-200/10"></div>
      <div className="col-span-7 h-full border border-slate-200/10"></div>
      <div className="col-span-2 h-full border border-slate-200/10">
      </div>
    </div>
  );
}
