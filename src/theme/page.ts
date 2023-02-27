import styled from 'styled-components';

export const Page = styled.div`
  display: block;
  color: var(--text);
`;

export const BottomFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row-reverse nowrap;
  background: var(--background_2);
  border: 1px solid var(--borders);
  z-index: 100;
  box-shadow: inset 0px 0px 25px var(--inner-shadow-colour);
  backdrop-filter: blur(10px);
`;

