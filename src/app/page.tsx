import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function ImagesContainer() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((img) => (
        <div className="h-48 w-48 p-4" key={img.id}>
          <Image
            src={img.url}
            alt={img.name}
            width={192}
            height={192}
            style={{ objectFit: "contain" }}
          />
          <div>{img.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <ImagesContainer />
      </SignedIn>
    </main>
  );
}
