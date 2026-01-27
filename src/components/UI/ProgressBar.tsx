interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
}

export function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  return (
    <div className={`w-full bg-slate-200/80 dark:bg-slate-700/70 rounded-full h-3 ${className}`}>
      <div
        className="gradient-bg-blue h-3 rounded-full progress-bar"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
}
