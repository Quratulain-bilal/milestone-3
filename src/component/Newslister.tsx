const NewsletterSignup = () => {
  return (
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
  );
};

export default NewsletterSignup;
