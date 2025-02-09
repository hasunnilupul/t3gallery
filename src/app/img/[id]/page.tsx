import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const photoId = Number(id);
  if (isNaN(photoId)) throw new Error("Invalid photo id");

  return <FullPageImageView id={photoId} />;
}
