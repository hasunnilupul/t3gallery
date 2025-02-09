import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function ImagesContainer() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((img) => (
        <div className="w-48 p-4" key={img.id}>
          <img src={img.url} />
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
