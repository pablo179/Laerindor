import tokens from './fonts.json';

export const fontFamilies = tokens.families.project;
export const fontWeights = tokens.weights;
export const fontStyles = tokens.styles;

export type FontFamily = keyof typeof fontFamilies;
export type FontWeight = keyof typeof fontWeights;
export type FontStyle = keyof typeof fontStyles;

export interface Font {
  family: FontFamily;
  weight: FontWeight;
  style: FontStyle;
}
