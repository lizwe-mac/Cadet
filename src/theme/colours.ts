export type PrimaryColours = 'primary' | 'primary_1' | 'primary_2';
export type SecondaryColours = 'secondary' | 'secondary_1' | 'secondary_2';
export type Accent2Colours = 'accent-2' | 'accent-2_1' | 'accent-2_2';
export const accent2Colours = ['accent-2', 'accent-2-1', 'accent-2-2'] as const;
export type Accent3Colours = 'accent-3' | 'accent-3_1' | 'accent-3_2';
export type BackgroundColours = 'background' | 'background_1' | 'background_2';
export type CardColours = 'cards' | 'cards_1' | 'cards_2';
export type BorderColours = 'borders' | 'borders_1' | 'borders_2';
export type HeadingColours = 'headings' | 'headings_1' | 'headings_2';
export type TextColours = 'text' | 'text_1' | 'text_2';
export type LinkTextColours = 'link-text' | 'link-text_1' | 'link-text_2';
export type ContrastTextColours = 'contrast-text' | 'contrast-text_1' | 'contrast-text_2';
export type ValidationColours = 'validation' | 'validation_1' | 'validation_2';
export type DefaultColours = 'default' | 'default_1' | 'default_2';
export type BaseRagColours = 'r' | 'a' | 'g';
export type ExpandedRagColours = 'r_1' | 'r_2' | 'a_1' | 'a_2' | 'g_1' | 'g_2';
export type InnerShadowColours = 'inner-shadow-colour' | 'inner-shadow-colour_1';
export type OuterShadowColours = 'outer-shadow-colour' | 'outer-shadow-colour_1';

export const randomColours = ['light', 'baby-blue', 'blue', 'lilac', 'grape', 'pink', 'bright-pink', 'berry', 'orange', 'honey', 'lime', 'apple', 'white', 'black', 'yellow'] as const;
export type RandomColours = typeof randomColours[number];

export const graphColours = ['grc_1', 'grc_2', 'grc_3', 'grc_4', 'grc_5', 'grc_6', 'grc_7', 'grc_8', 'grc_9', 'grc_10', 'grc_11', 'grc_12', 'grc_13', 'grc_14', 'grc_15'] as const;
export type GraphColours = typeof graphColours[number];
export const filteredGraphColours = ['grc_1', 'grc_2', 'grc_3', 'grc_4', 'grc_5', 'grc_6', 'grc_7', 'grc_8', 'grc_9', 'grc_10', 'grc_11', 'grc_12', 'grc_15'] as const;

export type ThemeColours =
  | PrimaryColours
  | SecondaryColours
  | Accent2Colours
  | Accent3Colours
  | BackgroundColours
  | CardColours
  | BorderColours
  | HeadingColours
  | TextColours
  | ValidationColours
  | DefaultColours
  | BaseRagColours
  | ExpandedRagColours
  | LinkTextColours
  | ContrastTextColours
  | InnerShadowColours
  | OuterShadowColours
  | RandomColours
  | GraphColours
  | 'highlight-gradient'
  | 'backdrop';
