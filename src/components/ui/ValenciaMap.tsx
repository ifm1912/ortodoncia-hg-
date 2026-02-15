'use client';

import { useState } from 'react';

interface Clinic {
  readonly name: string;
  readonly city: string;
  readonly province: string;
  readonly since: number;
  readonly lat: number;
  readonly lng: number;
}

interface ValenciaMapProps {
  clinics: readonly Clinic[];
}

/* ── Geo → SVG projection ──────────────────────────────────────────── */
const BOUNDS = {
  latMin: 37.82,
  latMax: 40.82,
  lngMin: -1.56,
  lngMax: 0.56,
};

const SVG_W = 400;
const SVG_H = 560;

function geo(lat: number, lng: number) {
  const x =
    ((lng - BOUNDS.lngMin) / (BOUNDS.lngMax - BOUNDS.lngMin)) * SVG_W;
  const y =
    ((BOUNDS.latMax - lat) / (BOUNDS.latMax - BOUNDS.latMin)) * SVG_H;
  return { x, y };
}

/* ── Simplified outline of the Comunitat Valenciana ────────────────── */
// Approximate polygon traced from public geographic data.
// Points listed clockwise starting from NE coast (Castellón).
const CV_OUTLINE = [
  // Northern coast (Castellón)
  [40.53, 0.42], [40.48, 0.38], [40.42, 0.32], [40.35, 0.25],
  [40.28, 0.20], [40.22, 0.14], [40.18, 0.08], [40.12, 0.04],
  [40.06, -0.01], [40.02, -0.04], [39.98, -0.02], [39.94, 0.01],
  [39.90, 0.05], [39.86, 0.01], [39.82, -0.02],
  // Valencia coast
  [39.76, -0.08], [39.72, -0.14], [39.68, -0.18], [39.63, -0.22],
  [39.58, -0.25], [39.54, -0.28], [39.50, -0.30], [39.46, -0.32],
  [39.42, -0.30], [39.38, -0.28], [39.34, -0.26], [39.30, -0.24],
  [39.26, -0.22], [39.22, -0.24], [39.18, -0.28], [39.14, -0.32],
  [39.10, -0.36], [39.06, -0.38], [39.02, -0.40],
  // Alicante coast
  [38.96, -0.36], [38.90, -0.30], [38.84, -0.18], [38.78, -0.10],
  [38.72, -0.08], [38.68, -0.10], [38.64, -0.14], [38.58, -0.20],
  [38.52, -0.28], [38.46, -0.34], [38.40, -0.40], [38.36, -0.44],
  [38.32, -0.48], [38.28, -0.52], [38.22, -0.56], [38.16, -0.60],
  [38.10, -0.66], [38.04, -0.68], [37.98, -0.72], [37.92, -0.74],
  [37.86, -0.76],
  // Southern inland border (Alicante → Murcia border)
  [37.88, -0.82], [37.92, -0.88], [37.96, -0.94], [38.00, -1.00],
  [38.04, -1.04], [38.08, -1.00], [38.12, -0.96], [38.16, -0.92],
  [38.20, -0.88], [38.24, -0.84], [38.28, -0.82],
  // Western inland border (Albacete / Castilla-La Mancha)
  [38.34, -0.88], [38.40, -0.94], [38.46, -1.00], [38.52, -1.04],
  [38.58, -1.06], [38.64, -1.02], [38.70, -0.98], [38.76, -0.96],
  [38.82, -1.00], [38.88, -1.04], [38.94, -1.08], [39.00, -1.10],
  [39.06, -1.12], [39.12, -1.14], [39.18, -1.16], [39.24, -1.18],
  [39.30, -1.20], [39.36, -1.22], [39.42, -1.24],
  // Northwestern border (Cuenca / Teruel)
  [39.48, -1.26], [39.54, -1.24], [39.60, -1.20], [39.66, -1.16],
  [39.72, -1.14], [39.78, -1.18], [39.84, -1.22], [39.90, -1.24],
  [39.96, -1.20], [40.02, -1.16], [40.08, -1.12], [40.14, -1.08],
  [40.20, -1.04], [40.26, -1.00],
  // Northern border (Teruel / Tarragona)
  [40.32, -0.94], [40.36, -0.88], [40.40, -0.82], [40.44, -0.74],
  [40.48, -0.66], [40.50, -0.58], [40.52, -0.48], [40.54, -0.38],
  [40.56, -0.28], [40.56, -0.18], [40.56, -0.08], [40.54, 0.02],
  [40.54, 0.12], [40.54, 0.22], [40.53, 0.32], [40.53, 0.42],
] as const;

const outlinePath = CV_OUTLINE.map((p, i) => {
  const { x, y } = geo(p[0], p[1]);
  return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
}).join(' ') + ' Z';

/* ── Province divider lines (approximate) ──────────────────────────── */
// Castellón / Valencia border — roughly lat ~39.85 from coast to inland
const PROV_CS_V: readonly (readonly [number, number])[] = [
  [39.86, 0.01], [39.86, -0.20], [39.84, -0.40], [39.82, -0.60],
  [39.82, -0.80], [39.84, -1.00], [39.84, -1.22],
];

// Valencia / Alicante border — roughly lat ~38.72 from coast to inland
const PROV_V_A: readonly (readonly [number, number])[] = [
  [38.84, -0.18], [38.82, -0.40], [38.80, -0.60], [38.78, -0.80],
  [38.76, -0.96],
];

