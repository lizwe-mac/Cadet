/* eslint @typescript-eslint/ban-types: 0  */
import { PropsWithChildren } from 'react';

export interface FauxChild<Props = {}> {
  type: Function;
  props: PropsWithChildren<Props>;
}

export type ChildType<C> = React.ReactElement<C> | React.ReactElement<C>[];

export type PropsWithChildrenOfType<T = {}, C = any> = T & { children?: ChildType<C> };

