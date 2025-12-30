import Image from "next/image";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  imageId: string;
};

export function PageHeader({ title, subtitle, imageId }: PageHeaderProps) {
  const { imageUrl, description, imageHint } = {
    imageUrl: `https://picsum.photos/seed/${imageId}/1600/500`,
    description: `Header for ${title}`,
    imageHint: "abstract background"
  };

  return (
    <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
      <Image
        src={imageUrl}
        alt={description}
        data-ai-hint={imageHint}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
