export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-center text-red-600 py-10">
      <p>⚠ {message}</p>
    </div>
  );
}