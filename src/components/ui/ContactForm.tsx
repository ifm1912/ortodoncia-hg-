'use client';

import { useState, FormEvent } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjkvqwpg'; // Reemplazar con tu ID real de Formspree

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-primary-200 bg-primary-50 p-8 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-heading font-semibold text-primary-900 mb-2">
          Mensaje enviado
        </h3>
        <p className="text-sm text-gray-600">
          Gracias por su mensaje. Nos pondremos en contacto lo antes posible.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          aria-required="true"
          className="w-full rounded-lg border border-primary-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
          placeholder="Su nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          className="w-full rounded-lg border border-primary-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
          placeholder="Su correo electrónico"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje <span className="text-red-400">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          aria-required="true"
          className="w-full rounded-lg border border-primary-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
          placeholder="Escriba su mensaje"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo o escríbanos directamente por correo electrónico.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
