// src/app/books/page.tsx
import Link from "next/link";
import Hero from "../../component/Hero"
import Newslister from "../../component/Newslister"
import Testimonials from "@/component/Testonominal";


export default async function BooksPage() {

  
  // Fetch data from the Google Books API
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=12"
  );
  const data = await response.json();
  const books = data.items || [];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Hero />
      <main className="flex-grow p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book: any) => (
          <div
            key={book.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            {book.volumeInfo.imageLinks?.thumbnail ? (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="w-40 h-60 object-cover mb-4"
              />
            ) : (
              <div className="w-40 h-60 bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <h2 className="text-lg font-semibold mb-2 text-center">
              {book.volumeInfo.title}
            </h2>
            <Link href={`/books/${book.id}`}>
              <button className="mt-auto px-4 py-2 bg-black text-white rounded hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </main>
      <Newslister />
      <Testimonials />
    </div>
  );
}
