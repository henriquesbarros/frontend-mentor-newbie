import Image from "next/image";

import { LINKS } from "@/consts/links";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center bg-grey-800 p-300 w-[327px] md:w-[384px] md:p-500 rounded-xl gap-300">
        <figure className="flex flex-col items-center">
          <Image
            src="/avatar-jessica.jpeg"
            alt="Profile picture of Jessica Randall"
            className="rounded-full"
            width={88}
            height={88}
          />
          <figcaption className="sr-only">
            Jessica Randall, Front-end developer.
          </figcaption>
        </figure>
        <div className="text-center">
          <h1 className="text-white text-preset1">Jessica Randall</h1>
          <p className="text-green text-preset2Bold">London, United Kingdom</p>
        </div>
        <p className="text-white text-preset2 text-center">
          {`"Front-end developer and avid reader."`}
        </p>
        <nav aria-label="Jessica Randall's social links" className="w-full">
          <ul className="flex flex-col gap-200 w-full">
            {LINKS.map(({ name, url }, index) => (
              <li className="link-item" key={index}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open Jessica Randall's ${name} profile in a new tab`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}


























