import { ThemeColours } from '../../theme/colours';

export interface IDonutSliceProps {
  value: number;
  colour: ThemeColours;
  label: string;
  previousValue?: number;
}

export interface DonutSlideCommandedProperties extends IDonutSliceProps {
  offset: number;
  commands: string;
  adjustedPercent: number;
}

export interface IDonutProps {
  showTotal?: boolean;
  showTooltips?: boolean;
  label: string;
}

