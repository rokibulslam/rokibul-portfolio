import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg  max-w-sm">
      {/* Project Image */}
      <div className="relative w-full h-56">
        <Image
          src="/project/projectImage1.jpeg" // Replace with your image path
          alt="E-commerce Platform"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        {/* Animated Hover Effect Layer */}
        <div className="absolute inset-0 bg-black/60 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
          <button className="px-6 py-2 border-[1px] text-secondary text-xs bg-transparent rounded-lg shadow hover:bg-indigo-700 focus:outline-none">
            View Project
          </button>
        </div>
      </div>

      {/* Content */}
      <div className=" bottom-4 left-4 text-primaryText">
        <h3 className="text-lg font-bold">E-commerce Platform</h3>
        <p className="text-sm ">Built with Next.js and Shopify</p>
        <div className="mt-4 flex space-x-2">
          <button className="px-4 py-1 text-xs font-semibold bg-white text-primaryText rounded-lg shadow hover:bg-gray-300 focus:outline-none">
            View Live
          </button>
          <button className="px-4 py-1 text-sm font-semibold text-white border border-white rounded-lg hover:bg-white hover:text-gray-800 focus:outline-none">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
