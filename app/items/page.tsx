import Link from 'next/link';

const items = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
];

export default function Items() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Items List</h1>
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.id} className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <Link href={`/items/${item.id}`} className="text-blue-600 hover:underline text-2xl font-semibold">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}