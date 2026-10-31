// import MainLogo from "../../../public/zaminnegar-logo.png";
import Image from "next/image";

export default function header() {
  const userName = "مدیر";
  return (
    <header className="grid grid-cols-3 items-center border-b border-slate-200/10 p-4">
      <nav className="right_nav items-start">
        <div className="profile_wrapper flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-[100vw] bg-linear-to-tl from-blue-300 to-blue-100 flex items-center justify-center">
            <span className="font-black text-blue-950 -mt-1">
              {userName?.trim().charAt(0) || "؟"}
            </span>
          </div>
          <span>{userName}</span>
        </div>
      </nav>
      <nav className="middle_nav flex items-center justify-center">
        <form className="flex w-full max-w-sm items-center gap-2">
          <label htmlFor="simple-search" className="sr-only">
            جستجو
          </label>

          <div className="min-w-0 flex-1">
            <input
              type="search"
              id="simple-search"
              placeholder="جستجوی منطقه یا بلوک..."
              className="block w-full rounded-lg border border-slate-200/10 bg-[#504e4e52] py-2.5 px-3 text-sm text-slate-200 outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <button
            type="submit"
            aria-label="جستجو"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
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
      </nav>
      <nav className="left_nav flex gap-3 items-center justify-end">
        <strong>سامانه زمین نگار</strong>
        <Image src="/zaminnegar-logo.png" alt="Zaminnegar" width={40} height={40}/>
      </nav>
    </header>
  );
}
