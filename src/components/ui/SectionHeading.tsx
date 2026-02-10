interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  as: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <Tag
        className={`font-heading font-bold text-primary-900 ${
          Tag === 'h1' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'
        }`}
      >
        {title}
      </Tag>
      <div
        className={`mt-4 h-0.5 w-16 bg-primary-500 ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
