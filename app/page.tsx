'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName }),
      });
      const data = await response.json();
      setApiResponse(data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiResponse('Error occurred while processing your submission');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to Our Coding Club
        </p>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold">Coding Club Homepage</h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Our Meetings
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Join our exciting workshops led by Robert and Zach. Enhance your coding skills and explore new technologies!
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            RavenHacks
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Get ready for our 24-hour coding competition later this year. Challenge yourself and collaborate with fellow coders!
          </p>
        </div>
      </div>

      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScKxOp9Dj8PEeToa0PwdRlLCyqPb9uQdC9QAG2pkKFGijCjfg/viewform?embedded=true" width="640" height="551">Loading…</iframe>

      <div className="mt-8">
        <Link href="/signup" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <span className="text-2xl font-semibold">
            Sign Up Now{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </span>
        </Link>
      </div>
    </main>
  );
}