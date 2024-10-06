import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-100" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>The invoice you are looking for could not be found.</p>
      <Link
        href={"/dashboard/invoices"}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white text-sm transition-colors hover:bg-blue-400"
      >
        Go back
      </Link>
    </main>
  );
}
