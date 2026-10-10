
import Link from "next/link";
import { ArrowLeft, UsersRound } from "lucide-react";

export default function DirectoryPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#062e29] px-6 text-white">
            <div className="max-w-lg text-center">
                <UsersRound
                    size={52}
                    className="mx-auto mb-6 text-[#d9b877]"
                />

                <h1 className="font-aligra text-5xl">
                    SPC Dubai Directory
                </h1>

                <p className="mt-5 text-white/65">
                    Member directory content coming soon.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d9b877] px-7 py-3 text-sm font-semibold text-[#062e29]"
                >
                    <ArrowLeft size={17} />
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
