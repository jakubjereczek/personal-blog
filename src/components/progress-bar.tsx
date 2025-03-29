function ProgressBar({
  percentage,
  label,
  totalLabel,
}: {
  percentage: number;
  label: string;
  totalLabel: string;
}) {
  return (
    <div>
      <div className="h-4 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
        <div
          className="h-full bg-blue-600 dark:bg-blue-400"
          style={{ width: percentage + '%' }}
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-200">
        <span>{label}</span>
        <span>{totalLabel}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
