import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-900 max-w-sm">
      {/* Project Image */}
      <div className="relative w-full h-56">
        <Image
          src="/project/projectImage1.jpeg" // Replace with your image path
          alt="E-commerce Platform"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        {/* Whitish Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primaryText/100 via-primaryText/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className=" absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold">E-commerce Platform</h3>
        <p className="text-sm text-white">Built with Next.js and Shopify</p>
        <div className="mt-4 flex space-x-2">
          <button className="px-4 py-1 text-sm text-primaryText font-semibold text-textPrimary bg-white rounded-lg shadow hover:bg-transparent focus:outline-none">
            View Live
          </button>
          <button className="px-4 py-1 text-sm font-semibold text-white bg-transparent rounded-lg shadow hover:bg-gray-300 hover:text-secondaryText focus:outline-none border-white border-[1px]">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
