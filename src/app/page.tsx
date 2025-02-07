import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((img) => (
          <div className="w-48 p-4" key={img.id}>
            <img src={img.url} />
            <div>{img.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