function lineToPath(points: readonly (readonly [number, number])[]) {
  return points
    .map((p, i) => {
      const { x, y } = geo(p[0], p[1]);
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

/* ── Province label positions ──────────────────────────────────────── */
const PROVINCE_LABELS = [
  { name: 'Castellón', lat: 40.15, lng: -0.30 },
  { name: 'Valencia', lat: 39.30, lng: -0.70 },
  { name: 'Alicante', lat: 38.38, lng: -0.60 },
];

/* ── Component ─────────────────────────────────────────────────────── */
export function ValenciaMap({ clinics }: ValenciaMapProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50/60 to-white overflow-hidden">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Mapa de la Comunidad Valenciana mostrando las clínicas donde colabora Hugo Gómez"
      >
        <desc>
          Clínicas:{' '}
          {clinics.map((c) => `${c.name} (${c.city})`).join(', ')}
        </desc>

        {/* Sea / background */}
        <rect width={SVG_W} height={SVG_H} fill="#f0fafb" />

        {/* Region fill */}
        <path
          d={outlinePath}
          fill="#e8f4f4"
          stroke="#8ec4c4"
          strokeWidth={1.5}
        />

        {/* Province dividers */}
        <path
          d={lineToPath(PROV_CS_V)}
          fill="none"
          stroke="#b3d9d9"
          strokeWidth={0.8}
          strokeDasharray="4,3"
        />
        <path
          d={lineToPath(PROV_V_A)}
          fill="none"
          stroke="#b3d9d9"
          strokeWidth={0.8}
          strokeDasharray="4,3"
        />

        {/* Province labels */}
        {PROVINCE_LABELS.map((prov) => {
          const { x, y } = geo(prov.lat, prov.lng);
          return (
            <text
              key={prov.name}
              x={x}
              y={y}
              textAnchor="middle"
              fill="#7db3b3"
              fontSize={13}
              fontFamily="Inter, sans-serif"
              fontWeight={500}
              style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              {prov.name}
            </text>
          );
        })}

        {/* Marker pulse rings */}
        {clinics.map((clinic, i) => {
          const { x, y } = geo(clinic.lat, clinic.lng);
          return (
            <circle
              key={`pulse-${i}`}
              cx={x}
              cy={y}
              r={12}
              fill="none"
              stroke="#2a7d7d"
              strokeWidth={1.5}
              opacity={active === i ? 0.5 : 0.2}
            >
              <animate
                attributeName="r"
                from="8"
                to="18"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from={active === i ? '0.5' : '0.3'}
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

        {/* Clinic markers */}
        {clinics.map((clinic, i) => {
          const { x, y } = geo(clinic.lat, clinic.lng);
          return (
            <g key={`marker-${i}`}>
              {/* Invisible larger touch target */}
              <circle
                cx={x}
                cy={y}
                r={18}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
                role="button"
                tabIndex={0}
                aria-label={`${clinic.name}, ${clinic.city}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActive(active === i ? null : i);
                  }
                }}
              />
              {/* Visible marker */}
              <circle
                cx={x}
                cy={y}
                r={7}
                fill={active === i ? '#1a6363' : '#2a7d7d'}
                stroke="white"
                strokeWidth={2.5}
                className="pointer-events-none transition-all duration-200"
                style={{
                  transform: active === i ? `scale(1.3)` : 'scale(1)',
                  transformOrigin: `${x}px ${y}px`,
                }}
              />
            </g>
          );
        })}

        {/* Tooltip */}
        {active !== null && (() => {
          const clinic = clinics[active];
          const { x, y } = geo(clinic.lat, clinic.lng);
          const tooltipW = 180;
          const tooltipH = 48;
          // Position tooltip above marker, adjust if near top edge
          const above = y > 70;
          const tx = Math.max(10, Math.min(x - tooltipW / 2, SVG_W - tooltipW - 10));
          const ty = above ? y - 28 - tooltipH : y + 22;

          return (
            <g className="pointer-events-none" aria-live="polite">
              {/* Tooltip background */}
              <rect
                x={tx}
                y={ty}
                width={tooltipW}
                height={tooltipH}
                rx={8}
                fill="#0d2626"
                opacity={0.92}
              />
              {/* Arrow */}
              <polygon
                points={
                  above
                    ? `${x - 6},${ty + tooltipH} ${x + 6},${ty + tooltipH} ${x},${ty + tooltipH + 8}`
                    : `${x - 6},${ty} ${x + 6},${ty} ${x},${ty - 8}`
                }
                fill="#0d2626"
                opacity={0.92}
              />
              {/* Clinic name */}
              <text
                x={tx + tooltipW / 2}
                y={ty + 20}
                textAnchor="middle"
                fill="white"
                fontSize={11}
                fontFamily="Inter, sans-serif"
                fontWeight={600}
              >
                {clinic.name}
              </text>
              {/* City */}
              <text
                x={tx + tooltipW / 2}
                y={ty + 36}
                textAnchor="middle"
                fill="#a3d4d4"
                fontSize={10}
                fontFamily="Inter, sans-serif"
              >
                {clinic.city}, {clinic.province}
              </text>
            </g>
          );
        })()}

        {/* "Comunidad Valenciana" label at the bottom */}
        <text
          x={SVG_W / 2}
          y={SVG_H - 16}
          textAnchor="middle"
          fill="#5ea3a3"
          fontSize={11}
          fontFamily="Inter, sans-serif"
          fontWeight={500}
          style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
        >
          Comunidad Valenciana
        </text>
      </svg>
    </div>
  );
}
