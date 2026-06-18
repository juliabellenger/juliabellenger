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

      {/* Photo Shares — always visible */}
      <main className="flex flex-col gap-5 mb-10">
        <Link href="/photo-upload/" className="block text-center group">
          <h2 className="font-heading text-2xl tracking-[0.15em] text-slate group-hover:text-gold transition-colors">
            Photo Shares
          </h2>
        </Link>

        <div className="rounded-xl border-[1.5px] border-gold bg-cream-light px-6 py-5 flex items-center gap-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          <img
            src="/wedding-qr-2.png"
            alt="QR code for Julia and Tom wedding photo upload"
            className="w-20 h-20 flex-shrink-0"
          />
          <div className="flex-1 min-w-0 flex flex-col items-center justify-center text-center">
            <div className="font-heading text-[22px] font-semibold tracking-[3px] text-slate">
              Julia &amp; Tom
            </div>
            <div className="italic text-sm font-light text-slate-light mt-2">
              Wedding Photos
            </div>
            <div className="flex gap-2 mt-3 justify-center">
              <Link
                href="/photo-upload/wedding.html"
                className="font-heading text-xs tracking-[2px] px-3.5 py-2 rounded-sm bg-slate text-cream border border-slate hover:bg-[#2e3344] transition-colors"
              >
                Upload Photos
              </Link>
              <a
                href="https://console.firebase.google.com/project/bellenger-wedding-photos/storage"
                target="_blank"
                rel="noopener"
                className="font-heading text-xs tracking-[2px] px-3.5 py-2 rounded-sm bg-transparent text-slate border border-gold hover:bg-gold hover:text-white transition-colors"
              >
                Admin View
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-[1.5px] border-gold bg-cream-light px-6 py-5 flex items-center gap-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          <img
            src="/share-qr-2.png"
            alt="QR code for shared photo upload"
            className="w-20 h-20 flex-shrink-0"
          />
          <div className="flex-1 min-w-0 flex flex-col items-center justify-center text-center">
            <div className="font-heading text-[22px] font-semibold tracking-[3px] text-slate">
              Photo Share
            </div>
            <div className="italic text-sm font-light text-slate-light mt-2">
              Shared Photos
            </div>
            <div className="flex gap-2 mt-3 justify-center">
              <Link
                href="/photo-upload/share.html"
                className="font-heading text-xs tracking-[2px] px-3.5 py-2 rounded-sm bg-slate text-cream border border-slate hover:bg-[#2e3344] transition-colors"
              >
                Upload Photos
              </Link>
              <a
                href="https://console.firebase.google.com/project/bellenger-wedding-photos/storage"
                target="_blank"
                rel="noopener"
                className="font-heading text-xs tracking-[2px] px-3.5 py-2 rounded-sm bg-transparent text-slate border border-gold hover:bg-gold hover:text-white transition-colors"
              >
                Admin View
              </a>
            </div>
          </div>
        </div>

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
