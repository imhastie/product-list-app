export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-center py-20">
      <p className="text-red-500 text-sm">{message}</p>
    </div>
  );
}