import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-base lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to Our Coding Club
        </p>
      </div>
      <br></br>

      <div className="relative flex place-items-center">
        <h1 className="text-5xl font-bold">Coding Club Homepage</h1>
      </div>
      <br></br>
      <br></br>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left gap-6">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-3xl font-semibold">
            Our Meetings
          </h2>
          <p className="m-0 max-w-[30ch] text-base opacity-70">
            Join our exciting workshops led by Robert and Zach. Enhance your coding skills and explore new technologies!
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-3xl font-semibold">
            RavenHacks
          </h2>
          <p className="m-0 max-w-[30ch] text-base opacity-70">
            Get ready for our 24-hour coding competition later this year. Challenge yourself and collaborate with fellow coders!
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-3xl font-semibold">
            All Aspects of Coding
          </h2>
          <p className="m-0 max-w-[30ch] text-base opacity-70">
            We cover a wide range of coding topics, including:
          </p>
          <ul className="list-disc list-inside text-base opacity-70 mt-2">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Data Science</li>
            <li>Game Development</li>
            <li>Machine Learning</li>
            <li>And more!</li>
          </ul>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-3xl font-semibold">
            Share & Compete
          </h2>
          <p className="m-0 max-w-[30ch] text-base opacity-70">
            Share your personal projects and participate in our mini hackathons (coding competitions). All skill levels are welcome!
          </p>
        </div>
      </div>

      <br></br>

      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScKxOp9Dj8PEeToa0PwdRlLCyqPb9uQdC9QAG2pkKFGijCjfg/viewform?embedded=true" width="640" height="551" className="mb-8">Loading…</iframe>

    </main>
  );
}