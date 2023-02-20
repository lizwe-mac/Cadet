import React from 'react';
import { Canvas, CanvasSleeve, DonutInner, DonutLegend, DonutLegendList, DonutLegendListItem, DonutWrapper } from './donut.styles';
import { handleMouseEnter } from './donut.functions';
import { IDonutProps, IDonutSliceProps } from './donut.models';
import * as math from './donut.math';
import classNames from 'classnames';
import { PropsWithChildrenOfType } from '../../models/faux-child';
import { colourString } from '../helpers';

export function Donut(props: PropsWithChildrenOfType<IDonutProps, IDonutSliceProps>): JSX.Element {
  // Coerces the react children into an array. We need
  // to do this because if there is only one child in
  // of the component, it is populated as a single object
  // and not as an array.
  const slides = Array.isArray(props.children) ? props.children : [props.children];
  const children = slides.map(s => s?.props).filter(i => !!i && i.value > 0) as IDonutSliceProps[];

  const { parts, total } = math.calculateDonutSlices(children);
  const characterLengthOfTotal = total.toString().length;
  const characterLengthOfLabel = props.label.toString().length;

  if (!children.length) {
    return (
      <DonutWrapper>
        <DonutInner>
          <CanvasSleeve style={{ marginRight: 'auto' }}>
            <Canvas fill="none" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} fill={colourString('default_2')} fillOpacity={1} />

              <text y={53.5} x={50} textAnchor={'middle'} fill="var(--text)" fontSize={8} fillOpacity={0.7}>
                No Data
              </text>
            </Canvas>
          </CanvasSleeve>
        </DonutInner>
      </DonutWrapper>
    );
  }

  return (
    <DonutWrapper>
      <DonutInner>
        <CanvasSleeve>
          {children.length > 1 ? (
            <Canvas fill="none" viewBox="0 0 100 100" className={classNames({ hasTooltips: props.showTooltips })}>
              {parts.map((part, i) => {
                return <path key={i} fill={`var(--${part.colour})`} d={part.commands} transform={`rotate(${part.offset})`} onMouseEnter={e => props.showTooltips && handleMouseEnter(e, part)} />;
              })}

              <g id="text" textAnchor="middle" fill="var(--text)">
                {props.showTotal && (
                  <text y={characterLengthOfTotal <= 3 ? 52 : 54} x={50} fontSize={characterLengthOfTotal <= 3 ? 18 : 14} style={{ fontWeight: 'bold', fontFamily: 'var(--heading)' }}>
                    {total}
                  </text>
                )}

                <text y={props.showTotal ? 64 : 53} x={50} fontSize={characterLengthOfLabel > 20 ? 5 : 6} style={{ fontWeight: 'normal', fontFamily: 'var(--body)' }}>
                  {props.label}
                </text>
              </g>
            </Canvas>
          ) : (
            <Canvas fill="none" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={44} fill={'none'} strokeWidth={12} stroke={colourString(children[0].colour)} onMouseEnter={(e: any) => props.showTooltips && handleMouseEnter(e, parts[0])} />
              <text y={53.5} x={50} textAnchor={'middle'} fill="var(--text)" fontSize={characterLengthOfLabel > 20 ? 5 : 6}>
                {children[0].label}
              </text>
            </Canvas>
          )}
        </CanvasSleeve>

        <DonutLegend>
          <DonutLegendList>
            {parts.map(part => {
              return (
                <DonutLegendListItem swatchColor={part.colour} key={part.label}>
                  {part.label}
                </DonutLegendListItem>
              );
            })}
          </DonutLegendList>
        </DonutLegend>
      </DonutInner>
    </DonutWrapper>
  );
}

