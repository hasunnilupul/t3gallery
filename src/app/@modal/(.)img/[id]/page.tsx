import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const photoId = Number(id);
  if (isNaN(photoId)) throw new Error("Invalid photo id");

  return (
    <Modal>
      <FullPageImageView id={photoId} />
    </Modal>
  );
}
