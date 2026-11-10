/**
 * Facecard design tokens. This file is the single source of truth.
 * Keep src/tokens.css in sync with any change made here.
 */

export const colors = {
  paper: "#F3F0E8",
  ink: "#161616",
  blue: "#3D5BFF",
  lime: "#D6FF3A",
  coral: "#FF5A36",
  border: "#BDB9AE",
} as const;

export const borders = {
  width: 1,
  color: colors.border,
} as const;

/** Square corners everywhere. Never use any other value. */
export const radius = 0 as const;

export const fonts = {
  /** Headings: Mona Sans Expanded (Mona Sans at width 125). */
  heading: "Mona Sans Expanded",
  /** Body text: Mona Sans. */
  body: "Mona Sans",
} as const;

export const tokens = { colors, borders, radius, fonts } as const;

export type ColorToken = keyof typeof colors;
