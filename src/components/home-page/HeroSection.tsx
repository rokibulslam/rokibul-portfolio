import Image from "next/image";
export function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Crafting Digital <span className="text-primary">Experiences</span>{" "}
          That Matter
        </h1>
        <p className="mt-4 text-gray-600">
          Full-stack developer specializing in creating beautiful, functional,
          and user-centered digital experiences.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary focus:outline-none">
            View Portfolio
          </button>
          <button className="px-6 py-2 border-2 border-indigo-600 text-primary font-semibold rounded-lg hover:bg-indigo-100 focus:outline-none">
            Contact Me
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image
          src="/images/hero-image.png"
          width={500}
          height={300}
          alt="Developer working"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
