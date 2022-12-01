import { ThemeProvider } from './theme.provider';

export interface ThemeContext {
  theme: 'light' | 'dark';
  readonly toggleTheme: InstanceType<typeof ThemeProvider>['toggleTheme'];
}

export type Props = {
  readonly children: React.ReactNode;
};

export type State = {
  readonly context: ThemeContext;
};
