import Link from "next/link";
import { FaRegFaceFrown } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="space-y-4 text-center">
        <FaRegFaceFrown className="text-custom-purple-300 text-5xl mx-auto" />
        <h1 className="text-8xl font-bold text-gray-900 dark:text-gray-100">
          404
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-300">
          Resource Not Found
        </p>
        <Link
          className="inline-flex h-10 capitalize items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/insights"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
