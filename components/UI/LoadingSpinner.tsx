export function LoadingSpinner() {
  return (
    <div className="flex justify-center py-20">
      <div className="w-6 h-6 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
