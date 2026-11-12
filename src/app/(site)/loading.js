export default function Loading() {
  return (
    <div className="container-site flex min-h-[50vh] items-center justify-center py-24" role="status">
      <div className="h-10 w-10 animate-pulse rounded-full border-2 border-[color:var(--brass)] border-t-transparent" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
