"use client";

import { signInWithPopup, signOut } from "firebase/auth";
import { getFirebase } from "@/lib/firebase";
import { useAuth } from "./AuthProvider";

export default function SignInButton() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <p className="text-slate-light/50 italic text-sm">Loading...</p>
    );
  }

  if (user) {
    const { auth } = getFirebase();
    return (
      <div className="flex items-center justify-center gap-4">
        <p className="font-body text-sm text-slate-light">
          {user.displayName || user.email}
        </p>
        <button
          onClick={() => auth && signOut(auth)}
          className="rounded-lg border border-gold/40 bg-transparent px-3 py-1.5 font-heading text-xs tracking-wider text-slate hover:bg-gold-faint transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        const { auth, googleProvider } = getFirebase();
        if (auth && googleProvider) signInWithPopup(auth, googleProvider);
      }}
      className="rounded-lg bg-slate px-6 py-3 font-heading text-sm tracking-[0.15em] text-cream-light hover:bg-slate-light transition-colors"
    >
      Sign in with Google
    </button>
  );
}
