import styled from 'styled-components';
import { ThemeColours } from '../../theme/colours';

export const DonutWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px 0;
  justify-content: center;
`;

export const DonutInner = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DonutSideText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 10px;
`;

export const DonutSide = styled.div`
  width: 40%
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CanvasSleeve = styled.div`
  flex: 1;
  max-width: 40%;
  flex-basis: 60%;
  background: transparent;
`;

export const Canvas = styled.svg`
  display: block;

  path {
    transform-origin: center center;
  }

  &.hasTooltips path:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const DonutLegend = styled.div`
  flex: 1;
  max-width: 60%;
  flex-basis: 60%;
  padding-left: 25px;
`;

export const DonutLegendList = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DonutLegendListItem = styled.li<{ swatchColor: ThemeColours }>`
  display: block;
  color: var(--text);
  font-size: 12px;
  font-family: var(--body);
  padding-left: 18px;
  line-height: 22px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background: ${({ swatchColor }) => `var(--${swatchColor})`};
    position: absolute;
    left: 0;
    top: 6px;
  }
`;

