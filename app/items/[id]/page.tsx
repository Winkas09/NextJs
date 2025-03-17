import { notFound } from 'next/navigation';

const itemDetails: { [key: string]: { name: string; description: string } } = {
  '1': { name: 'Item 1', description: 'This is the detail for Item 1.' },
  '2': { name: 'Item 2', description: 'This is the detail for Item 2.' },
  '3': { name: 'Item 3', description: 'This is the detail for Item 3.' },
};

interface ItemDetailProps {
  params: {
    id: string;
  };
}

export default async function ItemDetail({ params }: ItemDetailProps) {
  const { id } = await params;
  const item = itemDetails[id];

  if (!item) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-900">{item.name}</h1>
        <p className="mt-6 text-lg text-gray-700">{item.description}</p>
      </div>
    </div>
  );
}