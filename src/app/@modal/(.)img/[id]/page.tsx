import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const photoId = Number(id);
  if (isNaN(photoId)) throw new Error("Invalid photo id");

  const image = await getImage(photoId);

  return (
    <div>
      <img src={image.url} alt={image.name} className="w-96" />
    </div>
  );
}
