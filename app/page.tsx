import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold">Welcome to My Next.js App</h1>
      <p className="mt-4 text-lg">This is a simple Next.js application.</p>
      <Link href="/items" className="mt-4 text-blue-500 hover:underline">
        Go to Items List
      </Link>
    </div>
  );
}