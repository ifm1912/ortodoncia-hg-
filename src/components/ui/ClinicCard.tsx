interface ClinicCardProps {
  name: string;
  city: string;
  province: string;
  since: number;
}

export function ClinicCard({ name, city, province, since }: ClinicCardProps) {
  return (
    <div className="bg-white rounded-xl border border-primary-100 p-6 hover:shadow-md hover:border-primary-200 transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-primary-900">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {city}, {province}
          </p>
          <span className="inline-block mt-2 text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
            Desde {since}
          </span>
        </div>
      </div>
    </div>
  );
}
