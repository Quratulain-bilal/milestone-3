import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="bg-blue-600 text-white text-center py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/stack-books-coffee-mug-desk_260672-515.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid')",
        backgroundSize: "cover", // Ensures the image covers the entire section without repeating
        backgroundPosition: "center", // Centers the image in the viewport
        backgroundRepeat: "no-repeat", // Ensures the image does not repeat
      }}
    >
      <div className=" bg-opacity-70 py-10 px-6 rounded-lg inline-block mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Book Blog</h1>
        <p className="text-lg mb-6">Discover your next great read!</p>
        <Link href="/books">
          <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-200 transition duration-300">
            Explore Books
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
