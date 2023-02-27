import { ThemeColours } from '../theme/colours';

export function colourString(colour: ThemeColours | string): string {
  return `var(--${colour})`;
}

export function getCoordFromDegrees(angle: number, radius: number, svgSize: number): [number, number] {
  const x = Math.cos((angle * Math.PI) / 180);
  const y = Math.sin((angle * Math.PI) / 180);

  const coordX = x * radius + svgSize / 2;
  const coordY = y * -radius + svgSize / 2;

  return [coordX, coordY];
}

export function percentToDegrees(percent: number): number {
  return percent * 3.6;
}

export function skillScoreRounding(score: number): number {
  const scoreString = score?.toFixed(1);

  if (scoreString?.endsWith('.0')) return Math.round(score);
  return parseFloat(scoreString);
}

export function percentageDifference(previousValue: number, currentValue: number): number {
  // A = |𝑉1−𝑉2| / [(𝑉1+𝑉2)2] × 100

  const AlphaValue = Math.abs(previousValue - currentValue);
  const EpsilonValue = (previousValue + currentValue) / 2;

  const normalizedValue = AlphaValue / EpsilonValue;

  return Math.round(normalizedValue * 100);
}

export function randomNumber(from: number = 2600, to: number = 4600): number {
  return Math.max(Math.floor(Math.random() * to), from);
}

export function roundToNearestIncrement(value: number, increment: number): number {
  const justUnderHalf = increment / 2 - 0.1;
  return Math.round((value + justUnderHalf) / increment) * increment;
}

