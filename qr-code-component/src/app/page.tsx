import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[320px] bg-white px-200 pt-200 pb-500 rounded-[20px]">
        <div>
          <Image
            src="/image-qr-code.png"
            alt="QR Code"
            className="rounded-[10px]"
            width={288}
            height={288}
          />
        </div>
        <div className="flex flex-col text-center mt-300 gap-200 max-w-[256px] m-auto">
          <h1 className="text-slate-900 text-preset1">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-slate-500 text-preset2">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
