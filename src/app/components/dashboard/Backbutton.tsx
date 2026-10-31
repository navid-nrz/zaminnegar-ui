"use client";
import { useRouter } from "next/navigation";
import { FiChevronLeft } from "react-icons/fi";

export function BackButton() {
  const router = useRouter();
  return (
    <button
      className="min-w-fit h-10 flex gap-2 items-center bg-blue-500 hover:bg-blue-600 transition duration-300 py-2.5 px-4 rounded-lg cursor-pointer"
      onClick={() => {
        router.back();
      }}
    >
      <span className="text-sm">بازگشت</span>
      <FiChevronLeft size={15} />
    </button>
  );
}
