import React from 'react';
import { IDonutSliceProps } from './donut.models';

export function DonutSlice(props: IDonutSliceProps): JSX.Element {
  return <>{props.label}</>;
}
