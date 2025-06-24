function About() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-red-400">
      <h2 className="text-4xl font-bold text-white w-auto bg-[#222222] p-3 rounded">
        About
      </h2>
      <p className="m-10 w-9/12">
        Welcome to Book Shop, your go-to destination for stories, knowledge, and
        inspiration. We believe that books are more than just pages — they’re
        windows to other worlds, teachers of life lessons, and companions for
        every mood. Whether you're into thrilling mysteries, timeless classics,
        personal development, or children’s tales — we've got a curated
        selection just for you.
      </p>
      <h2 className="text-4xl font-bold text-white w-auto bg-[#222222] p-3 rounded">
        Why choose Us?
      </h2>
      <div className="mt-10">
        <ul className="list-disc pl-5">
          <li>✅ Hand-picked collection from bestselling authors</li>
          <li>🚚 Fast delivery and secure payments</li>
          <li>📖 Affordable prices for every reader</li>
          <li>💬 Recommendations tailored to your reading taste</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
