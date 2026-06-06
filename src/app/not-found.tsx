import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f8fa] text-center px-6">
      <div className="text-[80px] font-black text-[#0a4264] tracking-tight leading-none mb-4">404</div>
      <p className="text-[18px] text-[#4a6580] mb-8">Page not found.</p>
      <Link
        href="/"
        className="bg-[#ff6900] text-white px-7 py-3 rounded-full text-[14px] font-bold hover:bg-[#e55e00] transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
