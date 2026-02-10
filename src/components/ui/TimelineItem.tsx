interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  description?: string;
}

export function TimelineItem({ year, title, institution, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0 border-l-2 border-primary-200 last:border-l-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-2 border-white" />
      <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded mb-2">
        {year}
      </span>
      <h3 className="text-lg font-heading font-semibold text-primary-900">
        {title}
      </h3>
      <p className="text-sm text-primary-600 mt-1">{institution}</p>
      {description && (
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
