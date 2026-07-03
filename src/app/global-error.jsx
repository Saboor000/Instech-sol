"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { reportLovableError } from "@/lib/lovable-error-reporting";

export default function GlobalError({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "next_global_error" });
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
          <div className="max-w-md text-center">
            <h1 className="text-xl font-semibold">Something went wrong</h1>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  router.refresh();
                  reset();
                }}
                className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground"
              >
                Try again
              </button>
              <Link href="/" className="rounded-full border border-white/15 px-5 py-2 text-sm text-white">
                Go home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}