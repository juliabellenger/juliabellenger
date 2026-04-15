"use client";

import Link from "next/link";
import SignInButton from "@/components/SignInButton";
import { useAuth } from "@/components/AuthProvider";

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <div className="flex-1 flex flex-col px-4 py-12">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="font-heading text-5xl tracking-[0.15em] text-slate">
          Julia Bellenger
        </h1>
        <p className="font-script text-3xl text-gold mt-2">
          a personal collection of tools
        </p>
        <div className="mt-5 mx-auto w-64 border-t border-gold/40" />
      </header>

      {/* Photo Uploads — always visible */}
      <main className="flex flex-col gap-5 mb-10">
        <Link
          href="/photo-upload/wedding.html"
          className="rounded-lg border-[1.5px] border-gold bg-cream-light p-8 hover:bg-gold-faint transition-colors group"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">📷</span>
            <div>
              <h2 className="font-heading text-xl tracking-[0.15em] text-slate group-hover:text-gold transition-colors">
                Photo Uploads
              </h2>
              <p className="font-script text-lg text-gold mt-0.5">
                friends that share remember
              </p>
            </div>
          </div>
        </Link>

        {/* Snippets — only when logged in */}
        {!loading && user && (
          <Link
            href="/snippets"
            className="rounded-lg border-[1.5px] border-gold bg-cream-light p-8 hover:bg-gold-faint transition-colors group"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">🪶</span>
              <div>
                <h2 className="font-heading text-xl tracking-[0.15em] text-slate group-hover:text-gold transition-colors">
                  Snippets
                </h2>
                <p className="font-script text-lg text-gold mt-0.5">
                  save the moments forever
                </p>
              </div>
            </div>
          </Link>
        )}
      </main>

      {/* Auth */}
      {!loading && !user && (
        <div className="text-center mb-10">
          <p className="font-script text-lg text-gold mb-4">
            log in for additional fun
          </p>
          <SignInButton />
        </div>
      )}
      {!loading && user && (
        <div className="text-center mb-10">
          <SignInButton />
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto pt-12 pb-6 text-center">
        <p className="font-script text-sm text-slate-light/40">
          Made with &#9825; for special days
        </p>
      </footer>
    </div>
  );
}
