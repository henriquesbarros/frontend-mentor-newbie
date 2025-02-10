import Image from "next/image";

interface CardProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    borderColor: string
}

export function Card({ title, subtitle, imageSrc, imageAlt, borderColor }: CardProps) {
    return (
      <div
        className={`max-w-[311px] lg:max-w-[350px] max-h-[222px] lg:max-h-[250px] p-7 shadow-[0px_15px_30px_-11px_rgba(131,166,210,0.5)] rounded-lg border-t-[4px] ${borderColor}`}
      >
        <h3 className="text-xl font-semibold text-gray-cool">{title}</h3>
        <p className="leading-[23px] tracking-[0.09px] text-[13px] text-gray-cool/50 mb-[33px]">
          {subtitle}
        </p>
        <div className="flex justify-end">
          <Image src={imageSrc} alt={imageAlt} width={57} height={57} />
        </div>
      </div>
    );








}