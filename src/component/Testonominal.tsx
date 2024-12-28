const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
