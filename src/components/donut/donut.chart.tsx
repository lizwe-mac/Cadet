import React from 'react';
import { Canvas, CanvasSleeve, DonutInner, DonutLegend, DonutLegendList, DonutLegendListItem, DonutWrapper, DonutSide, DonutSideText } from './donut.styles';
import { handleMouseEnter } from './donut.functions';
import { IDonutProps, IDonutSliceProps } from './donut.models';
import * as math from './donut.math';
import classNames from 'classnames';
import { PropsWithChildrenOfType } from '../../models/faux-child';
import { colourString } from '../helpers';
import { randomColours } from '../../theme/colours';

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

  const text = <div id="text">
    <DonutSideText>
      {props.showTotal && (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
          <h6 style={{ fontWeight: 'light', fontFamily: 'var(--heading)', margin:'0', padding:'0' }} >Skill score:</h6>
          <h5 style={{ fontWeight: 'bold', fontFamily: 'var(--heading)', color:`${randomColours[8]}`, fontSize:`${characterLengthOfLabel > 20 ? 30 : 35}`, margin:'0', padding:'0' }}>
            {Math.round(total/1000 * 100)} %
          </h5>
        </div>
      )}

      <h5 style={{ fontWeight: 'bold', fontFamily: 'var(--body)', fontSize:`${characterLengthOfLabel > 20 ? 30 : 35}` }}>
        
        {props.label}
      </h5>
    </DonutSideText>
  </div>;

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
      <DonutSide>
        {children.length > 1 ? text : ''}
      </DonutSide>
    </DonutWrapper>
  );
}

