import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl border border-primary-100 p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-heading font-semibold text-primary-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
