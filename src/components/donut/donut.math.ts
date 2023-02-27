import { percentToDegrees, getCoordFromDegrees } from '../helpers';
import { DonutSlideCommandedProperties, IDonutSliceProps } from './donut.models';

export function getSliceCommands(percent: number, radius: number, svgSize: number, borderSize: number): string {
  const degrees = percentToDegrees(percent);
  const longPathFlag = degrees > 180 ? 1 : 0;
  const innerRadius = radius - borderSize;

  const commands: string[] = [];

  commands.push(`M ${svgSize / 2 + radius} ${svgSize / 2}`);
  commands.push(`A ${radius} ${radius} 0 ${longPathFlag} 0 ${getCoordFromDegrees(degrees, radius, svgSize)}`);
  commands.push(`L ${getCoordFromDegrees(degrees, innerRadius, svgSize)}`);
  commands.push(`A ${innerRadius} ${innerRadius} 0 ${longPathFlag} 1 ${svgSize / 2 + innerRadius} ${svgSize / 2}`);

  return commands.join(' ');
}

export function calculateDonutSlices(parts: Array<IDonutSliceProps>, radius: number = 50, svgSize: number = 100, borderSize: number = 12): { parts: Array<DonutSlideCommandedProperties>; total: number } {
  const total = parts.reduce((a, b) => a + b.value, 0);

  let previousPercent: number = 0;

  return {
    parts: parts.map(part => {
      const partPercent = (part.value / total) * 100;

      const commands = getSliceCommands(partPercent, radius, svgSize, borderSize);
      const offset = previousPercent * 3.6 * -1;

      previousPercent += partPercent;

      return { ...part, commands, offset, adjustedPercent: partPercent };
    }),
    total,
  };
}

