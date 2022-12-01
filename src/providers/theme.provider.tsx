import React, { Component } from 'react';
import { ThemeContext, Props, State } from './provider.types';

export const themeContext = React.createContext<ThemeContext>(undefined!);

export class ThemeProvider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.toggleTheme = this.toggleTheme.bind(this);

    this.state = {
      context: {
        theme: 'light',
        toggleTheme: this.toggleTheme,
      },
    };
  }

  toggleTheme() {
    this.setState({
      context: {
        ...this.state.context,
        theme: this.state.context.theme === 'light' ? 'dark' : 'light',
      },
    });
  }

  render() {
    console.log(this.state.context);
    return (
      <themeContext.Provider value={this.state.context}>
        {this.props.children}
      </themeContext.Provider>
    );
  }
}

export function useThemeContext() {
  const context = React.useContext(themeContext);

  if (!context) {
    throw new Error(`useThemeContext must be used within ThemeProvider`);
  }
  return context;
}
