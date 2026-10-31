import DetailsLayer from "@/app/components/dashboard/map/DetailsLayer";
import LayerManagement from "@/app/components/dashboard/map/LayerManagement";
export const instant = false;
export default function MapPage() {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-3 h-full overflow-y-auto scrollbar-gutter-stable border-e border-slate-200/10">
        <DetailsLayer/>
      </div>
      <div className="col-span-7 h-full border-e border-slate-200/10"></div>
      <div className="col-span-2 h-full overflow-y-auto scrollbar-gutter-stable">
        <LayerManagement/>
      </div>
    </div>
  );
}
