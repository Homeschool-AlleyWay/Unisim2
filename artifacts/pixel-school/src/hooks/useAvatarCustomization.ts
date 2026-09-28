// UNIFY Character System — player avatar customization persisted in localStorage.
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ACCESSORIES, EYE_COLORS, HAIR_COLORS, HAIR_STYLES, OUTFITS, PANTS_COLORS, SHIRT_COLORS, SHOE_COLORS, SKIN_TONES,
} from '@/game/art/characters';
import type { AvatarCustomization, Look } from '@/types/character';

export const AVATAR_STORAGE_KEY = 'unify.avatar.v1';

export const AVATAR_OPTIONS = {
  skin: SKIN_TONES,
  hair: HAIR_COLORS,
  hairStyle: HAIR_STYLES,
  eyeColor: EYE_COLORS,
  shirt: SHIRT_COLORS,
  pants: PANTS_COLORS,
  shoes: SHOE_COLORS,
  outfit: OUTFITS,
  accessory: ACCESSORIES,
  backpack: SHIRT_COLORS,
} as const;

export const DEFAULT_AVATAR: AvatarCustomization = {
  name: 'Alex',
  skin: SKIN_TONES[2],
  hair: HAIR_COLORS[1],
  hairStyle: 'short',
  eyeColor: EYE_COLORS[0],
  shirt: SHIRT_COLORS[5],
  pants: PANTS_COLORS[0],
  shoes: SHOE_COLORS[0],
  outfit: 'tee',
  accessory: 'none',
  glasses: false,
  backpack: SHIRT_COLORS[0],
};

function isRecord(v: unknown): v is Record<string, unknown> { return typeof v === 'object' && v !== null; }

/** Merge stored JSON over the defaults, dropping any value that is no longer a valid option. */
export function sanitizeAvatar(raw: unknown): AvatarCustomization {
  if (!isRecord(raw)) return { ...DEFAULT_AVATAR };
  const out: AvatarCustomization = { ...DEFAULT_AVATAR };
  const opt = AVATAR_OPTIONS as Record<string, readonly string[]>;
  for (const key of Object.keys(opt) as (keyof typeof AVATAR_OPTIONS)[]) {
    const v = raw[key];
    if (typeof v === 'string' && opt[key].includes(v)) (out as unknown as Record<string, unknown>)[key] = v;
  }
  if (typeof raw.name === 'string' && raw.name.trim()) out.name = raw.name.trim().slice(0, 16);
  if (typeof raw.glasses === 'boolean') out.glasses = raw.glasses;
  return out;
}

export function loadAvatar(): AvatarCustomization {
  try {
    const raw = localStorage.getItem(AVATAR_STORAGE_KEY);
    return raw ? sanitizeAvatar(JSON.parse(raw)) : { ...DEFAULT_AVATAR };
  } catch {
    return { ...DEFAULT_AVATAR };
  }
}

export function saveAvatar(a: AvatarCustomization) {
  try { localStorage.setItem(AVATAR_STORAGE_KEY, JSON.stringify(a)); } catch { /* storage unavailable (private mode) */ }
}

export function avatarToLook(a: AvatarCustomization): Look {
  return {
    skin: a.skin, hair: a.hair, hairStyle: a.hairStyle, eyeColor: a.eyeColor,
    shirt: a.shirt, pants: a.pants, shoes: a.shoes, outfit: a.outfit,
    accessory: a.accessory, glasses: a.glasses, backpack: a.backpack,
  };
}

export function randomAvatar(seed = Date.now()): AvatarCustomization {
  let a = seed >>> 0;
  const r = () => { a = (a * 1664525 + 1013904223) >>> 0; return a / 4294967296; };
  const pick = <T,>(arr: readonly T[]) => arr[Math.floor(r() * arr.length)];
  return {
    name: DEFAULT_AVATAR.name,
    skin: pick(SKIN_TONES), hair: pick(HAIR_COLORS), hairStyle: pick(HAIR_STYLES), eyeColor: pick(EYE_COLORS),
    shirt: pick(SHIRT_COLORS), pants: pick(PANTS_COLORS), shoes: pick(SHOE_COLORS), outfit: pick(OUTFITS),
    accessory: pick(ACCESSORIES), glasses: r() < 0.2, backpack: pick(SHIRT_COLORS),
  };
}

export interface AvatarCustomizationApi {
  avatar: AvatarCustomization;
  look: Look;
  set: <K extends keyof AvatarCustomization>(key: K, value: AvatarCustomization[K]) => void;
  /** Step a list-backed option forward (+1) or backward (-1). */
  cycle: (key: Exclude<keyof AvatarCustomization, 'name' | 'glasses'>, dir?: 1 | -1) => void;
  randomize: () => void;
  reset: () => void;
}

export function useAvatarCustomization(): AvatarCustomizationApi {
  const [avatar, setAvatar] = useState<AvatarCustomization>(() => loadAvatar());

  // Persist every change; also follow edits made in another tab.
  useEffect(() => { saveAvatar(avatar); }, [avatar]);
  useEffect(() => {
    const onStorage = (e: StorageEvent) => { if (e.key === AVATAR_STORAGE_KEY) setAvatar(loadAvatar()); };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const set = useCallback(<K extends keyof AvatarCustomization>(key: K, value: AvatarCustomization[K]) => {
    setAvatar((prev) => ({ ...prev, [key]: value }));
  }, []);
  const cycle = useCallback((key: Exclude<keyof AvatarCustomization, 'name' | 'glasses'>, dir: 1 | -1 = 1) => {
    setAvatar((prev) => {
      const opts = AVATAR_OPTIONS[key] as readonly string[];
      const i = Math.max(0, opts.indexOf(prev[key] as string));
      return { ...prev, [key]: opts[(i + dir + opts.length) % opts.length] };
    });
  }, []);
  const randomize = useCallback(() => setAvatar((prev) => ({ ...randomAvatar(), name: prev.name })), []);
  const reset = useCallback(() => setAvatar({ ...DEFAULT_AVATAR }), []);

  const look = useMemo(() => avatarToLook(avatar), [avatar]);
  return { avatar, look, set, cycle, randomize, reset };
}
