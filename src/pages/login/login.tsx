import classNames from 'classnames';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppActions, useAppState } from '../../overmind';
import { Page } from '../../theme/page';
import { LoginForm, LoginFormControl, LoginFormSubmit, LoginFormWrapper } from './login.styles';

export function LoginPage(): JSX.Element {
  const { user } = useAppState();
  const actions = useAppActions();
  const [loading, setLoading] = useState<boolean>(false);

  if (!!user) {
    return <Navigate to={'/analysis/review-team'} />;
  }

  return (
    <Page>
      <LoginFormWrapper>
        <LoginForm
          autoComplete="off"
          onSubmit={event => {
            setLoading(true);
            event.preventDefault();
            actions.login();
          }}
        >
          <LoginFormControl>
            <label htmlFor="email">
              <span>Email</span>
              <input required type="email" placeholder="johndoe@yourcompany.co" />
            </label>
          </LoginFormControl>

          <LoginFormControl>
            <label htmlFor="password">
              <span>Password</span>
              <input required type="password" />
            </label>
          </LoginFormControl>

          <LoginFormSubmit>
            <button className={classNames({ loading })}>Log in</button>
          </LoginFormSubmit>
        </LoginForm>
      </LoginFormWrapper>
    </Page>
  );
}

