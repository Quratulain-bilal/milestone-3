import Link from "next/link";
import CommentSection from "../../../component/CommentSection"

export default async function BookDetails({
  params,
}: {
  params: { id: string };
}) {
  // Fetch book details using the ID from the route
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${params.id}`
  );

  // Parse the JSON response
  const book = await response.json();

  // Check if the book exists
  if (!book || !book.volumeInfo) {
    return <div>Book not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <div className="flex-grow flex flex-col items-center p-6 md:p-12">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            {book.volumeInfo.title}
          </h1>
          {book.volumeInfo.imageLinks?.thumbnail && (
            <div className="flex justify-center mb-6">
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="w-48 h-72 object-cover rounded-lg shadow-md"
              />
            </div>
          )}
          <p className="text-lg text-gray-700 mb-6">
            {book.volumeInfo.description || "No description available."}
          </p>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Authors:
          </h2>
          <ul className="list-disc pl-5 mb-6 text-gray-700">
            {book.volumeInfo.authors ? (
              book.volumeInfo.authors.map((author: string, index: number) => (
                <li key={index}>{author}</li>
              ))
            ) : (
              <li>Author information not available.</li>
            )}
          </ul>
          <div className="flex justify-center">
            <Link href="/books">
              <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
                Back to Books
              </button>
            </Link>
          </div>
        </div>
        <CommentSection />
      </div>
      
    </div>
  );
}
