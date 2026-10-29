"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { CiMap, CiUser, CiGrid42, CiGrid32 } from "react-icons/ci";
import { PiPolygonLight } from "react-icons/pi";

export type NavigationItem = {
  label: string;
  href: string;
  icon: IconType;
};

const navigationItems: NavigationItem[] = [
  { label: "نقشه", href: "/map", icon: CiMap },
  { label: "مالکین", href: "/owners", icon: CiUser },
  { label: "مناطق", href: "/regions", icon: PiPolygonLight },
  { label: "بلوک ها", href: "/blocks", icon: CiGrid42 },
  { label: "قطعات", href: "/parcels", icon: CiGrid32 },
];

export default function DashboardNavigation() {
  const pathName = usePathname();
  return (
    <aside className="w-full">
      <ul className="flex flex-col gap-1.5 w-full p-2 ">
        {navigationItems.map((item, key) => (
          <Link
            aria-selected={pathName.includes(item.href)}
            className="flex items-center rounded-lg transition-colors duration-300 ease-in-out justify-between w-full p-3 text-xs aria-selected:bg-blue-500/30 hover:bg-blue-500/10"
            key={key}
            href={item.href}
          >
            {item.label} {<item.icon className="text-lg stroke-[0.2]" />}
          </Link>
        ))}
      </ul>
    </aside>
  );
}
