import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 50px 0;
  display: grid;
  place-items: center;
`;

export const LoginForm = styled.form`
  background: var(--cards_2);
  border: 1px solid var(--borders);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2), inset 0px 0px 25px rgba(55, 53, 126, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  width: 90%;
  max-width: 550px;
  padding: 20px;
`;

export const LoginFormControl = styled.div`
  display: block;
  width: 100%;
  height: auto;
  padding-bottom: 20px;

  span {
    display: block;
    font-size: 18px;
    font-family: var(--headings);
    font-weight: bold;
    color: var(--text);
    line-height: 2;
  }

  input {
    appearance: none;
    display: block;
    width: 100%;
    height: 45px;
    border-radius: 8px;
    background: var(--cards);
    border: 1px solid var(--borders);
    color: var(--text);
    font-size: 16px;
    text-indent: 10px;
    font-family: var(--body);

    &::placeholder {
      color: var(--text_2);
    }
  }
`;

export const LoginFormSubmit = styled(LoginFormControl)`
  padding-bottom: 0;
  text-align: right;
`;

