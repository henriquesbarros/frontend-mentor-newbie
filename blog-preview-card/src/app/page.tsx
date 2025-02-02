import Image from "next/image"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col max-w-[327px] md:max-w-[384px] p-300 bg-white border border-gray-950 rounded-[20px] shadow-[8px_8px_0px_0px_#000000] shadow-gray-950">
        <Image
          src="/illustration-article.svg"
          alt="drawers"
          className="rounded-[10px] md:w-[336px] mb-300"
          width={279}
          height={200}
        />
        <span className="bg-yellow w-fit py-100 px-150 rounded-[4px] mb-150 text-preset3Bold text-gray-950">
          Learning
        </span>
        <p className="mb-150 text-preset3 text-gray-950">
          Published 02 Feb 2025
        </p>
        <h1 className="mb-150 text-preset1 tracking-tight text-gray-950 hover:text-yellow cursor-pointer transition-all duration-100">
          HTML & CSS foundations
        </h1>
        <p className="mb-300 text-preset3 md:text-preset2 text-gray-500">
          These languages are the backbone of every website, defining
          structure, content, and presentation.
        </p>
        <div className="flex items-center gap-150">
          <Image src="/image-avatar.webp" alt="avatar" width={32} height={32} />
          <p className="text-preset3Bold text-gray-950">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}














