/** Device pixel ratio used for crisp rendering (capped for performance). */
export const DPR = typeof window === 'undefined' ? 1 : Math.min(3, Math.max(1, window.devicePixelRatio || 1));
