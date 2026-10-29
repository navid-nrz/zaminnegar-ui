"use client"
import { AiOutlinePlus } from "react-icons/ai";
import BlocksTable, { Block } from "@/app/components/dashboard/blocks/BlocksTable";
import { useState } from "react";




export const mockBlocks: Block[] = [
  { code: "BLK-001", region: "North", parcelCount: 24, status: "final" },
  { code: "BLK-002", region: "South", parcelCount: 12, status: "draft" },
  { code: "BLK-003", region: "East", parcelCount: 38, status: "proposed" },
  { code: "BLK-004", region: "West", parcelCount: 17, status: "final" },
  { code: "BLK-005", region: "Central", parcelCount: 45, status: "draft" },
  { code: "BLK-006", region: "North", parcelCount: 8, status: "proposed" },
  { code: "BLK-007", region: "South", parcelCount: 31, status: "final" },
  { code: "BLK-008", region: "East", parcelCount: 19, status: "draft" },
  { code: "BLK-009", region: "West", parcelCount: 52, status: "final" },
  { code: "BLK-010", region: "Central", parcelCount: 6, status: "proposed" },

  { code: "BLK-011", region: "North", parcelCount: 27, status: "draft" },
  { code: "BLK-012", region: "South", parcelCount: 41, status: "final" },
  { code: "BLK-013", region: "East", parcelCount: 15, status: "proposed" },
  { code: "BLK-014", region: "West", parcelCount: 33, status: "draft" },
  { code: "BLK-015", region: "Central", parcelCount: 21, status: "final" },
  { code: "BLK-016", region: "North", parcelCount: 49, status: "proposed" },
  { code: "BLK-017", region: "South", parcelCount: 11, status: "draft" },
  { code: "BLK-018", region: "East", parcelCount: 36, status: "final" },
  { code: "BLK-019", region: "West", parcelCount: 4, status: "proposed" },
  { code: "BLK-020", region: "Central", parcelCount: 29, status: "draft" },

  { code: "BLK-021", region: "North", parcelCount: 43, status: "final" },
  { code: "BLK-022", region: "South", parcelCount: 18, status: "proposed" },
  { code: "BLK-023", region: "East", parcelCount: 55, status: "draft" },
  { code: "BLK-024", region: "West", parcelCount: 9, status: "final" },
  { code: "BLK-025", region: "Central", parcelCount: 34, status: "proposed" },
  { code: "BLK-026", region: "North", parcelCount: 22, status: "draft" },
  { code: "BLK-027", region: "South", parcelCount: 47, status: "final" },
  { code: "BLK-028", region: "East", parcelCount: 13, status: "proposed" },
  { code: "BLK-029", region: "West", parcelCount: 39, status: "draft" },
  { code: "BLK-030", region: "Central", parcelCount: 26, status: "final" },
];


export default function blockPage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-2 items-center pb-4 pt-6 pr-4">
        <h2 className="w-full text-right text-3xl leading-loose font-normal">
          بلوک ها
        </h2>
        <div className="block-header w-full flex gap-2 justify-between items-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full items-center gap-2 rounded-lg border border-slate-200/10 bg-[#504e4e52]"
          >
            <label htmlFor="simple-search" className="sr-only">
              جستجو
            </label>

            <search className="min-w-0 w-full flex-1">
              <input
                type="search"
                id="simple-search"
                placeholder="جستجوی منطقه یا بلوک..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="block w-full py-2.5 px-3 text-sm text-slate-200 outline-none transition placeholder:text-slate-300"
              />
            </search>

            <button
              type="submit"
              aria-label="جستجو"
              className="flex h-10 w-10 shrink-0 items-center justify-center text-white transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/30 cursor-pointer"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </form>
          <button className="min-w-fit flex gap-2 items-center bg-blue-500 hover:bg-blue-600 transition duration-300 py-2.5 px-4 rounded-lg cursor-pointer">
            <AiOutlinePlus />
            <span className="text-sm">افزودن بلوک</span>
          </button>
        </div>
        <BlocksTable
          data={mockBlocks}
          onDelete={console.log}
          onEdit={console.log}
          onRowClick={console.log}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
}
