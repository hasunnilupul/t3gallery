export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id: photoId } = await params;

  return <div>{photoId}</div>;
}
