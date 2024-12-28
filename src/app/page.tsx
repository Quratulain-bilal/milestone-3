// src/app/HomePage.tsx
import Link from "next/link";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}

      <section
        className="text-white text-center py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/glasses-book-near-leaves-warm-blanket_23-2147943382.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // Make sure the section takes full screen height
        }}
      >
        <div className="bg-black bg-opacity-50 py-10 px-6 rounded-lg inline-block mx-auto">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Book Blog</h1>
          <p className="text-lg mb-6 italic">
            "A room without books is like a body without a soul." – Marcus
            Tullius Cicero
          </p>
          <p className="text-xl mb-6">Discover your next great read!</p>
          <Link href="/books">
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-200 transition duration-300">
              Explore Books
            </button>
          </Link>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-4">
          Get the latest updates on new books and blog posts.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-l-lg p-2"
            required
          />
          <button
            type="submit"
            className="bg-black text-white rounded-r-lg px-4"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          What Readers Are Saying
        </h2>
        <div className="flex flex-col items-center">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4">
            "This blog has transformed my reading experience!" - Reader A
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4">
            "I found so many great books thanks to this site!" - Reader B
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
