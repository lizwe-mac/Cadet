import { createActionsHook, createStateHook } from 'overmind-react';
import { state } from './state';
import * as actions from './actions';
import { IContext } from 'overmind';

export type Context = IContext<typeof config>;

export const useAppState = createStateHook<Context>();
export const useAppActions = createActionsHook<Context>();

export const config = {
  state,
  actions,
};