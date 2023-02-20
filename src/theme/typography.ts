import styled from 'styled-components';
import * as colours from './colours';

const Body1 = styled.p<{ colour?: colours.ThemeColours }>`
  font-family: var(--body);
  font-weight: 700;
  font-size: 0.89rem;
  line-height: 1.22rem;
  color: ${props => `var(--${props.colour ?? 'text'})`};
  margin: 0;
`;

const Body2 = styled.p<{ colour?: colours.ThemeColours }>`
  font-family: var(--body);
  font-weight: 400;
  font-size: 0.89rem;
  line-height: 1.22rem;
  color: ${props => `var(--${props.colour ?? 'text'})`};
  margin: 0;
`;

const Caption1 = styled.h6<{ colour?: colours.ThemeColours }>`
  font-family: var(--body);
  font-weight: 400;
  font-size: 0.78rem;
  line-height: 1.06rem;
  color: ${props => `var(--${props.colour ?? 'text'})`};
  margin: 0;
`;

const Caption2 = styled.h6<{ colour?: colours.ThemeColours }>`
  font-family: var(--body);
  font-weight: 400;
  font-size: 0.67rem;
  line-height: 0.89rem;
  color: ${props => `var(--${props.colour ?? 'text'})`};
  margin: 0;
`;

const Display1 = styled.h1<{ colour?: colours.ThemeColours }>`
  font-family: var(--heading);
  font-weight: 600;
  font-size: 3.35rem;
  line-height: 3.35rem;
  color: ${props => `var(--${props.colour ?? 'headings'})`};
  margin: 0;

  @media screen and (max-width: 580px) {
    font-size: 2.5rem;
    line-height: 2.813rem;
  }
`;

const Heading1 = styled.h1<{ colour?: colours.ThemeColours }>`
  font-family: var(--heading);
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.05rem;
  color: ${props => `var(--${props.colour ?? 'headings'})`};
  margin: 0;

  @media screen and (max-width: 580px) {
    font-size: 1.875rem;
    line-height: 1.875rem;
  }
`;

const Heading2 = styled.h2<{ colour?: colours.ThemeColours }>`
  font-family: var(--heading);
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 2.35rem;
  color: ${props => `var(--${props.colour ?? 'headings'})`};
  margin: 0;

  @media screen and (max-width: 580px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

const Heading3 = styled.h3<{ colour?: colours.ThemeColours }>`
  font-family: var(--heading);
  font-weight: 700;
  font-size: 1.67rem;
  line-height: 1.78rem;
  color: ${props => `var(--${props.colour ?? 'headings'})`};
  margin: 0;

  @media screen and (max-width: 580px) {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`;

const Heading4 = styled.h4<{ colour?: colours.ThemeColours }>`
  font-family: var(--heading);
  font-weight: 600;
  font-size: 1.35rem;
  line-height: 1.67rem;
  color: ${props => `var(--${props.colour ?? 'headings'})`};
  margin: 0;

  @media screen and (max-width: 580px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`;

const Heading5 = styled.h5<{ colour?: colours.ThemeColours }>`
  font-family: var(--heading);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1rem;
  color: ${props => `var(--${props.colour ?? 'headings'})`};
  margin: 0;

  @media screen and (max-width: 580px) {
    font-size: 1rem;
    line-height: 1.125rem;
  }
`;

const Subtitle = styled.h6<{ colour?: colours.ThemeColours }>`
  font-family: var(--body);
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: ${props => `var(--${props.colour ?? 'headings'})`};
  margin: 0;

  @media screen and (max-width: 580px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export { Display1, Heading1, Heading2, Heading3, Heading4, Heading5, Subtitle, Body1, Body2, Caption1, Caption2 };

