// src/app/page.jsx
'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Link href="/SignUpSignIn">
        <button className="p-2 mt-4 rounded bg-blue-500 text-white">Go to Sign Up / Sign In</button>
      </Link>
    </main>
  );
}
