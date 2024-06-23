// src/app/page.jsx
'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-full text-center">
      <div className='w-full flex flex-col text-center'>
        <h1 className="text-3xl font-bold text-center w-full">
          Home Page
        </h1>
        <Link href="/SignUpSignIn">
          <button className="p-2 mt-4 rounded bg-blue-500 text-white">
            Sign Up / Sign In
          </button>
        </Link>
      </div>
    </main>
  );
}
