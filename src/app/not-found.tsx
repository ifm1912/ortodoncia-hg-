import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-6xl font-heading font-bold text-primary-200">404</p>
        <h1 className="mt-4 text-2xl font-heading font-bold text-primary-900">
          Página no encontrada
        </h1>
        <p className="mt-3 text-gray-600">
          Lo sentimos, la página que busca no existe o ha sido trasladada.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>
    </section>
  );
}
