export default async function Products({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const paramsData = await params;

  return (
    <>
      <h1>Products page {`"${paramsData.slug}"`}</h1>
    </>
  );
}
