import Image from "next/image";

interface RecipeImageProps {
  src: string;
  alt: string;
  className: string;
}

export function RecipeImage({ src, alt, className }: RecipeImageProps) {
  return (
    <Image src={src} alt={alt} className={className} width={375} height={171} layout="responsive" />
  );
}
