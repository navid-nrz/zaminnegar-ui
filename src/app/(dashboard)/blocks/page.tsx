"use client"
import { AiOutlinePlus } from "react-icons/ai";
import BlocksTable, { Block } from "@/app/components/dashboard/blocks/BlocksTable";
import { useState } from "react";
import Modal from "@/app/components/dashboard/blocks/BlocksPopupAddBlock";
import { IoChevronDown } from "react-icons/io5";



export const mockBlocks: Block[] = [
  { code: "BLK-030", region: "مرکز", parcelCount: 26, status: "final" },
  { code: "BLK-029", region: "غرب", parcelCount: 39, status: "draft" },
  { code: "BLK-028", region: "شرق", parcelCount: 13, status: "proposed" },
  { code: "BLK-027", region: "جنوب", parcelCount: 47, status: "final" },
  { code: "BLK-026", region: "شمال", parcelCount: 22, status: "draft" },
  { code: "BLK-025", region: "مرکز", parcelCount: 34, status: "proposed" },
  { code: "BLK-024", region: "غرب", parcelCount: 9, status: "final" },
  { code: "BLK-023", region: "شرق", parcelCount: 55, status: "draft" },
  { code: "BLK-022", region: "جنوب", parcelCount: 18, status: "proposed" },
  { code: "BLK-021", region: "شمال", parcelCount: 43, status: "final" },

  { code: "BLK-020", region: "مرکز", parcelCount: 29, status: "draft" },
  { code: "BLK-019", region: "غرب", parcelCount: 4, status: "proposed" },
  { code: "BLK-018", region: "شرق", parcelCount: 36, status: "final" },
  { code: "BLK-017", region: "جنوب", parcelCount: 11, status: "draft" },
  { code: "BLK-016", region: "شمال", parcelCount: 49, status: "proposed" },
  { code: "BLK-015", region: "مرکز", parcelCount: 21, status: "final" },
  { code: "BLK-014", region: "غرب", parcelCount: 33, status: "draft" },
  { code: "BLK-013", region: "شرق", parcelCount: 15, status: "proposed" },
  { code: "BLK-012", region: "جنوب", parcelCount: 41, status: "final" },
  { code: "BLK-011", region: "شمال", parcelCount: 27, status: "draft" },

  { code: "BLK-010", region: "مرکز", parcelCount: 6, status: "proposed" },
  { code: "BLK-009", region: "غرب", parcelCount: 52, status: "final" },
  { code: "BLK-008", region: "شرق", parcelCount: 19, status: "draft" },
  { code: "BLK-007", region: "جنوب", parcelCount: 31, status: "final" },
  { code: "BLK-006", region: "شمال", parcelCount: 8, status: "proposed" },
  { code: "BLK-005", region: "مرکز", parcelCount: 45, status: "draft" },
  { code: "BLK-004", region: "غرب", parcelCount: 17, status: "final" },
  { code: "BLK-003", region: "شرق", parcelCount: 38, status: "proposed" },
  { code: "BLK-002", region: "جنوب", parcelCount: 12, status: "draft" },
  { code: "BLK-001", region: "شمال", parcelCount: 24, status: "final" },
];


export default function BlockPage() {

  const [blocks, setBlocks] = useState<Block[]>(mockBlocks);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [nameBlock , setNameBlock] = useState('')
  const [nameRegion , setNameRegion] = useState('')
  const [valueStatus , setValueStatus] = useState('')
  const [alt , setAlt] = useState('')

  const handleAddBlock = () => {
    if (!nameBlock.trim() || !nameRegion || !valueStatus) {
      setAlt("لطفاً تمام فیلدها را تکمیل کنید");
      return;
    }

    if (blocks.some((block) => block.code === nameBlock.trim())) {
      setAlt("کد این بلوک قبلاً ثبت شده است");
      return;
    }

    const newBlock: Block = {
      code: nameBlock.trim(),
      region: nameRegion,
      parcelCount: 0,
      status: valueStatus as Block["status"],
    };

    setBlocks((prevBlocks) => [newBlock, ...prevBlocks]);
console.log("New Block:", blocks);
    setNameBlock("");
    setNameRegion("");
    setValueStatus("");

    setIsOpen(false);
  };
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
          <button
            onClick={() => setIsOpen(true)}
            className="min-w-fit flex gap-2 items-center bg-blue-500 hover:bg-blue-600 transition duration-300 py-2.5 px-4 rounded-lg cursor-pointer"
          >
            <AiOutlinePlus />
            <span className="text-sm">افزودن بلوک</span>
          </button>
        </div>
        <BlocksTable
          data={blocks}
          onDelete={console.log}
          onEdit={console.log}
          onRowClick={console.log}
          searchValue={searchValue}
        />
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl text-white mb-4">افزودن بلوک جدید</h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <input
            value={nameBlock}
            onChange={(e) => setNameBlock(e.target.value)}
            type="text"
            placeholder="کد بلوک"
            className="w-full p-3 rounded-lg bg-slate-700 text-white border-slate-200/10 outline-none"
          />
          <div className="relative">
            <select
              value={nameRegion}
              onChange={(e) => setNameRegion(e.target.value)}
              name="status"
              className="w-full p-2.5 rounded-lg bg-slate-700 text-white border-slate-200/10 outline-none appearance-none"
            >
              <option value="" disabled>
                نام منطقه
              </option>
              <option value="شمال">شمال</option>
              <option value="جنوب">جنوب</option>
              <option value="شرق">شرق</option>
              <option value="غرب">غرب</option>
              <option value="مرکز">مرکز</option>
            </select>
            <IoChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-lg pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={valueStatus}
              onChange={(e) => setValueStatus(e.target.value)}
              name="status"
              className="w-full p-2.5 rounded-lg bg-slate-700 text-white border-slate-200/10 outline-none appearance-none"
            >
              <option value="" disabled>
                وضعیت
              </option>
              <option value="final">final</option>
              <option value="draft">draft</option>
              <option value="proposed">proposed</option>
            </select>
            <IoChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-lg pointer-events-none" />
          </div>
        </form>
        <p className="text-sm text-red-400 pt-4 pr-1">{alt}</p>
        <button
          type="button"
          onClick={handleAddBlock}
          className="mt-4 bg-blue-500 px-4 py-2 rounded-lg cursor-pointer"
        >
          ثبت بلوک
        </button>
      </Modal>
    </div>
  );
}
