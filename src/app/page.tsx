import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className="min-h-screen flex justify-center items-center w-full gap-4">
          <Link href="/login1" className="text-blue-700 bg-white/80">Login 1</Link>
          <Link href="/login2" className="text-blue-700 bg-white/80">Login 2</Link>
        </div>
    </>
  );
}
